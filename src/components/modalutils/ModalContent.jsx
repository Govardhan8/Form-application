import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import FormBody from "../formutils/FormBody";
import { useFormik } from "formik";
import { firstFormSchema, secondFormSchema } from "../formikSchema/schema";
import {
  updateFirstFormData,
  updateSecondFormData,
  reset,
} from "../../slices/formSlice";

function ModalContent() {
  const { isFinalStep } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const formSchema = isFinalStep ? secondFormSchema : firstFormSchema;
  const formik = useFormik({
    initialValues: formSchema.initialValues,
    validationSchema: formSchema.schema,
    onSubmit: (e) => {
      e.preventDefault;
      console.log({ e });
      !isFinalStep
        ? dispatch(updateFirstFormData(e))
        : dispatch(updateSecondFormData(e));
    },
  });

  return (
    <div className="h-full relative">
      <ModalHeader step={isFinalStep ? "Step 2" : "Step 1"} />
      <form onSubmit={formik.handleSubmit}>
        <FormBody isFinalStep={isFinalStep} formik={formik} />
        <ModalFooter isFinalStep={isFinalStep} />
      </form>
    </div>
  );
}

export default ModalContent;
