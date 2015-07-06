/**
* Contains the declaration for the {@link module:moonstone/LightPanel~LightPanel} kind.
* @module moonstone/LightPanel
*/

var
	kind = require('enyo/kind'),
	LightPanel = require('enyo/LightPanels').Panel;

var
	Spotlight = require('spotlight');

var
	Header = require('../Header');

/**
* A light-weight panels implementation that has basic support for side-to-side transitions
* between child components.
*
* @class LightPanel
* @extends module:enyo/Control~Control
* @ui
* @public
*/
module.exports = kind(
	/** @lends module:moonstone/LightPanel~LightPanel.prototype */ {

	/**
	* @private
	*/
	name: 'moon.LightPanel',

	/**
	* @private
	*/
	kind: LightPanel,

	/**
	* @private
	*/
	classes: 'moon-light-panel',

	/**
	* @private
	*/
	spotlight: 'container',

		/**
	* The title of this panel.
	*
	* @type {String}
	* @default ''
	* @public
	*/
	title: '',

	/**
	* Components that are part of the header.
	*
	* @type {Object}
	* @default {}
	* @public
	*/
	headerComponents: {},

	/**
	* The amount of time, in milliseconds, to run the fade-in animation for the panel body.
	*
	* @type {Number}
	* @default 500
	* @public
	*/
	clientDuration: 500,

	/**
	* The timing function to be applied to the fade-in animation for the panel body.
	*
	* @type {String}
	* @default 'ease-out'
	* @public
	*/
	clientTimingFunction: 'ease-out',

	/**
	* Facade for the [titleUpperCase]{@link module:moonstone/Header~Header#titleUpperCase} property
	* of the embedded {@link module:moonstone/Header~Header}.
	*
	* @type {Boolean}
	* @default true
	* @public
	*/
	titleUpperCase: true,

	/**
	* @private
	*/
	handlers: {
		onSpotlightContainerEnter: 'enter',
		onSpotlightContainerLeave: 'leave'
	},

	/**
	* @private
	*/
	components: [
		{kind: Header, name: 'header', type: 'medium'},
		{name: 'client', classes: 'client'},
		{name: 'spotlightDummy', spotlight: false, style: 'width:0;height:0;'}
	],

	/**
	* @private
	*/
	bindings: [
		{from: 'title', to: '$.header.title'},
		{from: 'titleUpperCase', to: '$.header.titleUpperCase'}
	],

	/**
	* @method
	* @private
	*/
	create: function () {
		LightPanel.prototype.create.apply(this, arguments);

		var transValue = 'opacity ' + this.clientDuration + 'ms ' + this.clientTimingFunction;
		this.$.client.applyStyle('-webkit-transition', transValue);
		this.$.client.applyStyle('transition', transValue);

		if (this.headerComponents) {
			var owner = this.hasOwnProperty('headerComponents') ? this.getInstanceOwner() : this;
			this.$.header.createComponents(this.headerComponents, {owner: owner});
		}
	},

	/**
	* This overridable method is called before a transition.
	*
	* @public
	*/
	preTransition: function () {
		this.spotlightDisabled = true; // we do not want to allow 5-way spotting during transition

		// This is highly related to the order in which "preTransition" is fired for the outgoing
		// and the incoming panel. The outgoing panel's method is fired before that of the incoming
		// panel.
		if (this.active && !Spotlight.getCurrent()) {
			// We spot the dummy element of the incoming panel so that the spotlightDisabled
			// property of the outgoing panel behaves properly (correctly attempts to spot the
			// Spotlight container element of the outgoing panel); if we do not do this, pressing a
			// 5-way key will re-spot an element in the outgoing panel.
			this.$.spotlightDummy.spotlight = true;
			Spotlight.spot(this.$.spotlightDummy);
		} else if (!this.active && this.hasSpotlightFocus) {
			Spotlight.unspot();
		}
	},

	/**
	* This overridable method is called after a transition.
	*
	* @public
	*/
	postTransition: function () {
		var spotlightDummy, current;

		if (this.active) {
			spotlightDummy = this.$.spotlightDummy;
			current = Spotlight.getCurrent();
			this.spotlightDisabled = false;
		}

		if (!this.$.client.children.length) {
			var owner = this.hasOwnProperty('clientComponents') ? this.getInstanceOwner() : this;
			this.createComponents(this.clientComponents, {owner: owner});
			this.$.client.render();
			this.$.client.addClass('populated');
		}

		if (this.active) {
			// Now we need to spot a spottable element (other than the dummy element), if it exists.
			spotlightDummy.spotlight = false;
			if (!Spotlight.isSpottable(this)) spotlightDummy.spotlight = true;
			if (!Spotlight.getPointerMode() && (!current || current === spotlightDummy)) {
				Spotlight.spot(this);
				this.hasSpotlightFocus = true;
			}
		}
	},

	/**
	* @private
	*/
	enter: function () {
		this.hasSpotlightFocus = true;
	},

	/**
	* @private
	*/
	leave: function () {
		this.hasSpotlightFocus = false;
	}

});