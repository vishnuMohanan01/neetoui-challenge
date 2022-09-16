import React, { useEffect } from "react";

import { Table as NeetoUITable } from "neetoui";
import { noop } from "utils";

import Dropdown from "./Dropdown";
import NameRoleAndAvatar from "./NameRoleAndAvatar";

import { buildContactTableColumns } from "../utils";

const Table = ({ fetchContactsData, contactsData }) => {
  const renderNameAndRole = (nameAndRole, { name, role }) => (
    <NameRoleAndAvatar name={name} role={role} />
  );
  const renderDropdown = () => <Dropdown />;

  const contactTableColumns = buildContactTableColumns(
    renderNameAndRole,
    renderDropdown
  );

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
