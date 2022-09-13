import React from "react";

import Card from "components/Card";

import { NOTES_CARD_DROPDOWN_OPTIONS } from "./constants";
import { calculateAge, formatTime } from "./utils/prettyPrintTime";

const ListCards = ({ notes = [] }) => {
  const getCreatedAtText = timeStamp => `Created ${calculateAge(timeStamp)}`;

  return (
    <>
      {notes.map(note => (
        <Card
          avatarUrl={"https://i.pravatar.cc/300"}
          description={note.description}
          dropDownItems={NOTES_CARD_DROPDOWN_OPTIONS}
          key={note.id}
          tinyText={getCreatedAtText(note.created_at)}
          title={note.title}
          toolTipText={formatTime(note.created_at)}
        />
      ))}
    </>
  );
};

export default ListCards;
