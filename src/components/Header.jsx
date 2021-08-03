import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div className="ui fixed menu">
			<div className="ui container center">
				<Link to="/">
					<h1>Contact Manager</h1>
				</Link>
			</div>
		</div>
	);
}
