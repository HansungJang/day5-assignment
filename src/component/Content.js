import { useState } from "react";
import Modal from "react-modal";
import Detail from "./Detail";
import { useParams, Link } from "react-router-dom";
import "../css/content.css";
//import Update from "./Update"; // update함수 추가
import Delete from "./Delete"; // update함수 추가

function MonthCal({ date }) {}

export default function Content({
  num,
  id,
  title,
  owner_name,
  img_path,
  date,
  body,
  pass,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const params = useParams();

  const month = date.slice(5, 7);

  if (Number(params.month) == Number(month)) {
    return (
      // <Link to={`/list/${id}`}>
      <div className="list-container">
        <div className="rect3" onClick={() => setModalIsOpen(true)}>
          <div className="content">
            <MonthCal date={date} />
            <div className="top-content">
              <span className="writer">
                <h4>{owner_name}</h4>
              </span>
              <span className="date">
                <h4>{date}</h4>
              </span>
            </div>
            <div className="title">
              <h2>제목 : {title} </h2>
            </div>
            <div className="text-content">
              <p>{body.length > 82 ? `${body.slice(0, 82)}... ` : body} </p>
            </div>
          </div>
        </div>
        <div className="modal">
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            id={id}
          >
            {/* <Detail></Detail> */}
            <div className="image">
              <img src={"https://ll-api.jungsub.com" + img_path}></img>
            </div>
            <h1>{title}</h1>
            <h4>{owner_name}</h4>
            <h5>{date}</h5>
            <p>{body}</p>
            {/* <Update
              id={id}
              title={title}
              owner_name={owner_name}
              date={date}
              body={body}
              pass={pass}
            ></Update>
            <button onClick={() => setModalIsOpen(false)}>닫기</button>
         */}
            <Link
              to="/update"
              state={{
                id: id,
                title: title,
                owner_name: owner_name,
                date: date,
                body: body,
                pass: pass,
              }}
            >
              <button>수정하기</button>
            </Link>
            <Delete id={id} pass={pass}></Delete>{" "}
            {/*삭제하기 기능은 구현 예정 아직 오류*/}
            <button onClick={() => setModalIsOpen(false)}>닫기</button>
          </Modal>
        </div>
      </div>
      // </Link>
    );
  } else {
    return <></>;
  }
}
