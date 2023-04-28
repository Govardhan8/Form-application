import axios from "axios";

export const fetchData = async () => {
  const { data } = await axios.get(
    "https://614b02a3e4cc2900179eae54.mockapi.io/job"
  );
  return data;
};

export const postData = async (e) => {
  await axios
    .post("https://614b02a3e4cc2900179eae54.mockapi.io/job", e)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log({ error });
    });
};

export const updateDataById = async (e, id) => {
  await axios
    .put(`https://614b02a3e4cc2900179eae54.mockapi.io/job/${id}`, e)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log({ error });
    });
};

export const getDataById = async (id) => {
  const { data } = await axios.get(
    `https://614b02a3e4cc2900179eae54.mockapi.io/job/${id}`
  );
  return data;
};

export const deleteData = async (id) => {
  await axios.delete(`https://614b02a3e4cc2900179eae54.mockapi.io/job/${id}`);
};

export const mapFormData = (data) => {
  const {
    jobTitle = "",
    company = "",
    industry = "",
    location = "",
    remotetype = "",
    minExperience = "",
    maxExperience = "",
    minSalary = "",
    maxSalary = "",
    totalEmployees = "",
    applyType = "",
  } = data;

  return {
    firstFormData: {
      jobTitle,
      company,
      industry,
      location,
      remotetype,
    },
    secondFormData: {
      minExperience,
      maxExperience,
      minSalary,
      maxSalary,
      totalEmployees,
      applyType,
    },
  };
};
