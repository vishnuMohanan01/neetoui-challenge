import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import MenuBar from "./MenuBar";
import NewContactPane from "./Pane/Create";
import Table from "./Table";
import { getContactsData } from "./utils";

const Contacts = () => {
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenuBar, setShowMenuBar] = useState(false);
  const [contactsData, setContactsData] = useState([]);

  const fetchContacts = () => {
    // TODO: Get data through API, once implemented
    setContactsData(getContactsData());
  };

  return (
    <>
      <MenuBar showMenu={showMenuBar} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenuBar(showMenuBar => !showMenuBar)}
          title="All Contacts"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add Contact"
              onClick={() => setShowNewContactPane(true)}
            />
          }
          searchProps={{
            value: searchTerm,
            placeholder: "Search Name, Email, Phone Number, Ect.",
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <Table contactsData={contactsData} fetchContacts={fetchContacts} />
        <NewContactPane
          fetchContacts={fetchContacts}
          setShowPane={setShowNewContactPane}
          showPane={showNewContactPane}
        />
      </Container>
    </>
  );
};

export default Contacts;
