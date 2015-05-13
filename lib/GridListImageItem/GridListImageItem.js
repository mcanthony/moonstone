require('moonstone');

var
	kind = require('enyo/kind');

var
	GridListImageItem = require('layout/GridListImageItem');

var
	Marquee = require('../Marquee'),
	MarqueeSupport = Marquee.Support,
	MarqueeText = Marquee.Text;

/**
* {@link moon.GridListImageItem} extends {@link enyo.GridListImageItem}, adding
* Moonstone-specific configuration, styling, decorators, and focus-state management.
*
* You may create an image grid by adding instances of this kind as components of a
* {@link moon.DataGridList}.
*
* @class moon.GridListImageItem
* @extends enyo.GridListImageItem
* @mixes moon.MarqueeSupport
* @ui
* @public
*/
module.exports = kind(
	/** @lends moon.GridListImageItem.prototype */ {

	/**
	* @private
	*/
	name: 'moon.GridListImageItem',

	/**
	* @private
	*/
	kind: GridListImageItem,

	/**
	* @private
	*/
	mixins: [MarqueeSupport],

	/**
	* @private
	*/
	spotlight: true,

	/**
	* @private
	*/
	centered: true,

	/**
	* @private
	*/
	classes: 'moon-gridlist-imageitem',

	/**
	* @private
	*/
	componentOverrides: {
		caption: {kind: MarqueeText},
		subCaption: {kind: MarqueeText}
	},

	/**
	* @private
	*/
	bindings: [
		{from: '.allowHtml', to: '.$.caption.allowHtml'},
		{from: '.allowHtml', to: '.$.subCaption.allowHtml'}
	],

	/**
	* @private
	*/
	handlers: {
		onSpotlightFocus: 'focused'
	},

	/**
	* @fires moon.Scroller#onRequestScrollIntoView
	* @private
	*/
	focused: function (inSender, inEvent) {
		if (inEvent.originator === this) {
			this.bubble('onRequestScrollIntoView');
		}
	}
});