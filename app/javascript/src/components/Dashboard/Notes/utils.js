import moment from "moment";

export const calculateAge = timeStamp => moment(timeStamp).fromNow();

export const formatTime = timeStamp => moment(timeStamp).format("ddd, hh:mmA");

export const getCreatedAtText = timeStamp =>
  `Created ${calculateAge(timeStamp)}`;
