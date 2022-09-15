import React, { useState, useEffect } from "react";

import { Table as NeetoUITable } from "neetoui";
import { noop } from "utils";

import Dropdown from "./Dropdown";
import NameRoleAndAvatar from "./NameRoleAndAvatar";
import { buildContactTableColumns, getContactsData } from "./utils";

const Table = () => {
  const [contactsData, setContactsData] = useState([]);

  const renderNameAndRole = (nameAndRole, { name, role }) => (
    <NameRoleAndAvatar name={name} role={role} />
  );
  const renderDropdown = () => <Dropdown />;

  const contactTableColumns = buildContactTableColumns(
    renderNameAndRole,
    renderDropdown
  );

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
      columnData={contactTableColumns}
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
