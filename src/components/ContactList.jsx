import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import fakeContacts from "../data/contacts.json";
import AddContact from "./AddContact";
import ContactCard from "./ContactCard";

export default function ContactList() {
	const [contacts, setContacts] = useState(fakeContacts);

	//TODO fix the bug: it is always one step behind!
	useEffect(() => {
		const sortedContacts = contacts.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
		setContacts(sortedContacts);
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
