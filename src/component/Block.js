import { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import WeekList from "./Weeklist";
import { useParams } from "react-router-dom";
import Item from "./pages/Item";
import React from "react";
import Content from "./Content";

export default function Block() {
  const [recaps, setRecaps] = useState([]);

  function getRecap() {
    fetch("https://ll-api.jungsub.com/diary/list")
      .then((response) => response.json())
      .then((data) => setRecaps(data));
  }

  useEffect(() => {
    getRecap();
  }, []);

  return (
    <div className="list">
      {recaps.map((element) => {
        return (
          <div key={element.id}>
            <Content
              id={element._id}
              title={element.title}
              owner_name={element.owner_name}
              date={element.date}
              body={element.body}
              img_path={element.img_path}
              pass={element.owner_pass}
            ></Content>
          </div>
        );
      })}

      <Item></Item>
    </div>
  );
}

Block.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner_name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  img_path: PropTypes.string.isRequired,
};
