/**
    _moon.IntegerScrollPicker_ is used to display a list of integers that solicits a choice from the user, 
	ranging from _min_ to _max_.

    To initialize the IntegerScrollPicker to a particular value, set the _value_
    property to the integer that should be selected.

	{kind: "moon.IntegerScrollPicker", noneText: "None Selected", content: "Choose a Number", min: 0, max: 25, value: 5]}

	The picker can be programmatically changed by modifying the published properties _value_, 
	_min_, or _max_ by calling the appropriate setter functions (_setValue()_, _setMin()_, _setMax()_ and
	_getValue()_, _getMin()_ and _getMax()_).
*/
enyo.kind({
	name: "moon.IntegerScrollPicker",	
	published: {
		value: null,
		min: 0,
		max: 9
	},
	handlers: {
		onScrollStart:"scrollStart",
		onScroll:"scroll",
		onScrollStop:"scrollStop"
	},
	events: {
		onChange: ""
	},
	//* Cache scroll bounds so we don't have to run stop() every time we need them
	scrollBounds: {},
	components: [
		{name:"topOverlay", classes:"moon-scroll-picker-overlay-container-top", showing:false, components:[		
			{name:"overlayTest", classes:"moon-scroll-picker-overlay-top"},
			{classes:"moon-scroll-picker-overlay-top-border"}			
		]},	
		{name:"bottomOverlay", classes:"moon-scroll-picker-overlay-container-bottom", showing:false, components:[		
			{classes:"moon-scroll-picker-overlay-bottom"},
			{classes:"moon-scroll-picker-overlay-bottom-border"}			
		]},		
		{classes:"down-arrow-container", components:[
			{classes:"down-arrow-border"},
			{name:"downArrow", classes:"down-arrow", ontap:"next"}
		]},
		{classes:"up-arrow-container", components:[
			{classes:"up-arrow-border"},
			{name:"upArrow", classes:"up-arrow", ontap:"previous"}
		]},		
		{kind: "enyo.Scroller", spotlight: true, thumb:false, touch:true, classes: "moon-scroll-picker", 
		 onSpotlightUp:"previous", onSpotlightDown:"next", onSpotlightLeft:"left", onSpotlightFocused:"spotlightFocused", onSpotlightBlur:"spotlightBlur", components:[
			{name:"repeater", kind:"enyo.FlyweightRepeater", ondragstart: "dragstart", onSetupItem: "setupItem", components: [
				{name: "item", classes:"moon-scroll-picker-item"}
			]}
		]}
	],
	//* @protected
	create: function() {
		this.inherited(arguments);
		this.rangeChanged();
	},
	rendered: function(){
		this.inherited(arguments);
		this.updateScrollBounds();		
		this.$.scroller.scrollToNode(this.$.repeater.fetchRowNode(this.value - this.min));
	},
	setupItem: function(inSender, inEvent) {
		var index = inEvent.index;
		this.$.item.setContent(index+this.min);
	},
	rangeChanged: function() {
		this.value = this.value >= this.min && this.value <= this.max ? this.value : this.min;		
		this.$.repeater.setCount(this.max-this.min+1);
//		this.scrollToNode(this.$.repeater.fetchRowNode(this.value - this.min));
		this.$.repeater.render();
	},
	valueChanged: function(inOld) {
		this.animateToNode(this.$.repeater.fetchRowNode(this.value - this.min));
	},
	//preventing dragging
	dragstart: function(inSender, inEvent) {
		return true;
	},
	minChanged: function() {
		this.rangeChanged();
	},
	maxChanged: function() {
		this.rangeChanged();
	},
	previous: function() {
		if (this.value > this.min) {
			enyo.job.stop("hideTopOverlay");
			this.animateToNode(this.$.repeater.fetchRowNode(--this.value - this.min));
			this.$.topOverlay.show();
			enyo.job("hideTopOverlay", enyo.bind(this,this.hideTopOverlay), 350);
		}
		return true;
	},
	hideTopOverlay: function(){
			this.$.topOverlay.setShowing(false);		
	},
	hideBottomOverlay: function(){
			this.$.bottomOverlay.setShowing(false);		
	},	
	next: function() {
		if (this.value < this.max) {
			enyo.job.stop("hideBottomOverlay");			
			this.animateToNode(this.$.repeater.fetchRowNode(++this.value - this.min));
			this.$.bottomOverlay.show();
			enyo.job("hideBottomOverlay", enyo.bind(this,this.hideBottomOverlay), 350);
		}
		return true;
	},
	spotlightFocused: function() {
		this.inherited(arguments);
		this.$.downArrow.addClass("spotlight");
		this.$.upArrow.addClass("spotlight");		
	},
	spotlightBlur: function() {
		this.inherited(arguments);		
		this.$.downArrow.removeClass("spotlight");
		this.$.upArrow.removeClass("spotlight");
		this.hideTopOverlay();		
		this.hideBottomOverlay();
	},
	//scrollStop will be called multiple times if they hold the key down (due to getScrollBounds calls stopping the scroller)
	scrollStop: function(inSender, inEvent) {
		this.updateScrollBounds();		
		if (this.value!=null) {
			this.doChange({
				name:this.name, 
				value:this.value
			});			
		}
	},
	scrollStart: function(inSender, inEvent) {
		this.updateScrollBounds();		
	},
	//* On scroll, update our cached _this.scrollBounds_ property, and show/hide pagination controls
	scroll: function(inSender, inEvent) {
		this.updateScrollBounds();
	},
	//* Cache scroll bounds in _this.scrollBounds_ so we don't have to call stop() to retrieve them later
	// NOTE - this is a copy of what's in Scroller, we will likely later integrate this functionality (including animateToNode) into enyo.Scroller & remove from here
	updateScrollBounds: function() {
		this.scrollBounds = this.$.scroller.getStrategy()._getScrollBounds();
	},
	//* Scroll to a given node in list
	animateToNode: function(inNode) {
		var sb = this.scrollBounds,
			st = this.$.scroller.getStrategy(),
			b = {
				height: inNode.offsetHeight,
				width: inNode.offsetWidth,
				top: 0,
				left: 0
			},
			n = inNode;
		
		if(!st.scrollNode) {
			return;
		}
		
		while (n && n.parentNode && n.id != st.scrollNode.id) {
			b.top += n.offsetTop;
			b.left += n.offsetLeft;
			n = n.parentNode;
		}

		var xDir = b.left - sb.left > 0 ? 1 : b.left - sb.left < 0 ? -1 : 0;
		var yDir = b.top - sb.top > 0 ? 1 : b.top - sb.top < 0 ? -1 : 0;

		var y = (yDir === 0) ? sb.top  : Math.min(sb.maxTop, b.top);
		var x = (xDir === 0) ? sb.left : Math.min(sb.maxLeft, b.left);
		
		// If x or y changed, scroll to new position
		if (x !== this.$.scroller.getScrollLeft() || y !== this.$.scroller.getScrollTop()) {
			this.$.scroller.scrollTo(x,y);
		}
	}
});