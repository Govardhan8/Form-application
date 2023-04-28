import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import FormBody from "../formutils/FormBody";
import { useFormik } from "formik";
import { firstFormSchema, secondFormSchema } from "../formikSchema";
import {
  updateFirstFormData,
  updateSecondFormData,
  reset,
} from "../../slices/formSlice";

function ModalContent({ onClose }) {
  const { isFinalStep } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const formSchema = isFinalStep ? secondFormSchema : firstFormSchema;
  const postData = async (e) => {
    await axios
      .post("https://614b02a3e4cc2900179eae54.mockapi.io/job", e)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const formik = useFormik({
    initialValues: formSchema.initialValues,
    validationSchema: formSchema.schema,
    onSubmit: (e) => {
      e.preventDefault;
      console.log({ e });
      if (isFinalStep) {
        dispatch(updateSecondFormData(e));
        postData(e);
        onClose();
        dispatch(reset());
      } else {
        dispatch(updateFirstFormData(e));
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
