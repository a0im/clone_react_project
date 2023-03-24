
import { Route , Routes , BrowserRouter} from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { setContent } from "./store/store";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import My from "./component/My";


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
      <BrowserRouter  basename={process.env.PUBLIC_URL}>
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
