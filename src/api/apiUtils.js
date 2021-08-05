import { v4 as uuidv4 } from "uuid";
import api from "./Contacts";

/**
 * To load contacts from server and sort alphabetically
 * @returns sorted contacts
 */
export const getContacts = async () => {
	const { data } = await api.get("/contacts");
	return data.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
};

/**
 * To pass contact data from children (AddContact)
 * @param {object} contact a single contact object with id, name, email properties
 */
export const addContact = async (contact) => {
	return await api.post("/contacts", { id: uuidv4(), ...contact });
};

/**
 * To delete a contact
 * @param {string} id unique id for each contact
 */
export const removeContact = async (id) => {
	return await api.delete(`/contacts/${id}`);
};
