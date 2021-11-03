import axios from "axios";

const BASE_URL = "http://localhost:3004";

export async function fetchContacts() {
  const { data } = await axios.get(`${BASE_URL}/contacts`);
  return data;
}

export async function fetchAddContacts(data) {
  const { name, number } = data;
  const newContact = await axios.post(
    `${BASE_URL}/contacts`,
    {
      name: `${name}`,
      number: `${number}`,
    },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
  return newContact;
}

export async function fetchDeleteContact(id) {
  await axios.delete(`${BASE_URL}/contacts/${id}`);
}
