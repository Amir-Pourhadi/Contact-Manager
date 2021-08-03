import UserPhoto from "../images/user.jpg";

export default function ContactDetail() {
	return (
		<div className="main">
			<div className="ui card centered">
				<div className="image">
					<img src={UserPhoto} alt="user" />
				</div>
				<div className="content">
					<div className="header">Alex</div>
					<div className="description">Alex.CE1379@Gmail.com</div>
				</div>
			</div>
		</div>
	);
}
