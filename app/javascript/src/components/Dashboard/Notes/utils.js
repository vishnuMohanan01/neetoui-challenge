import dayjs from "dayjs";

export const calculateAge = timeStamp => dayjs(timeStamp).fromNow();

export const formatTime = timeStamp => dayjs(timeStamp).format("ddd, hh:mmA");

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
