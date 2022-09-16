import dayjs from "dayjs";
import { Toastr } from "neetoui";

import { CONTACTS_UNIQUE_DATA } from "./constants";

export const formatDate = timeStamp => dayjs(timeStamp).format("MMM D, YYYY");

export const getContactsData = () =>
  Array(50)
    .fill(CONTACTS_UNIQUE_DATA)
    .flat()
    .map((contact, idx) => ({
      ...contact,
      id: idx + 1,
      created_at: formatDate(contact.created_at),
    }));

export const buildContactTableColumns = (renderNameAndRole, renderDropDown) => [
  {
    dataIndex: "name_and_role",
    key: "name_and_role",
    title: "Name & Role",
    width: 150,
    render: renderNameAndRole,
  },
  {
    dataIndex: "email",
    ellipsis: {
      showTitle: false,
    },
    key: "email",
    title: "Email",
    width: 200,
  },
  {
    dataIndex: "created_at",
    key: "created_at",
    title: "Created at",
    width: 100,
  },
  {
    dataIndex: "action",
    key: "action",
    title: "",
    width: 100,
    render: renderDropDown,
  },
];

export const fakeContactApi = {
  update: () => Toastr.success("Contact successfully updated!"),
  create: () => Toastr.success("Contact successfully added!"),
};
