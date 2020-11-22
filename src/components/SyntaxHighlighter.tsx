import React from "react";
import { Light } from "react-syntax-highlighter";
import { Node } from "unist";

Light.registerLanguage("jass", () => ({
	name: "JASS",
	keywords: {
		keyword: "native takes returns nothing constant",
		type:
			"handle agent event player widget unit destructable item ability buff force group trigger triggercondition triggeraction timer location region rect boolexpr sound conditionfunc filterfunc unitpool itempool race alliancetype racepreference gamestate igamestate fgamestate playerstate playerscore playergameresult unitstate aidifficulty eventid gameevent playerevent playerunitevent unitevent limitop widgetevent dialogevent unittype gamespeed gamedifficulty gametype mapflag mapvisibility mapsetting mapdensity mapcontrol minimapicon playerslotstate volumegroup camerafield camerasetup playercolor placement startlocprio raritycontrol blendmode texmapflags effect effecttype weathereffect terraindeformation fogstate fogmodifier dialog button quest questitem defeatcondition timerdialog leaderboard multiboard multiboarditem trackable gamecache version itemtype texttag attacktype damagetype weapontype soundtype lightning pathingtype mousebuttontype animtype subanimtype image ubersplat hashtable framehandle originframetype framepointtype textaligntype frameeventtype oskeytype abilityintegerfield abilityrealfield abilitybooleanfield abilitystringfield abilityintegerlevelfield abilityreallevelfield abilitybooleanlevelfield abilitystringlevelfield abilityintegerlevelarrayfield abilityreallevelarrayfield abilitybooleanlevelarrayfield abilitystringlevelarrayfield unitintegerfield unitrealfield unitbooleanfield unitstringfield unitweaponintegerfield unitweaponrealfield unitweaponbooleanfield unitweaponstringfield itemintegerfield itemrealfield itembooleanfield itemstringfield movetype targetflag armortype heroattribute defensetype regentype unitcategory pathingflag commandbuttoneffect real boolean string integer",
	},
}));

export const SyntaxHighlighter = ({
	language,
	value,
	PreTag,
}: {
	language?: string;
	value: React.ReactNode;
	PreTag?: string;
}): JSX.Element => (
	<Light language={language} PreTag={PreTag}>
		{value}
	</Light>
);

export const InlineSyntaxHighlighter = ({
	value,
	node,
}: {
	value: React.ReactNode;
	node: Node;
}): JSX.Element =>
	SyntaxHighlighter({
		value,
		PreTag: "span",
		...("language" in node && typeof node.language === "string"
			? { language: node.language }
			: undefined),
	});
