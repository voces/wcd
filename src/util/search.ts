import lunr from "lunr";

import data from "../../lunr.json";
import { toc } from "./toc";

const idx = lunr.Index.load(data);

export type SearchResult = TocNode & { path: string };

export const search = (search: string): SearchResult[] =>
	idx
		.query((query) => {
			const tokens = lunr.tokenizer(search);
			query.term(tokens, { boost: 5 });
			query.term(tokens, {
				fields: ["title"],
				boost: 10,
				wildcard:
					lunr.Query.wildcard.LEADING + lunr.Query.wildcard.TRAILING,
			});
			query.term(tokens, {
				fiekds: ["types", "contents"],
				wildcard: lunr.Query.wildcard.TRAILING,
			});
		})
		.map((r) => {
			const parts = r.ref.split("/");
			let cur = toc;
			for (const part of parts) {
				if (!cur.children) return;
				cur = cur.children[part];
			}
			return { ...cur, path: r.ref };
		})
		.filter((r) => r);
