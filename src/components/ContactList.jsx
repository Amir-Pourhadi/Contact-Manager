import { useState } from "react";
import fakeContacts from "../data/contacts.json";
import AddContact from "./AddContact";
import ContactCard from "./ContactCard";

export default function ContactList() {
	const [contacts, setContacts] = useState(fakeContacts);

	const handleAddContact = (contact) => {
		setContacts([contact, ...contacts]);
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
