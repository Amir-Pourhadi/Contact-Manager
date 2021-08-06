import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "semantic-ui-css/semantic.min.css";
import { addContact, getContacts, removeContact } from "../api/apiUtils";
import AddContact from "./AddContact";
import "./App.css";
import ContactDetail from "./ContactDetail";
import ContactList from "./ContactList";
import Footer from "./Footer";
import Header from "./Header";
import PageNotFound from "./PageNotFound";

export default function App() {
	const [contacts, setContacts] = useState([]);

	/**
	 * To load contacts from server
	 */
	useEffect(async () => {
		const allContacts = await getContacts();
		allContacts && setContacts(allContacts);
	}, []);

	/**
	 * To pass contact data from children (AddContact)
	 * @param {object} contact a single contact object
	 */
	const addContactHandler = async (contact) => {
		const response = await addContact(contact);
		setContacts([response.data, ...contacts]);
	};

	/**
	 * To delete a contact
	 * @param {string} id unique id for each contact
	 */
	const removeContactHandler = async (id) => {
		await removeContact(id);
		setContacts(contacts.filter((contact) => contact.id !== id));
	};

	return (
		<>
			<ToastContainer autoClose="2000" position="bottom-right" closeButton="false" />
			<Header />
			<div className="ui container">
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
			<Footer />
		</>
	);
}
