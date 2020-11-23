import React, {
	createContext,
	ReactNode,
	useCallback,
	useContext,
} from "react";

import { partialReload } from "../util/partialReload";
import { TocNode } from "../util/toc";

export const MarkdownContentContext = createContext<
	((markdown: string) => void) | undefined
>(undefined);

export const Link = ({
	tocNode,
	children,
}: {
	tocNode: TocNode;
	children?: ReactNode;
}): JSX.Element => {
	const markdownContentContext = useContext(MarkdownContentContext);
	if (!markdownContentContext)
		throw new Error("MarkdownContentContext not provided!");
	const onClick = useCallback(
		(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
			e.preventDefault();
			partialReload(tocNode, markdownContentContext);
		},
		[tocNode],
	);
	return (
		<a href={`/wcd/${tocNode.path}`} onClick={onClick}>
			{children ?? tocNode.title}
		</a>
	);
};
