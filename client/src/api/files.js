import axios from "axios";

export const addFiles = async (files) => {
  let response;
  try {
    response = await fetch("http://localhost:8080/api/file/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(files),
    });
  } catch (err) {
    throw err(`Could not fetch`);
  }
  return response && response.json();
};

export const getFiles = async () => {
  const response = await fetch("http://localhost:8080/api/file/");
  return response && response.json();
};

export const deleteFile = async (id) => {
  await fetch(`http://localhost:8080/api/file/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
