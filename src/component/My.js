
const My = () => {

  return(
    <div>
      <div className="mx-auto my-20 py-10 w-[560px] text-center bg-[#252525]">
        <h2 tabIndex="0" className="mb-10 text-[32px] text-[#fff]">로그인</h2>
        <h3 tabIndex="0" className="mb-7 text-lg text-[#606060]">Wavve 계정으로 로그인</h3>
        <form>
          <fieldset>
            <legend className="hidden">로그인폼</legend>
              <ul>
                <li>
                  <label>
                    <input type="text" placeholder="이메일 주소 또는 아이디" />
                  </label>
                  </li>
                <li>
                  <label>
                    <input type="password" placeholder="비밀번호" />
                  </label>
                </li>
              </ul>
              <ul>
                <li>
                  <input type="checkbox" />
                  <label For="saveId">아이디 저장</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label For="loginAuto">자동 로그인</label>
                </li>
              </ul>
              <div>
                <a href="#" title="로그인">로그인</a>
              </div>
              <ul>
                <li><a href="#">아이디 찾기</a></li>
                <li><a href="#">비밀번호 재설정</a></li>
                <li><a href="#">회원가입</a></li>
              </ul>
              <div>
                <span></span>
                <h3>또는 다른 서비스 계정으로 로그인</h3>
                <span></span>
              </div>
              <div>
                <ul>
                  <li><a href="#"><span></span></a></li>
                  <li><a href="#"><span></span></a></li>
                  <li><a href="#"><span></span></a></li>
                  <li><a href="#"><span></span></a></li>
                  <li><a href="#"><span></span></a></li>
                </ul>
              </div>
              <div>
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