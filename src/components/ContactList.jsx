import ContactCard from "./ContactCard";

export default function ContactList({ contacts, handleTrashClick }) {
	const removeContactHandler = (id) => {
		handleTrashClick(id);
	};

	return (
		<div className="ui celled list">
			{contacts.map((contact, index) => (
				<ContactCard key={index} contact={contact} handleTrashClick={removeContactHandler} />
			))}
		</div>
	);
}
