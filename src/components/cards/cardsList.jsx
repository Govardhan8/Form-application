import React from "react";
import Card from "./card";

function cardsList({ data, updateData }) {
  return (
    <div className="flex flex-wrap justify-center gap-20">
      {data.map((cardData, index) => {
        return <Card key={index} data={cardData} updateData={updateData} />;
      })}
    </div>
  );
}

export default cardsList;
