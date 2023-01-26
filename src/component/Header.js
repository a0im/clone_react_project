import { Link } from "react-router-dom"
import { HiMagnifyingGlass } from "react-icons/hi2";

const Header = () => {
  const path = process.env.PUBLIC_URL;

  let topNav = ["로그인","이용권","쿠폰·코인","웨이브온","이벤트"].map(text => {
    return <li className="px-[10px]"><Link to="/">{ text }</Link></li>
  })
//usparam 받아와서 색상하얗게
  return (
    <header className="h-20 z-20 relative mx-auto">
      <div className="fixed bg-[#1b1b1b] w-full">
        <div className="border-b-[1px] border-[#2d2d2d]">
          <ul className="flex text-[#a4a4a4] justify-end items-center h-9 text-xs w-[1200px] mx-auto font-medium">
            {topNav}
          </ul>
        </div>
        <div  className="flex justify-between w-[1200px] mx-auto h-20 items-center">
          <div className="flex">
            <h1 className="mr-[78px]" >
              <Link to='/'><img src={`${path}/images/logo.svg`} alt="" /></Link>
            </h1>
            <nav>
                <ul className="flex text-[#a4a4a4] space-x-5 text-xl font-medium">
                  
                  <li className="px-[10px] text-white"><Link to='/'>홈</Link></li>
                  <li className="px-[10px] "><Link to='/'>카테고리</Link></li>
                  <li className="px-[10px] hover:text-white"><Link to='/'>LIVE</Link></li>
                  <li className="px-[10px] hover:text-white"><Link to='/'>MY</Link></li>
                </ul>
            </nav>
          </div>
          <div>
            <div className="p-2">
              <HiMagnifyingGlass className="text-[21px] text-[#a5a5a5]" />
            </div>
            <input className="hidden" type="text"/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header