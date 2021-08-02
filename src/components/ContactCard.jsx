import UnknownAvatar from "../images/user.png";

export default function ContactCard({ contact: { id, name, email } }) {
	return (
		<div className="item" key={id}>
			<img className="ui avatar image" src={UnknownAvatar} alt={`${name} Avatar`} />
			<div className="content">
				<div className="header">{name}</div>
				<div>{email}</div>
			</div>
			<i className="trash alternate outline icon" style={{ color: "red", marginTop: 7 }}></i>
		</div>
	);
}
