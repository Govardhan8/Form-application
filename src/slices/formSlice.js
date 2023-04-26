import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstFormData: {
    jobTitle: "",
    company: "",
    industry: "",
    location: "",
    remotetype: "",
  },
  isFinalStep: false,
  secondFormData: {
    experience: {
      minimum: "",
      maximum: "",
    },
    salary: {
      minimum: "",
      maximum: "",
    },
    employees: "",
    applyType: "",
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFirstFormData: (state, action) => {
      state.firstFormData = action.payload;
      state.isFinalStep = true;
    },
    reset: (state) => {
      state = initialState;
    },
    updateSecondFormData: (state, action) => {
      state.secondFormData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateFirstFormData, reset, updateSecondFormData } =
  formSlice.actions;

export default formSlice.reducer;
