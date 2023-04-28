import React from "react";
import CardsList from "./cardsList";

function index({ data, updateData }) {
  if (data.length) return <CardsList data={data} updateData={updateData} />;
  return null;
}

export default index;
