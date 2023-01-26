import { useState , useEffect ,useRef } from "react";
import { useSelector } from "react-redux";


let checkTypes = (arg1,arg2) =>  {
  let result = 
    Array.isArray(arg1) && arg1.includes(arg2) ||
    arg1 === arg2 ||
    arg1 === "all"
    ? true 
    : false
  return result
}

const ContentItems = ({cate}) => {
  const contentStore = useSelector(state => state.contentData)
  const [contentSlide , setContentSlide] = useState(0)
  const slideRef = useRef(null)
  const path = process.env.PUBLIC_URL;
  const renderCount = 10
  let renderData


  if (contentStore != null) {
    renderData = contentStore.data.filter( data => {
      let result = false

      if (checkTypes(cate.genre, data.genre)) {
        if (checkTypes(cate.type, data.type)) {
          result = true
        }
      }

        return result
    })
  }

  const printContent = renderData?.map((data,i) => {
    if (i < renderCount) {
      return (
        <li key={i} className="w-[240px] h-[360px] rounded-xl overflow-hidden bg-gray-300 flex-shrink-0 " >
          <img className="w-full h-full hover:scale-105 ransition-all duration-300" src={`${path}${data.img}`}  alt={data.title} />
        </li>
      )
    }
  })

  useEffect(()=>{
    slideRef.current.style.transform = `translateX(-${50 * contentSlide}%)`
  },[contentSlide])

  const prevSlide = () =>{
    if (!contentSlide > 0) return
    setContentSlide(0)
  } 
  
  const nextSlide = () =>{
    if (!contentSlide <= 0) return
    setContentSlide(1)
  } 

  return (
    <div className="relative h-[360px] mb-20">
      <ul ref={slideRef} className="absolute h-fit w-fit flex space-x-[10px] translate-x-1/2 transition-transform duration-500">
        {printContent}
        <li className="w-[240px] h-[360px] rounded-xl bg-gray-300 flex-shrink-0"></li>
        <li className="w-[240px] h-[360px] rounded-xl bg-gray-300 flex-shrink-0"></li>
        <li className="w-[240px] h-[360px] rounded-xl bg-gray-300 flex-shrink-0"></li>
        <li className="w-[240px] h-[360px] rounded-xl bg-gray-300 flex-shrink-0"></li>
        <li className="w-[240px] h-[360px] rounded-xl bg-gray-300 flex-shrink-0"></li>
        <li className="w-[240px] h-[360px] rounded-xl bg-gray-300 flex-shrink-0"></li>
        <li className="w-[240px] h-[360px] rounded-xl bg-gray-300 flex-shrink-0"></li>
        <li className="w-[240px] h-[360px] rounded-xl bg-gray-300 flex-shrink-0"></li>
        <li className="w-[240px] h-[360px] rounded-xl bg-gray-300 flex-shrink-0"></li>
        <li className="w-[240px] h-[360px] rounded-xl bg-gray-300 flex-shrink-0"></li>
      </ul>
      <div onClick={prevSlide} className={ (contentSlide > 0 ? "opacity-100" : "opacity-30") + " content-sl-btn left-0 bg-[url('/public/images/content-sl-left.png')]"} />
      <div onClick={nextSlide} className={ (contentSlide <= 0 ? "opacity-100" : "opacity-30") + " content-sl-btn right-0 bg-[url('/public/images/content-sl-right.png')]"} />
    </div>
  )
}

export default ContentItems