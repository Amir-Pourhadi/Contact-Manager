import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "semantic-ui-css/semantic.min.css";
import { v4 as uuidv4 } from "uuid";
import api from "../api/Contacts";
import AddContact from "./AddContact";
import "./App.css";
import ContactDetail from "./ContactDetail";
import ContactList from "./ContactList";
import Header from "./Header";
import PageNotFound from "./PageNotFound";

export default function App() {
	/**
	 * To set local storage key
	 * To have random id for fakeContacts, too!
	 */
	// const LOCAL_STORAGE_KEY = "contactManager.contacts";
	// fakeContacts.map((contact) => (contact.id = uuidv4()));

	const [contacts, setContacts] = useState([]);

	/**
	 * To retrieve contacts from server
	 * @returns contacts from server
	 */
	const retrieveContacts = async () => {
		const { data } = await api.get("/contacts");
		return data;
	};

	/**
	 * To load contacts
	 */
	useEffect(() => {
		//* To load contacts from local storage
		// const storedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		// storedContacts && setContacts(storedContacts);

		//* To load contacts from server and sort alphabetically
		const getContacts = async () => {
			const allContacts = await retrieveContacts();
			allContacts.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
			allContacts && setContacts(allContacts);
		};
		getContacts();
	}, []);

	/**
	 * To save contacts on local storage
	 */
	// useEffect(() => {
	// 	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
	// }, [contacts]);

	/**
	 * To pass contact data from children (AddContact)
	 * @param {object} contact a single contact object with id, name, email properties
	 */
	const addContactHandler = async (contact) => {
		const request = {
			...contact,
			id: uuidv4()
		};
		const response = await api.post("/contacts", request);
		setContacts([response.data, ...contacts]);
	};

	/**
	 * To delete a contact
	 * @param {string} id unique id for each contact
	 */
	const removeContactHandler = async (id) => {
		await api.delete(`/contacts/${id}`);
		const newContactList = contacts.filter((contact) => contact.id !== id);
		setContacts(newContactList);
	};

	return (
		<div className="ui container">
			<ToastContainer autoClose="2000" />
			<Header />
			<Switch>
				<Route
					path="/"
					exact
					render={(props) => (
						<ContactList {...props} contacts={contacts} handleTrashClick={removeContactHandler} />
					)}></Route>
				<Route
					path="/addContact"
					render={(props) => <AddContact {...props} addContactHandler={addContactHandler} />}></Route>
				<Route path="/contact/:id" component={ContactDetail} />
				<Route component={PageNotFound} />
			</Switch>
		</div>
	);
}
