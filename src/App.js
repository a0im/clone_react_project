
import { Route , Routes , BrowserRouter} from "react-router-dom";
import Header from "./component/Header";
import Main from "./component/Main";

/*
  tailwind , reactRouter , redux // immer ??? 보류 //axios // react icons
  grid 1240
  컨텐츠 5개 // 스크롤 갯수 총 15개


  제목
  장르 공포 스릴러 로멘스 
  종류 영화 만화 드라마 교양
  시청점수
  출시일
  유료 무료 
 */
  // style="bg-[#1b1b1b]"

  // className="bg-[#1b1b1b]"
const App = () => {
  return (
    <div >
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>     
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
