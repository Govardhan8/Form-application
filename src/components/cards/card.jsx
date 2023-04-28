import React from "react";
import Container from "./container";
import Logo from "./logo";
import Details from "./details";

function card(props) {
  return (
    <Container>
      <div className="flex gap-x-2">
        <Logo />
        <Details {...props} />
      </div>
    </Container>
  );
}

export default card;
