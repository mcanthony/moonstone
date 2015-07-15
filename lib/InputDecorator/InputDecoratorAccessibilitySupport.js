var
	kind = require('enyo/kind');
var
	$L = require('../i18n'),
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
			var text = oInput.getValue() ? oInput.getValue() + ' ' + $L('edit box') :
											oInput.getPlaceholder() + ' ' + $L('edit box');
			VoiceReadout.readAlert(text);
		}
		this.bubble('onRequestScrollIntoView');
		return true;
	}
};