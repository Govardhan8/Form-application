import React from "react";
import CompanyDetails from "./companyDetails";
import ApplyButtons from "./applyButtons";
import RoleDetails from "./roleDetails";

function Details({ data }) {
  return (
    <div className="flex flex-col justify-between gap-y-6">
      <CompanyDetails {...data} />
      <RoleDetails {...data} />
      <ApplyButtons />
    </div>
  );
}

export default Details;
