import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";
import { noop } from "utils";

import MenuBar from "./MenuBar";
import NewContactPane from "./Pane/Create";
import Table from "./Table";

const Contacts = () => {
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenuBar, setShowMenuBar] = useState(false);

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
        <Table />
        <NewContactPane showPane={showNewContactPane} />
      </Container>
    </>
  );
};

export default Contacts;
