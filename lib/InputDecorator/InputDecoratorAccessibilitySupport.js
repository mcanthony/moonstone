var
	kind = require('enyo/kind');
var
	VoiceReadout = require('enyo-webos/VoiceReadout');

/**
* @name InputDecoratorAccessibilityMixin
* @mixin
*/
module.exports = {

	/**
	* @private
	*/
	handlers: {
		onSpotlightFocused  : 'spotlightFocusedHandler'
	},

	/**
	* @private
	*/
	spotlightFocusedHandler: function (oSender, oEvent) {
		var oInput = this.getInputControl(),
			enabled = !oInput.accessibilityDisabled;
		if (enabled && oInput) {
			VoiceReadout.readAlert(oInput.getPlaceholder());
		}
		this.bubble('onRequestScrollIntoView');
		return true;
	}
};