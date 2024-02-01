import { Link } from "react-router-dom";

// Write part의 상단 paige 이동 항목
export default function Writeheader() {
  return (
    <div className="header_Write">
      {/*Header(Main)화면으로 이동하기*/}

      <span className="Header_Main">
        <Link to={"/"}>
          <span id="homebtn">Home</span>
        </Link>
      </span>

      <span className="List">
        <Link to={"/list"}>
          {/*예지 List 추가 */}
          <span id="listbtn">List</span>
        </Link>
      </span>

      <div className="title-header">Write your diary</div>
    </div>
  );
}
