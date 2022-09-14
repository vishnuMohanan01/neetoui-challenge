import React from "react";

import PropType from "prop-types";

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

ListNoteCards.propTypes = {
  notes: PropType.arrayOf(
    PropType.shape({
      created_at: PropType.string,
      description: PropType.string,
      id: PropType.string,
      title: PropType.string,
      updated_at: PropType.string,
      user_id: PropType.string,
    })
  ),
};

export default ListNoteCards;
