import React from "react";
import InputField from "./InputField";

function FirstForm({ formik }) {
  return (
    <>
      <InputField
        label="Job Title"
        name="jobTitle"
        required
        placeholder="ex. UX UI Designer"
        value={formik.values.jobTitle}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessage={
          formik.errors.jobTitle &&
          formik.touched.jobTitle &&
          formik.errors.jobTitle
        }
      />
      <InputField
        label="Company name"
        name="company"
        required
        placeholder="ex. Google"
        value={formik.values.company}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessage={
          formik.errors.company &&
          formik.touched.company &&
          formik.errors.company
        }
      />
      <InputField
        label="Industry"
        name="industry"
        required
        placeholder="ex. Information Technology"
        value={formik.values.industry}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessage={
          formik.errors.industry &&
          formik.touched.industry &&
          formik.errors.industry
        }
      />
      <div className="grid grid-cols-2 gap-6 items-end">
        <InputField
          label="Location"
          name="location"
          placeholder="ex. Chennai"
          value={formik.values.location}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={
            formik.errors.location &&
            formik.touched.location &&
            formik.errors.location
          }
        />
        <InputField
          label="Remote type"
          name="remotetype"
          placeholder="ex. In-office"
          value={formik.values.remotetype}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={
            formik.errors.remotetype &&
            formik.touched.remotetype &&
            formik.errors.remotetype
          }
        />
      </div>
    </>
  );
}

export default FirstForm;
