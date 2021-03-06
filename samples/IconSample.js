enyo.kind({
	name: "moon.sample.IconSample",
	kind: "FittableRows",
	classes: "moon enyo-unselectable enyo-fit",
	components: [
		{kind: "moon.Scroller", fit:true, components: [
			{kind: "moon.Divider", content: "Moonstone Font-based Icons:"},
			{kind: "moon.Icon", icon: "arrowlargeup", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "arrowlargedown", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "arrowlargeleft", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "arrowlargeright", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "arrowsmallup", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "arrowsmalldown", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "arrowsmallleft", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "arrowsmallright", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "closex", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "check", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "search", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "drawer", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "list", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "bulletlist", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "denselist", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "rollforward", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "rollbackward", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "exitfullscreen", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "fullscreen", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "circle", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "stop", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "play", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "pause", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "forward", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "backward", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "skipforward", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "skipbackward", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "pauseforward", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "pausebackward", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "pausejumpforward", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "pausejumpbackward", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "jumpforward", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "jumpbackward", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "arrowshrink", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "arrowextend", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "flag", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "funnel", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "trash", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "plus", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "minus", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "star", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "hollowstar", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "halfstar", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "gear", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "plug", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "lock", small: false, ontap: "buttonTapped"},
			{classes:"moon-1v"},
			{kind: "moon.Divider", content: "Small Moonstone Font-based Icons:"},
			{kind: "moon.Icon", icon: "arrowlargeup", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "arrowlargedown", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "arrowlargeleft", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "arrowlargeright", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "arrowsmallup", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "arrowsmalldown", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "arrowsmallleft", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "arrowsmallright", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "closex", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "check", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "search", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "drawer", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "list", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "bulletlist", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "denselist", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "rollforward", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "rollbackward", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "exitfullscreen", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "fullscreen", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "circle", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "stop", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "play", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "pause", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "forward", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "backward", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "skipforward", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "skipbackward", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "pauseforward", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "pausebackward", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "pausejumpforward", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "pausejumpbackward", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "jumpforward", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "jumpbackward", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "arrowshrink", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "arrowextend", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "flag", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "funnel", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "trash", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "plus", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "minus", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "star", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "hollowstar", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "halfstar", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "gear", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "plug", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "lock", ontap: "buttonTapped"},
			{classes:"moon-1v"},
			{kind: "moon.Divider", content: "Examples of LG (Dingbat) Icons:"},
			{kind: "moon.Icon", icon: "&#42276;", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "&#42381;", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "&#42391;", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "&#42322;", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "&#42276;", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "&#42381;", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "&#42391;", ontap: "buttonTapped"},
			{kind: "moon.Icon", icon: "&#42322;", ontap: "buttonTapped"},
			{classes:"moon-1v"},
			{kind: "moon.Divider", content: "Image Asset Icons (Raster Image):"},
			{kind: "moon.Icon", src: "$lib/moonstone/samples/assets/icon-list.png", ontap: "buttonTapped"},
			{kind: "moon.Icon", src: "$lib/moonstone/samples/assets/icon-album.png", ontap: "buttonTapped"},
			{classes:"moon-1v"},
			{kind: "moon.Divider", content: "Image Asset Icons (Vector Image):"},
			{kind: "moon.Icon", src: "$lib/moonstone/samples/assets/magnify.svg", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", src: "$lib/moonstone/samples/assets/trash.svg", small: false, ontap: "buttonTapped"},
			{kind: "moon.Icon", src: "$lib/moonstone/samples/assets/magnify.svg", ontap: "buttonTapped"},
			{kind: "moon.Icon", src: "$lib/moonstone/samples/assets/trash.svg", ontap: "buttonTapped"},
			{classes:"moon-1v"},
			{kind: "moon.Divider", content: "Disabled Icons:"},
			{kind: "moon.Icon", icon: "search", ontap: "buttonTapped", disabled: true},
			{kind: "moon.Icon", icon: "&#42276;", ontap: "buttonTapped", disabled: true},
			{kind: "moon.Icon", src: "$lib/moonstone/samples/assets/icon-list.png", ontap: "buttonTapped", disabled: true},
			{kind: "moon.Icon", src: "$lib/moonstone/samples/assets/icon-album.png", ontap: "buttonTapped", disabled: true},
			{classes:"moon-1v"},
			{kind: "moon.Divider", content: "Icons inside a spottable Item:"},
			{kind: "moon.Item", classes: "moon-hspacing", ontap: "buttonTapped", components: [
				{content: "Selectable Item"},
				{kind: "moon.Icon", icon: "&#42276;", ontap: "buttonTapped"},
				{kind: "moon.Icon", src: "$lib/moonstone/samples/assets/icon-list.png", ontap: "buttonTapped"}
			]}
		]},
		{kind: "moon.Divider", content: "Result"},
		{kind: "moon.BodyText", name:"console", content: "No changes yet"}
	],
	buttonTapped: function(inSender, inEvent) {
		this.$.console.setContent(inSender.name + " tapped.");
	}
});
