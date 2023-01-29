
import { Route , Routes , BrowserRouter} from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { setContent } from "./store/store";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import My from "./component/My";

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
  const path = process.env.PUBLIC_URL;

  let dispatch = useDispatch()


  useEffect(() => {
    axios.get(`${path}/db/db.json`)
    .catch(err => console.log(err,"--error"))
    .then(res => {
      console.log(res.data);
      dispatch(setContent(res.data))
    })
  },[])
  return (
    <div >
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>     
        <Route path="/my" element={<My/>}/>     
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
