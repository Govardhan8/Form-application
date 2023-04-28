import React from "react";
import InputField from "./InputField";

function SecondForm({ formik }) {
  return (
    <>
      <div className="grid grid-cols-2 gap-6 items-end">
        <InputField
          label="Experience"
          name="minExperience"
          placeholder="Minimum"
          value={formik.values.minExperience}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={
            formik.errors.minExperience &&
            formik.touched.minExperience &&
            formik.errors.minExperience
          }
        />
        <InputField
          name="maxExperience"
          placeholder="Maximum"
          value={formik.values.maxExperience}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={
            formik.errors.maxExperience &&
            formik.touched.maxExperience &&
            formik.errors.maxExperience
          }
        />
      </div>
      <div className="grid grid-cols-2 gap-6 items-end">
        <InputField
          label="Salary"
          name="minSalary"
          placeholder="Minimum"
          value={formik.values.minSalary}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={
            formik.errors.minSalary &&
            formik.touched.minSalary &&
            formik.errors.minSalary
          }
        />
        <InputField
          name="maxSalary"
          placeholder="Maximum"
          value={formik.values.maxSalary}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={
            formik.errors.maxSalary &&
            formik.touched.maxSalary &&
            formik.errors.maxSalary
          }
        />
      </div>
      <InputField
        label="Total employee"
        name="totalEmployees"
        placeholder="ex. 100"
        value={formik.values.totalEmployees}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessage={
          formik.errors.totalEmployees &&
          formik.touched.totalEmployees &&
          formik.errors.totalEmployees
        }
      />
      <InputField
        label="Apply type"
        radioButtons={[
          { value: "Quick apply", name: "applyType" },
          { value: "External apply", name: "applyType" },
        ]}
        value={formik.values.applyType}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorMessage={
          formik.errors.applyType &&
          formik.touched.applyType &&
          formik.errors.applyType
        }
      />
    </>
  );
}

export default SecondForm;
