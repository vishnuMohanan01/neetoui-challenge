import moment from "moment";

export const calculateAge = timeStamp => moment(timeStamp).fromNow();

export const formatTime = timeStamp => moment(timeStamp).format("ddd, hh:mmA");

export const getCreatedAtText = timeStamp =>
  `Created ${calculateAge(timeStamp)}`;

export const handleClickOnDelete = (
  note,
  setSelectedNoteId,
  setShowDeleteAlert
) => {
  setSelectedNoteId(note.id);
  setShowDeleteAlert(true);
};

export const getDropDownItems = (
  note,
  setSelectedNoteId,
  setShowDeleteAlert
) => [
  {
    name: "Edit",
    func: () => {},
  },
  {
    name: "Delete",
    func: () =>
      handleClickOnDelete(note, setSelectedNoteId, setShowDeleteAlert),
  },
];
