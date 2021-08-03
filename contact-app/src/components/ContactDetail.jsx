import { Link } from "react-router-dom";
import UserPhoto from "../images/user.jpg";

export default function ContactDetail({
	location: {
		state: {
			contact: { name, email }
		}
	}
}) {
	return (
		<div className="main">
			<div className="ui card centered">
				<div className="image">
					<img src={UserPhoto} alt="user" />
				</div>
				<div className="content">
					<div className="header">{name}</div>
					<div className="description">{email}</div>
				</div>
			</div>
			<div className="center-div">
				<Link to="/" className="ui button green center">
					Back to Contact List
				</Link>
			</div>
		</div>
	);
}
