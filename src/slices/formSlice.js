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
  isModalOpen: false,
  secondFormData: {
    minExperience: "",
    maxExperience: "",
    minSalary: "",
    maxSalary: "",
    totalEmployees: "",
    applyType: "",
  },
  updateId: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFirstFormData: (state, action) => {
      state.firstFormData = action.payload;
    },
    updateFinalStep: (state) => {
      state.isFinalStep = true;
    },
    reset: (state) => {
      Object.assign(state, initialState);
    },
    setModalState: (state, action) => {
      state.isModalOpen = action.payload;
    },
    updateSecondFormData: (state, action) => {
      state.secondFormData = action.payload;
    },
    updateId: (state, action) => {
      state.updateId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateFirstFormData,
  reset,
  updateSecondFormData,
  setModalState,
  updateFinalStep,
  updateId,
} = formSlice.actions;

export default formSlice.reducer;
