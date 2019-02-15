/*  ----
 *  _desktop-helper.js
 *  ----
 *  Developer: Addison Rodomista -- R
 *  Crafted: Jan 28th, 2016
 *  --
 *  Summary
 *  Set of tools used to solve common desktop related tasks 
 */

window[GLOBAL_NAMESPACE]['DesktopTools'] = {
	    // Opera 8.0+
	isOpera: function() {
		return (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
	},
	    // Firefox 1.0+
	isFirefox: function() {
		return typeof InstallTrigger !== 'undefined';
	},
	    // At least Safari 3+: "[object HTMLElementConstructor]"
	isSafari: function() {
		return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
	},
	    // Internet Explorer 6-11
	isIE: function(_options) {
		
		if (_options === "version") {
			var ua = window.navigator.userAgent;
		    var msie = ua.indexOf('MSIE ');
		    if (msie > 0) {
		        // IE 10 or older => return version number
		        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
		    }
		    var trident = ua.indexOf('Trident/');
		    if (trident > 0) {
		        // IE 11 => return version number
		        var rv = ua.indexOf('rv:');
		        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
		    }
		    var edge = ua.indexOf('Edge/');
		    if (edge > 0) {
		       // IE 12 => return version number
		       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
		    }
	    	// other browser
	    	return false;
		}
		return /*@cc_on!@*/false || !!document.documentMode;
	},
	    // Edge 20+
	isEdge: function() {
		return !isIE && !!window.StyleMedia;
	},
	    // Chrome 1+
	isChrome: function() {
		return !!window.chrome && !!window.chrome.webstore;
	},
	    // Blink engine detection
	isBlink: function() {
		return (isChrome || isOpera) && !!window.CSS;
	}


}

	

