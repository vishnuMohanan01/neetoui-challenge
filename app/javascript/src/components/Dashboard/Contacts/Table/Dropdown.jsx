import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Dropdown as NeetoUIDropdown } from "neetoui";

const Dropdown = () => (
  <NeetoUIDropdown
    buttonStyle="text"
    className="text-gray-800"
    icon={() => <MenuHorizontal color="#68737D" />}
  >
    <li>Edit</li>
    <li>Delete</li>
  </NeetoUIDropdown>
);

export default Dropdown;
