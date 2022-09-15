import React from "react";

import { Avatar } from "neetoui";

import { noop } from "../utils";

const NameRoleAndAvatar = ({ name, role }) => (
  <div className="flex flex-row items-center gap-x-1.5">
    <Avatar
      className="cursor-pointer"
      size="large"
      user={{
        name,
      }}
      onClick={noop}
    />
    <div className="ml-1 flex flex-col justify-start gap-y-0">
      <span className="h-4 font-semibold">{name}</span>
      <span className="text-gray-500">{role}</span>
    </div>
  </div>
);

export default NameRoleAndAvatar;
