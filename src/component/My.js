
const My = () => {
  return(
    <div>
      <div className="mx-auto my-20 py-10 w-[560px] text-center bg-[#252525]">
        <h2 tabIndex="0" className="mb-10 text-[32px] text-[#fff]">로그인</h2>
        <h3 tabIndex="0" className="mb-7 text-lg text-[#a5a5a5]">Wavve 계정으로 로그인</h3>
        <form className="px-[40px]">
          <fieldset>
            <legend className="hidden">로그인폼</legend>
              <ul className="text-center">
                <li className="mb-[10px]">
                  <label>
                    <input className="input-style" type="text" placeholder="이메일 주소 또는 아이디" />
                  </label>
                  </li>
                <li className="mb-[10px]">
                  <label>
                    <input className="input-style" type="password" placeholder="비밀번호" />
                  </label>
                </li>
              </ul>
              <ul className="flex text-[14px] text-[#a5a5a5] mt-[14px] mb-[33px]">
                <li className=" mr-[15px]">
                  <input className="w-0 h-0" type="checkbox" />
                  <label onclick={()=>{}} className="flex before-checkedBox" htmlFor="saveId">아이디 저장</label>
                </li>
                <li >
                  <input className="w-0 h-0" type="checkbox" />
                  <label onclick={()=>{}} className="flex before-checkedBox"  htmlFor="loginAuto">자동 로그인</label>
                </li>
              </ul>
              <div>
                <a href="#" title="로그인" className="leading-[60px] rounded-full  text-[18px] h-[60px] w-full bg-[#1451f9]">로그인</a>
              </div>
              <ul className="flex justify-center mt-5 mb-[50px] text-[14px] text-[#a5a5a5]">
                <li><a className="pr-[14px]" href="#">아이디 찾기</a></li>
                <li><a className="px-[14px] relative sectionbar" href="#">비밀번호 재설정</a></li>
                <li><a className="pl-[14px]" href="#">회원가입</a></li>
              </ul>
              <div className="relative flex justify-between items-center">
                <span className="w-[21%] border-b-[1px] border-[#2f2f2f]"></span>
                <h3 className="text-[#a5a5a5]">또는 다른 서비스 계정으로 로그인</h3>
                <span className="w-[21%] border-b-[1px] border-[#2f2f2f]"></span>
              </div>
              <div>
                <ul className="flex space-x-[16px] justify-center mt-5 mb-10">
                  <li><a className="sns-a bg-[#ffec00]" href="#"><span className="my-sns bg-[url(/public/images/my/kakao.png)]"></span></a></li>
                  <li><a className="sns-a " href="#"><span className="my-sns bg-[url(/public/images/my/skt.png)]"></span></a></li>
                  <li><a className="sns-a bg-[#23b80a]" href="#"><span className="my-sns bg-[url(/public/images/my/naver.png)]"></span></a></li>
                  <li><a className="sns-a bg-[#3c5997]" href="#"><span className="my-sns bg-[url(/public/images/my/fb.png)]"></span></a></li>
                  <li><a className="sns-a" href="#"><span className="my-sns bg-[url(/public/images/my/apple.png)]"></span></a></li>
                </ul>
              </div>
              <div className="text-sm text-left text-[#a5a5a5]">
                SNS계정으로 간편하게 가입하여 서비스를 이용하실 수 있습니다.
                기존 POOQ 계정 또는 Wavve 계정과는 연동되지 않으니 이용에 참고하세요.
              </div>
          </fieldset>
        </form>
        
      </div>
    </div>
  )
}

export default My