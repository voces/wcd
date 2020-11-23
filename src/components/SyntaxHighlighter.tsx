import React from "react";
import { Light } from "react-syntax-highlighter";
import { Node } from "unist";

// https://highlightjs.readthedocs.io/en/latest/language-guide.html
Light.registerLanguage("jass", (hljs) => ({
	name: "JASS",
	keywords: {
		keyword: "native takes returns nothing constant call",
		type: [
			"handle agent event player widget unit destructable item ability",
			"buff force group trigger triggercondition triggeraction timer",
			"location region rect boolexpr sound conditionfunc filterfunc",
			"unitpool itempool race alliancetype racepreference gamestate",
			"igamestate fgamestate playerstate playerscore playergameresult",
			"unitstate aidifficulty eventid gameevent playerevent",
			"playerunitevent unitevent limitop widgetevent dialogevent",
			"unittype gamespeed gamedifficulty gametype mapflag mapvisibility",
			"mapsetting mapdensity mapcontrol minimapicon playerslotstate",
			"volumegroup camerafield camerasetup playercolor placement",
			"startlocprio raritycontrol blendmode texmapflags effect",
			"effecttype weathereffect terraindeformation fogstate fogmodifier",
			"dialog button quest questitem defeatcondition timerdialog",
			"leaderboard multiboard multiboarditem trackable gamecache version",
			"itemtype texttag attacktype damagetype weapontype soundtype",
			"lightning pathingtype mousebuttontype animtype subanimtype image",
			"ubersplat hashtable framehandle originframetype framepointtype",
			"textaligntype frameeventtype oskeytype abilityintegerfield",
			"abilityrealfield abilitybooleanfield abilitystringfield",
			"abilityintegerlevelfield abilityreallevelfield",
			"abilitybooleanlevelfield abilitystringlevelfield",
			"abilityintegerlevelarrayfield abilityreallevelarrayfield",
			"abilitybooleanlevelarrayfield abilitystringlevelarrayfield",
			"unitintegerfield unitrealfield unitbooleanfield unitstringfield",
			"unitweaponintegerfield unitweaponrealfield unitweaponbooleanfield",
			"unitweaponstringfield itemintegerfield itemrealfield",
			"itembooleanfield itemstringfield movetype targetflag armortype",
			"heroattribute defensetype regentype unitcategory pathingflag",
			"commandbuttoneffect real boolean string integer",
		].join(" "),
	},
	contains: [hljs.QUOTE_STRING_MODE, hljs.C_NUMBER_MODE],
}));

Light.registerLanguage("fdf", (hljs) => ({
	name: "FDF",
	keywords: {
		keyword: [
			"INHERITS WITHCHILDREN TOP BOTTOM LEFT RIGHT TOPLEFT TOPRIGHT",
			"BOTTOMLEFT BOTTOMRIGHT JUSTIFYTOP JUSTIFYMIDDLE JUSTIFYBOTTOM",
			"JUSTIFYLEFT JUSTIFYCENTER JUSTIFYRIGHT",
		].join(" "),
		frametype: [
			"BACKDROP BUTTON CHATDISPLAY CHECKBOX CONTROL DIALOG EDITBOX FRAME",
			"GLUEBUTTON GLUECHECKBOX GLUEEDITBOX GLUEPOPUPMENU GLUETEXTBUTTON",
			"HIGHLIGHT LISTBOX MENU MODEL POPUPMENU SCROLLBAR SIMPLEBUTTON",
			"SIMPLECHECKBOX SIMPLEFRAME SIMPLESTATUSBAR SLASHCHATBOX SLIDER",
			"SPRITE TEXT TEXTAREA TEXTBUTTON TIMERTEXT",
		].join(" "),
		action: [
			"AlphaMode Anchor BackdropBackground BackdropBackgroundInsets",
			"BackdropBackgroundSize BackdropBlendAll BackdropBottomFile",
			"BackdropCornerFlags BackdropCornerSize BackdropEdgeFile",
			"BackdropCornerFile BackdropHalfSides BackdropLeftFile",
			"BackdropMirrored BackdropRightFile BackdropTileBackground",
			"BackdropTopFile BackgroundArt BarTexture ButtonPushedTextOffset",
			"ButtonText ChatDisplayBorderSize ChatDisplayEditBox",
			"ChatDisplayLineHeight ChatDisplayScrollBar CheckBoxCheckHighlight",
			"CheckBoxDisabledCheckHighlight CheckedTexture ControlBackdrop",
			"ControlDisabledBackdrop ControlDisabledPushedBackdrop",
			"ControlFocusHighlight ControlMouseOverHighlight",
			"ControlPushedBackdrop ControlShortcutKey ControlStyle",
			"DecorateFileNames DialogBackdrop DisabledText DisabledTexture",
			"EditBorderSize EditCursorColor EditTextFrame File Font FontColor",
			"FontDisabledColor FontFlags FontHighlightColor FontJustificationH",
			"FontJustificationV FontJustificationOffset FontShadowColor",
			"FontShadowOffset Frame FrameFont Height HighlightAlphaFile",
			"HighlightAlphaMode HighlightColor HighlightText HighlightType",
			"IncludeFile LayerStyle ListBoxBorder ListBoxScrollBar MenuBorder",
			"MenuItem MenuItemHeight MenuTextHighlightColor NormalText",
			"NormalTexture PopupArrowFrame PopupButtonInset PopupMenuFrame",
			"PopupTitleFrame PushedTexture ScrollBarDecButtonFrame",
			"ScrollBarIncButtonFrame SetAllPoints SetPoint SliderInitialValue",
			"SliderInitialValue SliderLayoutHorizontal SliderLayoutVertical",
			"SliderMaxValue SliderMinValue SliderStepSize",
			"SliderThumbButtonFrame TabFocusDefault TabFocusNext TabFocusPush",
			"TexCoord Text TextAreaInset TextAreaLineGap TextAreaLineHeight",
			"TextAreaMaxLines TextAreaScrollBar TextLength UseActiveContext",
			"UseHighlight Width Frame String Texture Layer StringList",
		].join(" "),
	},
	contains: [hljs.QUOTE_STRING_MODE, hljs.C_NUMBER_MODE],
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
