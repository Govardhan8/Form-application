import React from "react";
import Card from "./card";

function cardsList({ data }) {
  return (
    <div className="flex flex-wrap gap-20">
      {data.map((cardData, index) => {
        return <Card key={index} data={cardData} />;
      })}
    </div>
  );
}

export default cardsList;
