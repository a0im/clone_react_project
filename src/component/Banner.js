
const Banner = () =>{
  const path = process.env.PUBLIC_URL;

  return(
    <section>
      <h2 className="text-[0px]">banner</h2>
        <div className="min-h-[555px] w-full min-w-[1240px] max-w-[3840px] overflow-hidden relative">
          <button className="slideBtn bg-[url('/public/images/left-slide.png')] left-[100px]"></button>
          <button className="slideBtn bg-[url('/public/images/right-slide.png')] right-[100px]"></button>

        <div className="absolute w-[1240px] h-[555px] left-1/2 translate-x-[-50%] ">  
          <ul className="flex absolute flex-nowrap space-x-2.5">
            <li className={'banner-list bg-[url("/public/images/banner-a.jpg")]'}>
              <a href="#"><img className="w-[100%]" src={`${path}/images/banner1.png`} alt="banner1" /></a>
            </li>

            <li className="banner-list bg-[url('/public/images/banner-b.jpg')]" >
              <a href="#"><img className="w-[100%]" src={`${path}/images/banner2.png`} alt="banner2" /></a>
            </li>

            <li className="banner-list bg-[url('/public/images/banner-c.jpg')]" >
              <a href="#"><img className="w-[100%]" src={`${path}/images/banner3.png`} alt="banner3" /></a>
            </li>

            <li className="banner-list bg-[url('/public/images/banner-d.jpg')]" >
              <a href="#"><img className="w-[100%]" src={`${path}/images/banner4.png`} alt="banner4" /></a>
            </li>

            <li className="banner-list bg-[url('/public/images/banner-e.jpg')]" >
              <a href="#"><img className="w-[100%]" src={`${path}/images/banner5.png`} alt="banner5" /></a>
            </li>
          </ul>
        </div>


        <div className="absolute bottom-0 flex items-center justify-center w-full">
          <button className="mt-1 w-[34px] h-[34px] block bg-[url('/public/images/stop-btn.svg')]"></button>

          <ul className="flex space-x-1 z-10 h-[34px] items-center ">
            <li><span className="banner-bullet"></span></li>
            <li><span className="banner-bullet"></span></li>
            <li><span className="banner-bullet"></span></li>
            <li><span className="banner-bullet"></span></li>
            <li><span className="banner-bullet"></span></li>
          </ul>
        </div>
    </div>




    </section>
  )
}

export default Banner
