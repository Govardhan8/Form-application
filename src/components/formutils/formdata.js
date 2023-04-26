export const firstFormData = [
  {
    name: "Job title",
    required: true,
    placeholder: "ex. UX UI Designer",
  },
  {
    name: "Company name",
    required: true,
    placeholder: "ex. Google",
  },
  {
    name: "Industry",
    required: true,
    placeholder: "ex. Information Technology",
  },
  {
    dualSlot: true,
    slots: [
      {
        name: "Location",
        required: false,
        placeholder: "ex. Chennai",
      },
      {
        name: "Remote type",
        required: false,
        placeholder: "ex. In-office",
      },
    ],
  },
];

export const secondFormData = [
  {
    dualSlot: true,
    slots: [
      {
        name: "Experience",
        required: false,
        placeholder: "Minimum",
      },
      {
        required: false,
        placeholder: "Maximum",
      },
    ],
  },
  {
    dualSlot: true,
    slots: [
      {
        name: "Salary",
        required: false,
        placeholder: "Minimum",
      },
      {
        required: false,
        placeholder: "Maximum",
      },
    ],
  },
  {
    name: "Total employee",
    required: false,
    placeholder: "ex. 100",
  },
  {
    name: "Apply type",
    required: false,
    radioButtons: [
      { value: "Quick apply", name: "apply" },
      { value: "External apply", name: "apply" },
    ],
  },
];
