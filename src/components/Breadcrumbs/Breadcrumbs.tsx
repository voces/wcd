import "./Breadcrumbs.scss";

import React from "react";

import { Link } from "../../contexts/LinkContext";
import { TocNode } from "../../util/toc";

const glue = (
	elements: JSX.Element[],
	glue: (props: { index: number }) => JSX.Element,
) => {
	const newArr = [elements[0]];
	for (let i = 1; i < elements.length; i++)
		newArr.push(glue({ index: i }), elements[i]);

	return newArr;
};

export const Breadcrumbs = ({
	breadcrumbs,
}: {
	breadcrumbs: TocNode[];
}): JSX.Element => (
	<div className="breadcrumbs">
		{glue(
			breadcrumbs.map((b, i) => (
				<Link key={`${b.title}-${i}`} tocNode={b}>
					{b.title}
				</Link>
			)),
			({ index }: { index: number }) => (
				<React.Fragment key={`glue-${index}`}>{" > "}</React.Fragment>
			),
		)}
	</div>
);
