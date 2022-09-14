import React from "react";

import { MenuVertical, Clock } from "@bigbinary/neeto-icons";
import { Tag, Typography, Dropdown, Avatar, Tooltip } from "neetoui";

const Card = ({
  title,
  description,
  tinyText,
  toolTipText,
  avatarUrl,
  dropDownItems,
}) => (
  <div className="mb-4 w-full flex-col rounded-sm border border-gray-300 bg-white p-4 shadow-md">
    <div className="mb-2">
      <div className="mb-2 flex items-center justify-between">
        <Typography style="h4">{title}</Typography>
        {dropDownItems?.length && (
          <Dropdown
            buttonStyle="text"
            className="text-gray-800"
            icon={() => <MenuVertical color="#68737D" />}
          >
            {dropDownItems.map((item, idx) => (
              <li key={idx} onClick={() => item.func()}>
                {item.name}
              </li>
            ))}
          </Dropdown>
        )}
      </div>
      <Typography style="body2" weight="light">
        {description}
      </Typography>
    </div>
    <hr />
    <div className="mt-3 flex justify-between">
      <Tag color="gray" label="Getting Started" size="small" />
      <div className="flex flex-row items-center justify-between gap-x-1 p-0">
        <Clock size={10} />
        <Tooltip content={toolTipText} position="bottom">
          <Typography style="body3">{tinyText}</Typography>
        </Tooltip>
        <Avatar
          size="medium"
          user={{
            imageUrl: avatarUrl,
          }}
        />
      </div>
    </div>
  </div>
);

export default Card;
