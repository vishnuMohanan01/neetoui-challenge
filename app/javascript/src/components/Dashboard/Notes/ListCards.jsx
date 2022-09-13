import React from "react";

import Card from "components/Card";

import { NOTES_CARD_DROPDOWN_OPTIONS } from "./constants";

const ListCards = ({ notes = [] }) => (
  <>
    {notes.map(notes => (
      <Card
        authorID={notes.user_id}
        createdAt={notes.created_at}
        description={notes.description}
        dropDownItems={NOTES_CARD_DROPDOWN_OPTIONS}
        key={notes.id}
        title={notes.title}
      />
    ))}
  </>
);

export default ListCards;
