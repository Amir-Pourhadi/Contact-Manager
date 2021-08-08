import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditContact(props) {
	// Destructuring props
	const {
		updateContactHandler,
		location: {
			state: {
				contact: { id, name, email }
			}
		},
		history: { push }
	} = props;

	const [contact, setContact] = useState({ name, email, id });

	/**
	 * To handle input changes and update contact state
	 * @param {event} e
	 */
	const handleChange = (e) => {
		setContact({ ...contact, [e.target.name]: e.target.value });
	};

	/**
	 * To handle submit
	 * @param {event} e
	 */
	const updateContact = (e) => {
		e.preventDefault();
		if (contact.name && contact.email) {
			updateContactHandler(contact);
			push("/");
			toast.success("✅ Contact Edited Successfully!");
		} else toast.dark("All Fields Are Mandatory! 😐");
		setContact({ name, email, id });
	};

	return (
		<div className="ui main">
			<h2>Edit Contact</h2>
			<form className="ui form" onSubmit={updateContact}>
				<div className="field">
					<label htmlFor="input-name">Name</label>
					<input
						id="input-name"
						type="text"
						name="name"
						placeholder="Name"
						value={contact.name}
						onChange={handleChange}
					/>
				</div>
				<div className="field">
					<label htmlFor="input-email">Email</label>
					<input
						id="input-email"
						type="text"
						name="email"
						placeholder="Email"
						value={contact.email}
						onChange={handleChange}
					/>
				</div>
				<div style={{ display: "flex", alignItems: "baseline" }}>
					<input type="submit" value="Update" className="ui button blue" />
					<Link to="/" className="ui button green">
						Back to Contact List
					</Link>
				</div>
			</form>
		</div>
	);
}
