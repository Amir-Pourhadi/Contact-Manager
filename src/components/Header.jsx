import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className="ui fixed menu">
			<div className="ui container center">
				<Link to="/" style={{ color: "black" }}>
					<h1>Contact Manager</h1>
				</Link>
			</div>
		</header>
	);
}
