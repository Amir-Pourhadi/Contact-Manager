import { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { v4 as uuidv4 } from "uuid";
import fakeContacts from "../data/contacts.json";
import AddContact from "./AddContact";
import "./App.css";
import ContactList from "./ContactList";
import Header from "./Header";

export default function App() {
	const LOCAL_STORAGE_KEY = "contactManager.contacts";
	/**
	 * To have random id for fakeContacts, too!
	 */
	fakeContacts.map((contact) => (contact.id = uuidv4()));

	const [contacts, setContacts] = useState(fakeContacts);

	/**
	 * To load contacts from local storage
	 */
	useEffect(() => {
		const storedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		storedContacts && setContacts(storedContacts);
	}, []);

	/**
	 * To sort contacts alphabetically and save them on local storage
	 */
	//TODO BUG: sorting contacts is one step behind!
	useEffect(() => {
		contacts.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
	}, [contacts]);

	/**
	 * To pass contact data from children (AddContact)
	 * @param {object} contact a single contact object with id, name, email properties
	 */
	const addContactHandler = (contact) => {
		setContacts([{ ...contact, id: uuidv4() }, ...contacts]);
	};

	/**
	 * To delete a contact
	 * @param {string} id unique id for each contact
	 */
	const removeContactHandler = (id) => {
		const newContactList = contacts.filter((contact) => contact.id !== id);
		setContacts(newContactList);
	};

	return (
		<div className="ui container">
			<Header />
			<AddContact addContactHandler={addContactHandler} />
			<ContactList contacts={contacts} handleTrashClick={removeContactHandler} />
		</div>
	);
}
