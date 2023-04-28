import React from "react";

function companyDetails(props) {
  const { company, jobTitle, location, remotetype } = props;
  return (
    <div>
      {jobTitle && <h2 className="text-2xl">{jobTitle}</h2>}
      {company && <h3 className="text-base">{company}</h3>}
      {location && remotetype && (
        <h3 className="text-secondary-gray">
          {location}({remotetype})
        </h3>
      )}
    </div>
  );
}

export default companyDetails;
