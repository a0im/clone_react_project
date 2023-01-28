import { useState, useEffect, useMemo, useRef } from "react";

const Banner = () =>{
  const [slideIdx , setSlideIdx] = useState(0);
  const [renderGud, setRenderGud] = useState(true)
  const slideRef = useRef(null)
  const path = process.env.PUBLIC_URL;
  const duration = 400
  const imgLength = 5;

  const renderSlideImg = useMemo( () => {
    let bannerImg = Array.from({length: imgLength}, (_,i) => {
      return ( 
        <li key={i} className='banner-list' style={{backgroundImage : `url("${path}/images/banner-img-${i}.jpg")`}}>
          <a href="#">
            <img className="w-[100%]" src={`${path}/images/banner-text-${i}.png`} alt={`banner${i}`}/>
          </a>
        </li> 
      )
    }) 
    return bannerImg
  },[slideIdx])

  const bulletIdx = () => {
    switch (slideIdx) {
      case imgLength : return 0;
      case  -1 : return imgLength - 1
      default : return slideIdx
    }
  }

  const renderBullet = Array.from({length: imgLength}, (_,i) => {
    return (
      <li key={i}>
        <span className={(bulletIdx() === i ? "bg-white" : "bg-[#606060]") + " banner-bullet"}></span>
      </li>
    )
  })

  const delay = (time) => new Promise(resolve => setTimeout(resolve,time));

  const initSlide = async(value) => {
    await delay(duration)
    setRenderGud(false)
    setSlideIdx(value)
    await delay(duration)
    setRenderGud(true)
  }

  useEffect(()=>{
    if (slideIdx < 0) initSlide(imgLength - 1)
    else if (slideIdx > imgLength - 1) initSlide(0)

    const ulWidth = slideRef.current?.offsetWidth / 3
    const liWidth = ulWidth / imgLength
    slideRef.current.style.transform = `translateX(-${ulWidth + (slideIdx * liWidth)}px)`
    slideRef.current.style.transition = renderGud ? duration + "ms" : "0s"

    const runSlide = setTimeout(() => setSlideIdx(slideIdx + 1),3000)

    return () =>clearTimeout(runSlide)
  },[slideIdx,[]])
  

  const prevBtn = () => {
    if (!renderGud) return
    setSlideIdx(slideIdx - 1)
  }

  const nextBtn = () => {
    if (!renderGud) return
    setSlideIdx(slideIdx + 1)
  }

  return(
    <section>
      <h2 className="text-[0px]">banner</h2>
        <div className="grid-1240 overflow-hidden relative">
          <button onClick={prevBtn} className="slideBtn bg-[url('/public/images/left-slide.png')] left-[100px]"></button>
          <button onClick={nextBtn} className="slideBtn bg-[url('/public/images/right-slide.png')] right-[100px]"></button>

        <div className="absolute w-[1240px] h-[555px] left-1/2 translate-x-[-50%] ">  
          <ul ref={slideRef} className="flex absolute flex-nowrap space-x-2.5">
            {renderSlideImg}
            {renderSlideImg}
            {renderSlideImg}
          </ul>
        </div>

        <div className="absolute bottom-0 flex items-center justify-center w-full">
          <button className="mt-1 w-[34px] h-[34px] block bg-[url('/public/images/stop-btn.svg')]"></button>
          <ul className="flex space-x-1 z-10 h-[34px] items-center ">
            { renderBullet }
          </ul>
        </div>
    </div>
    </section>
  )
}

export default Banner
