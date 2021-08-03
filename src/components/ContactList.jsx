import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import fakeContacts from "../data/contacts.json";
import AddContact from "./AddContact";
import ContactCard from "./ContactCard";

export default function ContactList() {
	const LOCAL_STORAGE_KEY = "contactManager.contacts";
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
	const handleAddContact = (contact) => {
		setContacts([{ ...contact, id: uuidv4() }, ...contacts]);
	};

	return (
		<>
			<AddContact handleAddContact={handleAddContact} />
			<div className="ui celled list">
				{contacts.map((contact, index) => (
					<ContactCard contact={contact} key={index} />
				))}
			</div>
		</>
	);
}
