import { useState } from "react";

export default function AddContact({ addContactHandler }) {
	const [contact, setContact] = useState({ id: "", name: "", email: "" });

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
	const addContact = (e) => {
		e.preventDefault();
		if (contact.name && contact.email) addContactHandler(contact);
		else alert("All fields are mandatory!");
		setContact({ id: "", name: "", email: "" });
	};

	return (
		<div className="ui main">
			<h2>Add Contact</h2>
			<form className="ui form" onSubmit={addContact}>
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
				<input type="submit" value="Add" className="ui button blue" />
			</form>
		</div>
	);
}
