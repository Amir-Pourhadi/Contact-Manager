import contacts from "../data/contacts.json";
import ContactCard from "./ContactCard";

export default function ContactList() {
	return (
		<div className="ui celled list">
			{contacts.map((contact) => (
				<ContactCard contact={contact} />
			))}
		</div>
	);
}
