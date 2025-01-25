import { API_URL } from "../config.js";

export const getAllGroups = () => {
  return fetch(`${API_URL}/groups`).then((res) => res.json());
};

export const getGroupById = (groupId) => {
  console.log(groupId);
  return fetch(`${API_URL}/groups/${groupId}`).then((res) =>
    res.json()
  );
};
