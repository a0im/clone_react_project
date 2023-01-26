const path = process.env.PUBLIC_URL;

const Footer = () => {
  const navText = ["회사소개","인재채용","서비스소개","이용약관","개인정보 처리방침","고객센터"]
  const navEl = navText.map((text)=>{
    return <li><a className={text == "이용약관" ? "footer-a":"font-bold"} href="#">{text}</a></li>
  })

  

  return(
    <footer className="grid-1240">
      <div className="w-[1240px] m-auto text-[#717171] relative">
        <nav>
          <ul className="flex my-[10px] text-[14px] space-x-[24px]">
              { navEl }
          </ul>
        </nav>
        <ul className="text-[12px]">
          <li className="space-x-[6px] footer-span"><span>콘텐츠웨이브 주식회사</span><span>대표이사 이태현</span><span>1599-3709 (평일 09:00~18:00 / 점심시간 12:00~13:00 주말 및 공휴일 휴무)</span></li>
          <li className="space-x-[6px] footer-span"><span>사업자등록번호 220-88-38020</span><span>호스팅서비스제공자 : 마이크로소프트 유한회사, 구글클라우드코리아 유한회사, 아마존웹서비시즈코리아 유한회사</span></li>
          <li className="space-x-[6px] footer-span"><span>통신판매업 신고번호 : 제 2021-서울영등포-0585호</span>통신판매업 정보 공개:<a className="footer-a underline" href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=220-88-38020">http://www.ftc.go.kr/bizCommPop.do?wrkr_no=220-88-38020</a></li>
          <li className="space-x-[6px] footer-span"><span>서울특별시 영등포구 여의나루로 60 포스트타워 19층</span><span>전자우편주소 : <a className="footer-a " href="mailto:helpdesk@wavve.com">helpdesk@wavve.com</a></span></li>
        </ul>
        <p className="text-[12px] mt-[10px]">Copyright© 콘텐츠웨이브(주) All rights reserved.</p>
        <div>
          <div className="flex absolute right-0 top-5">
            <div className="bg-[#252525]"><img src={`${path}/images/footer-input-btn.svg`} alt="btn" /></div>

            <select defaultValue='common' name="service" className="bg-[#252525] pl-[13px] text-[14px ] ml-[2px] mr-[13px]">
              <option value="intro">웨이브온 소개</option>
              <option value="pcroom">웨이브온 PC방 서비스</option>
              <option value="library">웨이브온 도서관 서비스</option>
              <option value="hospital">웨이브온 병원 서비스</option>
              <option value="tel">웨이브온 숙박 서비스</option>
              <option value="common">웨이브온 일반 서비스</option>
            </select>

            <div className="flex">
                <a href="/"><img className="h-[38px]" src={`${path}/images/sns-btn1.png`}  alt="snsbtn" /></a>
                <a href="/"><img className="h-[38px] ml-[5px]" src={`${path}/images/sns-btn2.png`}  alt="snsbtn" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )

}

export default Footer