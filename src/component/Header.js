import { Link } from "react-router-dom"
import { HiMagnifyingGlass } from "react-icons/hi2";

const Header = () => {
  const path = process.env.PUBLIC_URL;

  return (
    <header className="max-w-[1240px] mx-auto">
      <div className="border-b-2 border-[#2d2d2d]">
        <ul className="flex text-[#a5a586] justify-end items-center h-9 text-xs">
          <li className="px-[10px]"><Link to="/">로그인</Link></li>
          <li className="px-[10px]"><Link to="/">이용권</Link></li>
          <li className="px-[10px]"><Link to="/">쿠폰'코인</Link></li>
          <li className="px-[10px]"><Link to="/">웨이브온</Link></li>
          <li className="px-[10px]"><Link to="/">이벤트</Link></li>
        </ul>
      </div>

      <div  className="flex justify-between w-[100%] h-20 items-center">
        <div className="flex">
          <h1 className="mr-[78px]" >
            <Link to='/'><img src={`${path}/images/logo.svg`} alt="" /></Link>
          </h1> 

          <nav>
              <ul className="flex text-[#a5a586] space-x-5 text-xl">
                <li className="px-[10px]"><Link to='/'>홈</Link></li>
                <li className="px-[10px]"><Link to='/'>카테고리</Link></li>
                <li className="px-[10px]"><Link to='/'>LIVE</Link></li>
                <li className="px-[10px]"><Link to='/'>MY</Link></li>
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
    </header>
  )
}

export default Header