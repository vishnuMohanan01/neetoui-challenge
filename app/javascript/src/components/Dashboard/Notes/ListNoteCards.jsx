import React from "react";

import PropType from "prop-types";

import Card from "components/Dashboard/Notes/Card";

import { getCreatedAtText, formatTime } from "./utils";

const ListNoteCards = ({
  notes = [],
  setShowDeleteAlert,
  setSelectedNoteId,
}) => {
  const handleClickOnDelete = note => {
    setSelectedNoteId(note.id);
    setShowDeleteAlert(true);
  };

  const getDropDownItems = note => [
    {
      name: "Edit",
      func: () => {},
    },
    {
      name: "Delete",
      func: () => handleClickOnDelete(note),
    },
  ];

  return (
    <>
      {notes.map(note => (
        <Card
          avatarUrl={"https://i.pravatar.cc/300"}
          description={note.description}
          dropDownItems={getDropDownItems(note)}
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
  setShowDeleteAlert: PropType.func,
  setSelectedNoteId: PropType.func,
};

export default ListNoteCards;
