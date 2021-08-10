import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "semantic-ui-css/semantic.min.css";
import { addContact, getContacts, removeContact, updateContact } from "../api/apiUtils";
import AddContact from "./AddContact";
import "./App.css";
import ContactDetail from "./ContactDetail";
import ContactList from "./ContactList";
import EditContact from "./EditContact";
import Footer from "./Footer";
import Header from "./Header";
import PageNotFound from "./PageNotFound";

export default function App() {
	const [contacts, setContacts] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	/**
	 * To load contacts from server
	 */
	useEffect(async () => {
		const allContacts = await getContacts();
		allContacts && setContacts(allContacts);
	}, []);

	/**
	 * To add new contact
	 * @param {object} contact a single contact object
	 */
	const addContactHandler = async (contact) => {
		const response = await addContact(contact);
		setContacts([response.data, ...contacts]);
	};

	/**
	 * To edit a contact
	 * @param {object} contact a single contact object
	 */
	const updateContactHandler = async (contact) => {
		const response = await updateContact(contact);
		setContacts(contacts.map((contact) => (contact.id === response.data.id ? response.data : contact)));
	};

	/**
	 * To delete a contact
	 * @param {string} id unique id for each contact
	 */
	const removeContactHandler = async (id) => {
		await removeContact(id);
		setContacts(contacts.filter((contact) => contact.id !== id));
	};

	const handleSearch = (searchInput) => {
		setSearchInput(searchInput);
		setSearchResults(
			searchInput !== ""
				? contacts.filter((contact) =>
						Object.values(contact).join(" ").toLowerCase().includes(searchInput.toLowerCase())
				  )
				: contacts
		);
	};

	return (
		<>
			<ToastContainer autoClose="2000" position="bottom-right" closeButton="false" />
			<Header />
			<main className="ui container">
				<Switch>
					<Route
						path="/"
						exact
						render={(props) => (
							<ContactList
								{...props}
								contacts={searchInput.length < 1 ? contacts : searchResults}
								handleTrashClick={removeContactHandler}
								searchInput={searchInput}
								handleSearch={handleSearch}
							/>
						)}></Route>
					<Route
						path="/addContact"
						render={(props) => <AddContact {...props} addContactHandler={addContactHandler} />}></Route>
					<Route path="/contact/:id" component={ContactDetail} />
					<Route
						path="/edit/:id"
						render={(props) => <EditContact {...props} updateContactHandler={updateContactHandler} />}></Route>
					<Route component={PageNotFound} />
				</Switch>
			</main>
			<Footer />
		</>
	);
}
