import React from "react";

import { MenuVertical, Clock } from "@bigbinary/neeto-icons";
import moment from "moment";
import { Tag, Typography, Dropdown, Avatar, Tooltip } from "neetoui";

const Card = ({ title, description, createdAt, dropDownItems }) => {
  const calculateAgeOfNote = createdAt => moment(new Date(createdAt)).fromNow();

  const formatTime = createdAt => moment(createdAt).format("dd, hh:mm A");

  return (
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
                <li key={idx} onClick={() => alert(`clicked ${item.name}`)}>
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
          <Tooltip content={formatTime(createdAt)} position="bottom">
            <Typography style="body3">
              {`Created ${calculateAgeOfNote(createdAt)}`}
            </Typography>
          </Tooltip>
          <Avatar
            size="medium"
            user={{
              imageUrl: "https://i.pravatar.cc/300",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
