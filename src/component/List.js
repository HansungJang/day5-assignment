// 예지
// import { Link } from "react-router-dom";
import React from "react";
import "../css/list.css";
import Block from "./Block";
import Month from "./Month";
import ListHeader from "./Listheader";

//read, delete

function List() {
  return (
    <div className="list">
      <div className="num">
        <ListHeader></ListHeader>
        <Month></Month>
        <Block week="1"></Block>
        {/* <Block week="2"></Block>
        <Block week="3"></Block>
        <Block week="4"></Block> */}
      </div>
    </div>
  );
}

export default List;
