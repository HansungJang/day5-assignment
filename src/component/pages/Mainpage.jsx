import React, { useEffect, useState } from "react";
import Item from "./Item";

function Mainpage() {
  const [recaps, setRecaps] = useState([]);

  function getRecap() {
    fetch("https://ll-api.jungsub.com/diary/list")
      .then((response) => response.json())
      .then((data) => {
        setRecaps(data);
        console.log("data", data);
      });
  }

  useEffect(() => {
    getRecap();
  }, []);

  return (
    <div>
      <Item>{recaps.map((recap) => console.log(recap.date))}</Item>
    </div>
  );
}

export default Mainpage;
