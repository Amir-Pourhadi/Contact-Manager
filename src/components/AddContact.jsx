export default function AddContact() {
	return (
		<div className="ui main">
			<h2>Add Contact</h2>
			<form className="ui form">
				<div className="field">
					<label htmlFor="input-name">Name</label>
					<input id="input-name" type="text" placeholder="Name" />
				</div>
				<div className="field">
					<label htmlFor="input-email">Email</label>
					<input id="input-email" type="text" placeholder="Email" />
				</div>
				<input type="submit" value="Add" className="ui button blue" />
			</form>
		</div>
	);
}
