import { API_URL } from "../config.js";

export const getUserByEmail = (email) => {
  return fetch(`${API_URL}/users?email=${email}`).then((res) =>
    res.json()
  );
};

export const createUser = (customer) => {
  return fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  }).then((res) => res.json());
};

export const getAllUsers = () => {
  return fetch(`${API_URL}/users`).then((res) => res.json());
};

export const getUserById = (userId) => {
  return fetch(`${API_URL}/users?id=${userId}`).then((res) =>
    res.json()
  );
};

export const updateUser = (userUpdate) => {
  return fetch(`${API_URL}/users/${userUpdate.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userUpdate),
  });
};

export const deleteUserProfile = (userId) => {
  return fetch(`${API_URL}/users/${userId}`, { method: "DELETE" });
};
