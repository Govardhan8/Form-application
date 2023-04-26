import * as Yup from "yup";

export const firstFormSchema = {
  initialValues: {
    jobTitle: "",
    company: "",
    industry: "",
    location: "",
    remotetype: "",
  },
  schema: Yup.object({
    jobTitle: Yup.string().required("Job Title is required"),
    company: Yup.string().required("Company name is required"),
    industry: Yup.string().required("Industry is required"),
    location: Yup.string().required("Location is required"),
    remotetype: Yup.string().required("Remote type is required"),
  }),
};

export const secondFormSchema = {
  initialValues: {
    minExperience: "",
    maxExperience: "",
    minSalary: "",
    maxSalary: "",
    totalEmployees: "",
    applyType: "",
  },
  schema: Yup.object({
    minExperience: Yup.string().required("Minimum experience is required"),
    maxExperience: Yup.string().required("Maximum experience is required"),
    minSalary: Yup.string().required("Minimum salary is required"),
    maxSalary: Yup.string().required("Maximum salary is required"),
    totalEmployees: Yup.string().required("Total employees is required"),
    applyType: Yup.string().required("Apply type is required"),
  }),
};
