import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import FormBody from "../formutils/FormBody";
import { useFormik } from "formik";
import { firstFormSchema } from "../formikSchema";
import {
  updateFirstFormData,
  updateSecondFormData,
  reset,
  updateFinalStep,
} from "../../slices/formSlice";
import { postData, updateDataById } from "../api";

function ModalContent({ updateData }) {
  const { firstFormData, isFinalStep, secondFormData, updateId } = useSelector(
    (state) => state.form
  );
  const dispatch = useDispatch();
  const initialValues = { ...firstFormData, ...secondFormData };

  const formik = useFormik({
    initialValues: initialValues,
    //Since there is no mandatory field in second step, no need to validate the inputs
    validationSchema: firstFormSchema.schema,
    onSubmit: (e) => {
      e.preventDefault;
      if (isFinalStep) {
        dispatch(
          updateSecondFormData({
            minExperience: e.minExperience,
            maxExperience: e.maxExperience,
            minSalary: e.minSalary,
            maxSalary: e.maxSalary,
            totalEmployees: e.totalEmployees,
            applyType: e.applyType,
          })
        );
        updateId
          ? updateDataById(e, updateId).then(() => updateData())
          : postData(e).then(() => updateData());
        dispatch(reset());
      } else {
        dispatch(updateFirstFormData(e));
        dispatch(updateFinalStep());
      }
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
