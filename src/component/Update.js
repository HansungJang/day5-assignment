import React from "react";
import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import "../css-write/form.css";
import { Link } from "react-router-dom";

//import Delete from "./Delete"; // delete함수 추가

function Header_Update() {
  return (
    <div className="header_Write">
      {/*Header(Main)화면으로 이동하기*/}

      <div className="header">
        <div className="btn">
          <Link to={"/"}>
            <span className="home">Home</span>
          </Link>
        </div>
        <div className="header-title">Update your diary</div>
      </div>
    </div>
  );
}

// 넘어와야할 데이터
function Update() {
  const location = useLocation();
  const id = location.state.id;
  const title = location.state.title;
  const owner_name = location.state.owner_name;
  const date = location.state.date;
  const body = location.state.body;
  const pass = location.state.pass;

  const [update_title, setTitle] = useState(title);
  const [update_body, setBody] = useState(body);
  const [update_name, setName] = useState(owner_name);
  const [update_password, setPassword] = useState(pass); // 보안 위해 빈공간으로 두기
  const [update_date, setDate] = useState(date);

  return (
    <div className="html">
      <Header_Update />

      <h1>{update_name}님이 작성하신 글 입니다.</h1>
      <strong>
        # 수정하시기 위해서 비밀번호 기입을 꼭 해주세요!(빈칸이 있으면 안되요)
      </strong>
      <hr></hr>

      <div className="recap-form">
        <div
          className="title" // 글의 제목
        >
          <div className="title-form">
            <h4>제목</h4>
            <input
              value={update_title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
        </div>

        <hr />
        <div className="owner">
          {" "}
          <div
            className="owner_name" //작성자 이름
          >
            <h4>이름</h4>
            <input
              placeholder="이름"
              value={update_name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
        </div>

        <div
          className="date" //작성자 날짜
        >
          <h4>날짜</h4>
          <input
            type="date"
            value={update_date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
        </div>

        <div className="owner">
          <div
            className="owner_password" //사용자 비밀번호
          >
            <h4>비밀번호</h4>
            <input
              type="password" //masking(효과)
              placeholder="비밀번호"
              value={update_password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
        </div>

        <hr />
        <div
          className="body" //본문내용
        >
          <textarea
            placeholder="본문작성"
            value={update_body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>

        <hr />

        <div className="bottom">
          <button
            onClick={(e) => {
              // 데이터 넣어줄 DB API

              console.log(id, title, owner_name, date, body, pass);
              const formData = new FormData();

              formData.append("id", id);
              formData.append("title", update_title);
              formData.append("body", update_body);
              formData.append("date", update_date);
              formData.append("owner_name", update_name);
              formData.append("owner_pass", update_password);
              // formData.append("owner_image", img);

              //            if (!password) {
              //             alert("비번을 입력해주세요/1");
              //            }

              fetch("https://ll-api.jungsub.com/diary/update", {
                method: "post",
                body: formData,
              })
                .then((data) => data.json())
                .then((json) => {
                  if (!!json.ok) {
                    // navigate("/recap/" + json.ok._id);
                    // *자동 새로고침 기능 추가하기!
                    window.location.reload();
                  } else {
                  }
                });
            }}
          >
            업데이트
          </button>

          {/* <Delete id={id} pass={update_password}></Delete> */}
        </div>
      </div>
    </div> // update form 끝
  );
}

export default Update;
