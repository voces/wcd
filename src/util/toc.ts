import untypedToc from "../../toc.json";

export interface TocNode {
	children?: Record<string, TocNode>;
	title?: string;
	path: string;
	nav_priority?: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toc = (untypedToc as any) as TocNode;
