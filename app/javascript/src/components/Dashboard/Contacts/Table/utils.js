import dayjs from "lib/dayjs";

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
