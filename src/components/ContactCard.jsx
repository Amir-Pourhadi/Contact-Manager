export default function ContactCard({ contact: { id, name, email } }) {
	return (
		<div className="item" key={id}>
			<div className="contact">
				<div className="header">{name}</div>
				<div>{email}</div>
			</div>
			<i className="trash alternate outline icon" style={{ color: "red", marginTop: 7 }}></i>
		</div>
	);
}
