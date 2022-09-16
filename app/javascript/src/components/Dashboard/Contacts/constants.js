import * as yup from "yup";

export const CONTACTS_UNIQUE_DATA = [
  {
    name: "Ronald Richards",
    role: "owner",
    email: "ronaldrichards@gmail.com",
    created_at: "2020-01-13T05:07:55.886Z",
  },
  {
    name: "Jacob Jones",
    role: "owner",
    email: "jacob@gmail.com",
    created_at: "2022-09-13T05:07:55.886Z",
  },
];

export const DUMMY_ROLES = [
  {
    label: "Owner",
    value: "owner",
  },
  {
    label: "Manager",
    value: "manager",
  },
];

export const CONTACTS_FORM_INITIAL_FORM_VALUES = {
  first_name: "",
  last_name: "",
  email: "",
  role: null,
};

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  email: yup.string().email().required("Email address is required"),
  role: yup
    .object()
    .shape({
      label: yup
        .string()
        .oneOf(DUMMY_ROLES.map(role => role.label))
        .required("No label found"),
      value: yup
        .string()
        .oneOf(DUMMY_ROLES.map(role => role.value))
        .required("No value found"),
    })
    .nullable()
    .required("Role is required"),
});
