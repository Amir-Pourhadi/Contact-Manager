import api from "./Contacts";

/**
 * To load contacts from server and sort alphabetically
 * @returns sorted contacts
 */
export const getContacts = async () => {
  try {
    const { data } = await api.get("/contacts");
    return data.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
  } catch (error) {
    console.error(error);
  }
};

/**
 * To pass contact data from children (AddContact)
 * @param {object} contact a single contact object with id, name, email properties
 */
export const addContact = async (contact) => {
  try {
    return await api.post("/contacts", { id: uuidv4(), ...contact });
  } catch (error) {
    console.error(error);
  }
};

/**
 * To update a contact
 * @param {object} contact a single contact object with id, name, email properties
 */
export const updateContact = async (contact) => {
  try {
    return await api.put(`/contacts/${contact.id}`, contact);
  } catch (error) {
    console.error(error);
  }
};

/**
 * To delete a contact
 * @param {string} id unique id for each contact
 */
export const removeContact = async (id) => {
  try {
    return await api.delete(`/contacts/${id}`);
  } catch (error) {
    console.error(error);
  }
};
