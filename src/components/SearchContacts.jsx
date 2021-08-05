import { useRef, useState } from "react";

export default function ({ contacts }) {
	const [search, setSearch] = useState("");
	const inputEl = useRef("");

	const handleSearch = () => {
		setSearch(inputEl.current.value);
	};

	return (
		<div className="ui search">
			<div className="ui icon input">
				<input
					type="text"
					className="prompt"
					placeholder="Search Contacts"
					value={search}
					onChange={handleSearch}
					ref={inputEl}
				/>
				<i className="search icon"></i>
			</div>
		</div>
	);
}
