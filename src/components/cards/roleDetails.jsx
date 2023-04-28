import React from "react";

const Text = ({ children }) => (
  <h3 className="text-secondary-black">{children}</h3>
);

function RoleDetails(props) {
  const {
    minExperience = "",
    maxExperience = "",
    minSalary = "",
    maxSalary = "",
    totalEmployees = "",
  } = props;

  return (
    <div className="flex flex-col">
      <Text>Part-Time (9.00 am - 5.00 pm IST)</Text>
      <Text>{`Experience (${minExperience} - ${maxExperience} years)`}</Text>
      <Text>{`INR (₹) ${minSalary} - ${maxSalary} / Month`}</Text>
      <Text>{`${totalEmployees} employees`}</Text>
    </div>
  );
}

export default RoleDetails;
