import "./theme.scss";

import React from "react";
import ReactDOM from "react-dom";
// import ReactMarkdown from "react-markdown";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Naked imports break rollup
import ReactMarkdown from "react-markdown/react-markdown.min.js";
import { Light } from "react-syntax-highlighter";
import gfm from "remark-gfm";

import { EditOnGitHub } from "./components/EditOnGithub/EditOnGitHub";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { SideBar } from "./components/SideBar/SideBar";
import { deflistPlugin, deflistRenderers } from "./util/deflist";

const markdownBody = document.querySelector("div.markdown")!;
const markdownContents = markdownBody.innerHTML;
markdownBody.remove();

const Content = ({ children }: { children: React.ReactNode }): JSX.Element => (
	<div>{children}</div>
);

const jass = () => ({
	name: "JASS",
	keywords: {
		keyword: "native takes returns nothing constant",
		type:
			"handle agent event player widget unit destructable item ability buff force group trigger triggercondition triggeraction timer location region rect boolexpr sound conditionfunc filterfunc unitpool itempool race alliancetype racepreference gamestate igamestate fgamestate playerstate playerscore playergameresult unitstate aidifficulty eventid gameevent playerevent playerunitevent unitevent limitop widgetevent dialogevent unittype gamespeed gamedifficulty gametype mapflag mapvisibility mapsetting mapdensity mapcontrol minimapicon playerslotstate volumegroup camerafield camerasetup playercolor placement startlocprio raritycontrol blendmode texmapflags effect effecttype weathereffect terraindeformation fogstate fogmodifier dialog button quest questitem defeatcondition timerdialog leaderboard multiboard multiboarditem trackable gamecache version itemtype texttag attacktype damagetype weapontype soundtype lightning pathingtype mousebuttontype animtype subanimtype image ubersplat hashtable framehandle originframetype framepointtype textaligntype frameeventtype oskeytype abilityintegerfield abilityrealfield abilitybooleanfield abilitystringfield abilityintegerlevelfield abilityreallevelfield abilitybooleanlevelfield abilitystringlevelfield abilityintegerlevelarrayfield abilityreallevelarrayfield abilitybooleanlevelarrayfield abilitystringlevelarrayfield unitintegerfield unitrealfield unitbooleanfield unitstringfield unitweaponintegerfield unitweaponrealfield unitweaponbooleanfield unitweaponstringfield itemintegerfield itemrealfield itembooleanfield itemstringfield movetype targetflag armortype heroattribute defensetype regentype unitcategory pathingflag commandbuttoneffect real boolean string integer",
	},
});

Light.registerLanguage("jass", jass);

const SyntaxHighlighter = ({
	language,
	value,
}: {
	language: string;
	value: React.ReactNode;
}) => <Light language={language}>{value}</Light>;

const App = () => (
	<div className="flex">
		<link rel="stylesheet" href="/wcd/assets/css/theme.css" />
		<SideBar />
		<div className="main">
			<SearchBar />
			<Content>
				<div className="markdown">
					<ReactMarkdown
						plugins={[deflistPlugin, gfm]}
						allowDangerousHtml
						renderers={{
							...deflistRenderers,
							code: SyntaxHighlighter,
						}}
					>
						{markdownContents}
					</ReactMarkdown>
				</div>
			</Content>
			<EditOnGitHub />
		</div>
	</div>
);

const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<App />, container);
