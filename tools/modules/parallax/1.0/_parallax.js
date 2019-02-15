/*  ----
 *  _parallax.js
 *  ----
 *  Developer: Addison Rodomista, Tristan Marsh
 *  Crafted: Mar 9th, 2016
 * 	Version: 1.0
 *  --
 *  Usage 
 *  In your _config.json file, include "_parallax": "1.0" under "modules"
 * 	This module is a more completed version of the example module Addison built.
 * 	It uses his code as a jumping off point, but correctly namesspaces functions
 *	and adds more functionality to the functions
 */


/*  ----
 *  NAMESPACE.parallax
 *  ----
 *	Object that all parallax functions will be accessible from 
 */
window[GLOBAL_NAMESPACE].parallax = {};

/*  ----
 *  NAMESPACE.parallax.apply(_elem, _args, _startStop, _targ) 
 *  ----
 *	Applies a parallax effect to a specified element
 *  _elem{String}:  Jquery selector of desired object to apply parallax effect to
 *  _args{obj}:  	Takes the following values:
 *			vert{int}: The speed (in percentage) the object will move above and below its center point
 *			horz{int}: The amount of horizontal movement, in relation to target width. -1 is one full place to the left, etc.
 *			rot{arr}: [start rotation, end rotation]
 *	_startStop{object}: Takes the following values:
 *			start
 *			stop
 *		Both allow the values "bottom" "center" and "top". All three can be modified with "_*INTEGER*"
 *		selecting an offset. so an end value of "top_100" would fire 100 pixels after top alignment.
 *		start also allows "bounce" and "flow" values. Flow continues the motion as is. Bounce reverses
 *		the animation at end. Defaults to { start: "flow", end:"top"}
 *	_targ{string}: Jquery selector of desired object to focus math on. Defaults to _elem.
 */
window[GLOBAL_NAMESPACE].parallax.apply = function(_elem, _args, _startStop, _targ) {
	console.log(_elem);
	var p = new window[GLOBAL_NAMESPACE].parallax.functions(_elem, _args, _startStop, _targ);
	window[GLOBAL_NAMESPACE].scrollable.push(p);
}


/*  ----
 *  Parallax(_item, _buffer)
 *  ----
 * 	Object used to instantiate new parallax elements
 *  _elem{String}:  Jquery selector of desired object to apply parallax effect to
 *  _amt{int}:  	The amount (in px) will move above and below its center point 
 */
window[GLOBAL_NAMESPACE].parallax.functions = function(_item, _args, _startStop, _targ) {
	
	var $i = $(_item);
	var targ = $i;
	var start = {tag:"flow", offset:0};
	var end = {tag:"top", offset:0};
	if(_startStop){
		var startSplit = _startStop.start.split("_");
		var endSplit = _startStop.end.split("_");
		start.tag = startSplit[0];
		end.tag = endSplit[0];
		if(startSplit[1] && parseFloat(startSplit[1])!= NaN){
			start.offset = parseFloat(startSplit[1]);
		}
		if(endSplit[1] && parseFloat(endSplit[1])!= NaN){
			end.offset = parseFloat(endSplit[1]);
		}
	}
	if(_targ){
		targ = $(_targ);
	}
	var $iTop = targ.scrollTop();
	var item = {
		c: targ.height()/2 + $iTop,
		t: 	$iTop,
		b: $iTop+targ.height(),
		h: targ.height(),
		w: targ.width()
	}
	var viewport = {
		h : $(window).height(),
		c : $(window).height()/2
	}

	var getDistanceFromCenter = function(_scroll) {
		return (targ.offset().top) - (_scroll + viewport.c);
	}

	var getDistanceFromTop = function(_scroll) {
		return (targ.offset().top) - (_scroll);
	}

	var getDistanceFromBottom = function(_scroll) {
		return (targ.offset().top) - (_scroll + (viewport.c*2));
	}

	var translate = function(_amt) {
		var _trans = "";
		if(_args.vert){
			_trans += "translateY(" + (_amt * _args.vert) + "px) ";
		}
		if(_args.horz){
			_trans += "translateX(" + (item.w * _args.horz * _amt) + "px) ";
		}
		if(_args.rot){
			var startRot = _args.rot[0];
			var endRot = _args.rot[1];
			var change = endRot - startRot;
			change = change * _amt;
			_trans += "rotate(" + change + "deg) ";
		}
		var transform = 
			{
				'-webkit-transform': 	_trans,
				'-moz-transform': 		_trans,
				'-o-transform': 		_trans,
				'transform': 			_trans
			};
		$i.css(transform);
	}
	update = function(_scroll) {
		
		var endScroll = "test";
		switch(end.tag){
			case "bottom":
				endScroll = getDistanceFromBottom(_scroll+end.offset)
				break;
			case "center":
				endScroll = getDistanceFromCenter(_scroll+end.offset);
				break;
			case "top":
				endScroll = getDistanceFromTop(_scroll+end.offset);
				break;
		}
		
		var startScroll;
		
		switch(start.tag){
			case "bottom":
				startScroll = getDistanceFromBottom(_scroll+start.offset)
				break;
			case "center":
				startScroll = getDistanceFromCenter(_scroll+start.offset);
				break;
			case "top":
				startScroll = getDistanceFromTop(_scroll+start.offset);
				break;
			case "bounce":
				endScroll = Math.abs(endScroll);
		}
		if(endScroll < 0){
			endScroll = 0;
		}
		
		if((startScroll <= 0 && endScroll >= 0) || (start.tag == "bounce" || start.tag == "flow")){
				translate(
					endScroll / viewport.h
				);
		}
	}
	// Bind to scroll
	window[GLOBAL_NAMESPACE].bindScrollEvents();
	
	return {
		update: update
	};

}

