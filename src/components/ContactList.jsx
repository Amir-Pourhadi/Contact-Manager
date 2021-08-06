import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import SearchContacts from "./SearchContacts";

export default function ContactList({ contacts, handleTrashClick }) {
	/**
	 * To handle trash icon click
	 * @param {number} id Contact id
	 */
	const removeContactHandler = (id) => {
		handleTrashClick(id);
	};

	return (
		<div className="main">
			<h2>
				Contacts List
				<Link to="/addContact" className="ui button blue right">
					Add
				</Link>
			</h2>
			<SearchContacts contacts={contacts} />
			<div className="ui celled list contacts-list">
				{contacts.map((contact, index) => (
					<ContactCard key={index} contact={contact} handleTrashClick={removeContactHandler} />
				))}
			</div>
		</div>
	);
}
