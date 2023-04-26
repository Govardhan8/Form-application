import React from "react";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";

function FormBody({ isFinalStep, formik }) {
  const Component = isFinalStep ? SecondForm : FirstForm;
  return <Component formik={formik} />;
}

export default FormBody;
