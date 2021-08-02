import "semantic-ui-css/semantic.min.css";
import AddContact from "./AddContact";
import "./App.css";
import ContactList from "./ContactList";
import Header from "./Header";

export default function App() {
	return (
		<div className="ui container">
			<Header />
			<AddContact />
			<ContactList />
		</div>
	);
}
