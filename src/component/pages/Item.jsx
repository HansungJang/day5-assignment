import React from "react";
import { useParams } from "react-router-dom";

export default function Item() {
  const { id } = useParams();
  const { date } = useParams();

  //   return <div>item page {createdAt}</div>;
}
