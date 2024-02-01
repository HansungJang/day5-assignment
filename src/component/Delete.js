import React from "react";
import { useEffect, useState } from "react";

import "../css-write/delet.css";

function Delete({ id, pass }) {
  const [password, setPassword] = useState("");
  const Getpass = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="bottom_delete">
      <input
        className="pass_input"
        value={password}
        onChange={Getpass}
        placeholder="삭제를 위해 비밀번호를 입력해주세요."
      />

      <button
        onClick={(e) => {
          // 데이터 넣어줄 DB API

          console.log(id, password);
          const formData = new FormData();

          //formData.append("id", id);
          formData.append("owner_pass", password);

          fetch("https://ll-api.jungsub.com/diary/delete/" + id, {
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
                console.log("error");
              }
            });
        }}
      >
        삭제하기
      </button>
    </div>
  );
}

export default Delete;
