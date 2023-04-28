import React from "react";
import CardsList from "./cardsList";

function index({ data }) {
  if (data.length) return <CardsList data={data} />;
  return null;
}

export default index;
