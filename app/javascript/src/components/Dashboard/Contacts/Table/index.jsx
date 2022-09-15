import React, { useState, useEffect } from "react";

import { MenuHorizontal } from "neetoicons";
import { Table as NeetoUITable, Dropdown } from "neetoui";

import NameAndRole from "./NameAndRole";
import { getContactsData } from "./utils";

import { noop } from "../utils";

const Table = () => {
  const [contactsData, setContactsData] = useState([]);

  const CONTACTS_TABLE_COLUMNS = [
    {
      dataIndex: "name_and_role",
      key: "name_and_role",
      title: "Name & Role",
      width: 150,
      render: (nameAndRole, { name, role }) => (
        <NameAndRole name={name} role={role} />
      ),
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
      render: () => (
        <Dropdown
          buttonStyle="text"
          className="text-gray-800"
          icon={() => <MenuHorizontal color="#68737D" />}
        >
          <li>Edit</li>
          <li>Delete</li>
        </Dropdown>
      ),
    },
  ];

  const fetchContactsData = () => {
    // TODO: Get data through API, once implemented
    setContactsData(getContactsData());
  };

  useEffect(() => {
    fetchContactsData();
  }, []);

  return (
    <NeetoUITable
      rowSelection
      columnData={CONTACTS_TABLE_COLUMNS}
      currentPageNumber={1}
      defaultPageSize={9}
      handlePageChange={noop}
      rowData={contactsData}
      onRowClick={noop}
      onRowSelect={noop}
    />
  );
};

export default Table;
