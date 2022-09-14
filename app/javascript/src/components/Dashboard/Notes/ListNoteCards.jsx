import React from "react";

import Card from "components/Dashboard/Notes/Card";

import { calculateAge, formatTime } from "./utils/prettyPrintTime";

const ListNoteCards = ({ notes = [] }) => {
  const getCreatedAtText = timeStamp => `Created ${calculateAge(timeStamp)}`;
  const getDropDownItems = () => [
    {
      name: "Edit",
      func: () => {},
    },
    {
      name: "Delete",
      func: () => {},
    },
  ];

  return (
    <>
      {notes.map(note => (
        <Card
          avatarUrl={"https://i.pravatar.cc/300"}
          description={note.description}
          dropDownItems={getDropDownItems()}
          key={note.id}
          tinyText={getCreatedAtText(note.created_at)}
          title={note.title}
          toolTipText={formatTime(note.created_at)}
        />
      ))}
    </>
  );
};

export default ListNoteCards;
