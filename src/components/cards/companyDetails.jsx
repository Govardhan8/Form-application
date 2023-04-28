import React from "react";

function companyDetails(props) {
  const { company, jobTitle, location, remotetype } = props;
  return (
    <div>
      <h2 className="text-2xl">{company}</h2>
      <h3 className="text-base">{jobTitle}</h3>
      <h3 className="text-secondary-gray">
        {location}({remotetype})
      </h3>
    </div>
  );
}

export default companyDetails;
