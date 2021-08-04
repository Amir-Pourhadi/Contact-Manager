import { Link } from "react-router-dom";
import "./PageNotFound.css";

export default function PageNotFound() {
	return (
		<section className="main">
			<div className="ui center aligned header page_404">
				<div className="background"></div>
				<div>
					<h3 className="h2">Looks like you're lost 😢</h3>
					<p>The page you are looking for, is not available!</p>
					<Link to="/" className="ui button green">
						Go Back to Home
					</Link>
				</div>
			</div>
		</section>
	);
}
