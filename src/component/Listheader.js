import { Link } from "react-router-dom";

export default function ListHeader() {
  return (
    <div className="header">
      <Link to={`/`}>
        <div className="home">
          <h3>Home</h3>
        </div>
      </Link>
      <div className="header__logo">
        <a href="#">Recaps</a>
      </div>
      <div className="write">
        <Link to={`/Write`}>
          <h3>새 글 쓰기</h3>
        </Link>
      </div>
    </div>
  );
}
