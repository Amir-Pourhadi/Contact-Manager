import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

export default function ContactList({ contacts, handleTrashClick }) {
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
			<div className="ui celled list">
				{contacts.map((contact, index) => (
					<ContactCard key={index} contact={contact} handleTrashClick={removeContactHandler} />
				))}
			</div>
		</div>
	);
}
