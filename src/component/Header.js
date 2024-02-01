import React from "react";
import "../css/header.css";
import "../css/month.css";
import "../css/footer.css";
import "../css/container.css";
import "../css/goal.css";
import Footer from "../Footer";
import "./Month.js";

//화면 전환을 위한 reat-router-dom {Link}요소 사용
import { Link } from "react-router-dom";

function Title() {
  return (
    <nav className="header">
      <span className="header__menu">
        <Link to={"/list/1"}>
          {/*예지 List 추가 */}
          <span id="listbtn">글 목록</span>
        </Link>
      </span>
      <span className="header__logo">
        <a href="#">Recaps</a>
      </span>

      <span className="header__menu">
        <Link to={"/write"}>📝새 글 쓰기</Link>
      </span>

      <a href="#" className="header__toogleBtn">
        <i className="fa-solid fa-bars"></i>
      </a>
    </nav>
  );
}
function Goal() {
  return (
    <div className="goal__container">
      <span className="yeargoal">올해의 목표 : </span>
      <div className="goalcov">
        <div className="goal">
          <ul className="goalcontent">
            <li className="banner">잘 먹고, 잘 놀고, 잘 개발하기 !</li>
            <li className="banner">잘 먹고, 잘 놀고, 잘 개발하기 !</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Month(month) {
  const monthcolor = [];
  console.log(month);
  return (
    <div className="several-month">
      <Link to={"/list/" + month.month}>
        <div
          className="month-card"
          style={{ background: monthcolor[month.month - 1] }}
        >
          <div className="month">{month.month}월</div>
        </div>
      </Link>
    </div>
  );
}

// function Footer() {
//   return (
//     <div className="footer">
//       <img
//         id="likelionLogo-footer"
//         src="https://i.ibb.co/QfYWJV0/frontend-recpas.jpg"
//       />
//       <span id="title-footer">LikeLion Frontend</span>

//       <div id="likelionAddress-footer">
// <p>
//   <span>(주)멋쟁이사자처럼</span>|<span>한동대학교</span>|
//   <span>Front-End</span>
// </p>
// <p>경상북도 포항시 북구 흥해읍 한동로 558</p>
//       </div>
//     </div>
//   );
// }

function Header() {
  const monthlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  console.log(monthlist);
  return (
    <body>
      <div className="container">
        <Title></Title>
        <Goal></Goal>
        <div className="month-container">
          {monthlist.map((month) => (
            <Month month={month} />
          ))}
        </div>
      </div>
    </body>
  );
}

export default Header;
