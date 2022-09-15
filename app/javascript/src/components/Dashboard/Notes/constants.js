import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
};

export const DUMMY_CONTACTS = [
  {
    label: "Oliver Smith",
    value: "Oliver Smith",
  },
  {
    label: "Tony Stark",
    value: "Tony Stark",
  },
  {
    label: "Sherlock Holmes",
    value: "Sherlock Holmes",
  },
  {
    label: "William Butcher",
    value: "William Butcher",
  },
];

export const DUMMY_TAGS = [
  {
    label: "Sales",
    value: "sales",
  },
  {
    label: "Finance",
    value: "finance",
  },
  {
    label: "User Experience",
    value: "userExperience",
  },
];

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Title is required"),
  description: yup
    .string()
    .min(2, "Too Short!")
    .max(200, "Too Long!")
    .required("Description is required"),
  assigned_contact: yup
    .object()
    .shape({
      label: yup.string().oneOf(DUMMY_CONTACTS.map(contact => contact.label)),
      value: yup.string().oneOf(DUMMY_CONTACTS.map(contact => contact.value)),
    })
    .nullable()
    .required("Should assign to a contact"),
  tags: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().oneOf(DUMMY_TAGS.map(tag => tag.label)),
        value: yup.string().oneOf(DUMMY_TAGS.map(tag => tag.value)),
      })
    )
    .min(1, "Should have at least one tag")
    .required("Tags are required"),
});

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];
