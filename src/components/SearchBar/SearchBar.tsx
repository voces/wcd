import "./SearchBar.scss";

import React, { useState } from "react";

import { search, SearchResult } from "../../util/search";
import { TocNode } from "../../util/toc";
import { SearchIcon } from "../Icons/SearchIcon";

const SearchResults = ({ items }: { items: SearchResult[] }) => (
	<ul className="search-results">
		{items.slice(0, 100).map((item, idx, arr) => (
			<li key={item.path} className="result">
				<a
					href={`wcd/${item.path}`}
					className={
						idx === 0
							? "first"
							: idx === arr.length - 1
							? "last"
							: ""
					}
				>
					<div className="title">{item.title}</div>
					<div className="path">
						{item.path.split("/").join(" > ")}
					</div>
				</a>
			</li>
		))}
	</ul>
);

export const SearchBar = (): JSX.Element => {
	const [searchResults, setSearchResults] = useState<TocNode[]>([]);
	return (
		<div className="search-bar">
			<label htmlFor="search-input">
				<SearchIcon size={18} />
			</label>
			<input
				id="search-input"
				placeholder="Search wcd"
				onInput={(e) => {
					const searchText = e.currentTarget.value.trim();
					if (!searchText) return setSearchResults([]);
					setSearchResults(search(searchText));
				}}
				onKeyDown={(e) => {
					if (e.key === "Escape") setSearchResults([]);
				}}
				onBlur={() => setSearchResults([])}
			/>
			<a href="https://github.com/voces/wcd">wcd on GitHub</a>
			<SearchResults items={searchResults} />
		</div>
	);
};
