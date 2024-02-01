import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function Month() {
  const params = useParams();
  const navigate = useNavigate();
  const [month, setMonth] = useState(Number(params.month));

  useEffect(() => {
    navigate(`/list/${month}`);
  }, [month, navigate]);

  const decreaseMonth = () => {
    let newMonth;
    if (month > 1) {
      newMonth = Number(month) - 1;
    } else {
      newMonth = 12;
    }
    setMonth(newMonth);
  };

  const increaseMonth = () => {
    let newMonth;
    if (month < 12) {
      newMonth = Number(month) + 1;
    } else {
      newMonth = 1;
    }
    setMonth(newMonth);
  };

  return (
    <div className="month">
      <Link to={"/list/" + (Number(month) - 1)}>
        <button onClick={decreaseMonth}>prev</button>
      </Link>
      <h1>{month} 월</h1>
      <Link to={"/list/" + (Number(month) + 1)}>
        <button onClick={increaseMonth}>next</button>
      </Link>
    </div>
  );
}
