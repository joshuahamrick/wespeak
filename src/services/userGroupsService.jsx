import { API_URL } from "../config.js";

export const getUserGroups = () => {
  return fetch(`${API_URL}/userGroups`).then((res) => res.json());
};
