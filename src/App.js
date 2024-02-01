import Header from "./component/Header";
import "../src/css/header.css";
import Write from "./component/Write";
import List from "./component/List";
import Month from "./component/Month";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./component/Detail";
import Item from "./component/pages/Item";
import Mainpage from "./component/pages/Mainpage";
import Block from "./component/Block";
import Update from "./component/Update"; // update화면

function App() {
  return (
    // ȭ�� ��ȯ�� �̷�������� react-router-dom�� ���

    // react-router-dom

    // 화면 전환이 이루어지도록 react-router-dom을 사용
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/main" element={<Mainpage />}></Route>
        <Route path="/write" element={<Write />}></Route>

        <Route path="/list/:month" element={<List />}></Route>
        {/* <Route path="/list/detail" element={<Detail />}></Route> */}
        <Route path="/list" element={<List />}></Route>
        <Route path="/:id" element={<Item />}></Route>
        <Route path="/list" element={<Block />}></Route>
        <Route path="/update" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>

    // <div>
    //   <Header />
    // </div>
  );
}

export default App;
