import { useRef, useState } from "react";

export default function ({ contacts }) {
	const [search, setSearch] = useState("");
	const inputEl = useRef("");

	const handleSearch = (e) => {
		e.preventDefault();
		setSearch(inputEl.current.value);
		console.log(search);
	};

	return (
		<div className="ui search">
			<form className="ui icon input" onSubmit={handleSearch}>
				<input
					type="text"
					className="prompt"
					placeholder="Search Contacts"
					value={search}
					onChange={handleSearch}
					ref={inputEl}
				/>
				<i className="search icon"></i>
			</form>
		</div>
	);
}
