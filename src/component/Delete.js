import React from "react";
import { useState } from "react";

function Delete({ id, pass }) {
  return (
    <div className="bottom_delete">
      <button
        onClick={(e) => {
          // 데이터 넣어줄 DB API

          console.log(id, pass);
          const formData = new FormData();

          formData.append("id", id);
          //formData.append("owner_pass", pass);

          fetch("https://ll-api.jungsub.com/diary/delete/", {
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
        삭제하기
      </button>
    </div>
  );
}

export default Delete;
