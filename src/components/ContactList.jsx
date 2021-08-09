import { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

export default function ContactList({ contacts, handleTrashClick, searchInput, handleSearch }) {
	const inputEl = useRef("");

	/**
	 * To handle trash icon click
	 * @param {number} id Contact id
	 */
	const removeContactHandler = (id) => {
		handleTrashClick(id);
	};

	/**
	 * To pass input value to App.js
	 */
	const getSearchInput = () => {
		handleSearch(inputEl.current.value);
	};

	return (
		<div className="main">
			<h2>
				Contacts List
				<Link to="/addContact" className="ui button blue right">
					Add
				</Link>
			</h2>
			<div className="ui search">
				<div className="ui icon input">
					<input
						type="text"
						className="prompt"
						placeholder="Search Contacts"
						value={searchInput}
						onChange={getSearchInput}
						ref={inputEl}
					/>
					<i className="search icon"></i>
				</div>
			</div>
			<div className="ui celled list contacts-list">
				{contacts.length > 0 ? (
					contacts.map((contact, index) => (
						<ContactCard key={index} contact={contact} handleTrashClick={removeContactHandler} />
					))
				) : (
					<h1 className="center-div">No contacts Available 😥</h1>
				)}
			</div>
		</div>
	);
}
