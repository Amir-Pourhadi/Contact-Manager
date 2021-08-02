import contacts from "../data/contacts.json";

export default function ContactList() {
	return (
		<div className="ui celled list">
			{contacts.map(({ id, name, email }) => (
				<div className="item" key={id}>
					<div className="contact">
						<div className="header">{name}</div>
						<div>{email}</div>
					</div>
					<i className="trash alternate outline icon"></i>
				</div>
			))}
		</div>
	);
}
