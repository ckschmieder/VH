/*  ----
 *  _overlay.js
 *  ----
 *  Developer: Tristan Marsh
 *  Crafted: Mar 7, 2016
 * 	Version: 1.0
 *  --
 *  Usage 
 *  In your _config.json file, include "video": "1.0" under "modules"
 */
 
 /*  ----
 *  Namespace.overlay
 *  ----
 *	Object that all overlay functions will be accessible from 
 */
window[GLOBAL_NAMESPACE].overlay = {};

/*  ----
 *  Namespace.overlays
 *  ----
 *	Storage for overlay instances in case of callback
 */
window[GLOBAL_NAMESPACE].overlays = [];

/*  ----
 *  Namespace.overlay.init
 *  ----
 *	Function that takes a passed class name, sans selector (i.e. overlay, not .overlay)
 *	and iterates over all instances of that class, building the custom DOM structure of
 *	the overlay and feeding them separately to functions
 *	
 *	A NOTE ABOUT THE HTML SETUP:
 *	
 *	<div class="*PASSED_CLASS*" type="*" carDur="*" carEase="*">
 *		<img src="*" caption="*"/> <-- FOR IMAGE
 *		*<img as above/>* <-- FOR CAROUSEL
 *	
 *		<img src="*" type="*" vidSrc="*" controls="*" autoplay="*" mime="*" caption="*"/> <-- FOR VIDEO
 *	
 *		<div class="*NAMESPACE*-image-expand">
 *			*EXPAND HTML*
 *		</div>
 *	</div>
 *	
 *	All objects which match the passed class are parsed. Objects can have these options:
 *		type : Currently, types are "carousel", "video" and "single". Defaults to "single";
 *		carDur : For "carousel" type overlays, duration of animation/transition in seconds. Passed to carousel creation.
 *		carEase : For "carousel" type overlays, easing. Passed to carousel creation.
 *	
 *	Children <img> tags of the main object will be made into overlay items. Frame children can have these options:
 *		src : Source for item image. For "single" type overlays, it will be both the overlay image and the item image.
 *		caption : Caption for overlay. For "carousel" type overlays, this will be passed to carousel creation.
 *	
 *	For "Video" type carousels, other items are available.
 *		type : REQUIRED. Can be "youtube" or "video".
 *		controls : Passed to Video creation, and to be used as video module.
 *		autoplay: True/False. If true, on expand the video plays. Defaults to "false".
 *		mime: If video type, mime of video.
 *	
 *	Lastly, the final div should have class of *NAMESPACE*-image-expand. *EXPAND HTML* can be any html to diplay as CTA.
 */
window[GLOBAL_NAMESPACE].overlay.init = function(_item){
	// Get all elements matching className
	this.init = function(item){
	
		console.log(item);
	
		item = document.getElementsByClassName(item);
		
		// If we haven't built the overlay frame, build it up
		
		if(document.getElementsByClassName(GLOBAL_NAMESPACE+"-overlay-overlay").length == 0){
			elem = document.createElement( 'div' );
			elem.className = GLOBAL_NAMESPACE+"-overlay-overlay";
			elem.innerHTML = "<div class='"+GLOBAL_NAMESPACE+"-overlay-overlay-close'>close</div></div>";
			document.body.appendChild(elem);
		}
		
		var overlayCode = "";
		var vidStart = false;
		var carStart = false;
		
		// Iterate matched elements
		
		for(var b = 0; b < item.length; b++){
				
				var test = item[b];
				
				// Make sure the item hasn't already been built
				
				if(window[GLOBAL_NAMESPACE].overlays.filter(function (img) { return img.obj == test }).length == 0){
				
					// Based on type, build the overlay item
				
					switch (item[b].getAttribute('type')){
						case 'carousel' :
							
							// carDur and carEase to pass duration and easing to carousel creation
						
							var carDur = "";
							if(item[b].hasAttribute('carDur')){
								carDur = 'durationInSeconds="'+item[b].getAttribute('carDur')+'"';
							}
						
							var carEas = "";
							if(item[b].hasAttribute('carEase')){
								carEas = 'easing="'+item[b].getAttribute('carEase')+'"';
							}
							
							// Always defaults to crossfade. We could add slider if we really wanted. Do we?
						
							overlayCode += '<div class="'+GLOBAL_NAMESPACE+'-overlay-item '+GLOBAL_NAMESPACE+'-carousel '+GLOBAL_NAMESPACE+'-overlay-carousel" type="crossfade" '+carEas+' '+carDur+'>';
							
							// Carousels need multiple <img> tags to create. This is where we iterate over them.
							
							var img = item[b].getElementsByTagName('img');
							for(var i = 0; i < img.length; i++){
								console.log(img[i].parentElement.className);
								console.log(item[b].className);
								if(item[b].className.indexOf(img[i].parentElement.className) != -1){
							
									// If carousel set carStart to true to set off carousel creation.
									
									carStart = true;
							
									var cap = "";
									if(img[i].hasAttribute('caption')){
										cap = img[i].getAttribute('caption');
									}
									overlayCode += '<div image="'+img[i].getAttribute('src')+'">'+cap+'</div>'
								}
							}
							overlayCode += '</div>';
							break;
							
						default :
							
							// Videos and Single Image overlays both work the same basic ways.
						
							var img = item[b].getElementsByTagName('img')[0];
							
							var cap = "";
							if(img.hasAttribute('caption')){
								cap = img.getAttribute('caption');
							}
							
							if(img.getAttribute('type') == "video" || img.getAttribute('type') == "youtube"){
							// If video set vidStart to true to set off carousel creation						
								vidStart = true;
								var controls = "";
								if(img.hasAttribute('controls') && (img.getAttribute('controls') == 'default' || img.getAttribute('controls') == 'custom')){
									controls = 'controls="'+img.getAttribute('controls')+'"';
								}
								if(img.getAttribute('type') == 'youtube'){
									overlayCode += '<div class="'+GLOBAL_NAMESPACE+'-overlay-item"><div class="'+GLOBAL_NAMESPACE+'-video '+GLOBAL_NAMESPACE+'-overlay-video" '+controls+' autoplay="none" type="youtube"><div class="'+GLOBAL_NAMESPACE+'-youtube" src="'+img.getAttribute('vidSrc')+'"></div></div><div class="'+GLOBAL_NAMESPACE+'-overlay-item-caption">'+cap+'</div></div>'
								} else {
									overlayCode += '<div class="'+GLOBAL_NAMESPACE+'-overlay-item"><div class="'+GLOBAL_NAMESPACE+'-video '+GLOBAL_NAMESPACE+'-overlay-video" '+controls+' autoplay="none" ><video ><source src="'+img.getAttribute('vidSrc')+'" type="'+img.getAttribute('mime')+'"></video></div><div class="'+GLOBAL_NAMESPACE+'-overlay-item-caption">'+cap+'</div></div>'
								}
							} else {
								overlayCode += '<div class="'+GLOBAL_NAMESPACE+'-overlay-item"><div class="'+GLOBAL_NAMESPACE+'-overlay-item-image" style="background-image:url('+img.getAttribute('src')+')"></div><div class="'+GLOBAL_NAMESPACE+'-overlay-item-caption">'+img.getAttribute('caption')+'</div></div>'
							}
							break;
							
					}
					
					// Send item to functions and save to .overlays
							
					var im = new window[GLOBAL_NAMESPACE].overlay.functions(item[b]);
					window[GLOBAL_NAMESPACE].overlays.push(im);
					
				}
		}
		
		// Pop those overlay items in the overlay
					
		document.getElementsByClassName(GLOBAL_NAMESPACE+"-overlay-overlay")[0].innerHTML += overlayCode;
		
		// video and carousel creation
		
		if(vidStart && window[GLOBAL_NAMESPACE].video){
			window[GLOBAL_NAMESPACE].video.init(GLOBAL_NAMESPACE+'-overlay-video');
		}
		if(carStart && window[GLOBAL_NAMESPACE].carousel){
			window[GLOBAL_NAMESPACE].carousel.init(GLOBAL_NAMESPACE+'-overlay-carousel');
		}
	};
	
	
	// Run that code
	this.init(_item);
	

}

/*  ----
 *  Namespace.overlay.functions
 *  ----
 *	Function that takes a passed object and sets it up to be a lovely overlay. Init makes it. Functions makes it work.
 */
window[GLOBAL_NAMESPACE].overlay.functions = function(_item){
	
	this.obj = _item;
	
	this.init = function(){
	
		var self = this;
		
		var transend = this.whichTransitionEvent();
		
		// No more events than original item click, so no secondary function to set up event listeners
	
		self.obj.addEventListener("click", function(){ 
			
				document.body.style.setProperty("overflow", "hidden", "important");
		
			// Find the right overlay item
		
			var ind = window[GLOBAL_NAMESPACE].overlays.indexOf(window[GLOBAL_NAMESPACE].overlays.filter(function (img) { return img.obj == self.obj })[0]);
			
			// Add "show" class to overlay and item
							
			var overlay = document.querySelector("."+GLOBAL_NAMESPACE+"-overlay-overlay");
			
			overlay.className += " "+GLOBAL_NAMESPACE+"-overlay-overlay-show";
			
			var ourItem = overlay.getElementsByClassName(GLOBAL_NAMESPACE+"-overlay-item")[ind];
			
			var ourOriginalImage = self.obj.querySelector("img");
			
			ourItem.className += " "+GLOBAL_NAMESPACE+"-overlay-overlay-item-show";
			
			// If a video item, and autoplay, play when "expand" cta clicked and overlay shows
			
			if((ourOriginalImage.getAttribute('type') == 'video' || ourOriginalImage.getAttribute('type') == 'youtube') && ourOriginalImage.getAttribute('autoplay') == 'true'){
				switch (ourOriginalImage.getAttribute('type')){
					case "youtube":
						var ytVid = window[GLOBAL_NAMESPACE].videos.filter(function (vids) { return vids.obj == ourItem.querySelector("."+GLOBAL_NAMESPACE+"-video") })[0];
						console.log(ytVid);
						ytVid.obj.player.seekTo(0);
						ytVid.obj.player.playVideo();
						break;
					default:
						var vid = ourItem.getElementsByTagName('video')[0];
						vid.currentTime = 0;
						vid.play();
						break;
				}
				
			}
			
			// Set up close click on open
			
			var overlay = document.querySelector("."+GLOBAL_NAMESPACE+"-overlay-overlay");
			var close = overlay.querySelector("."+GLOBAL_NAMESPACE+"-overlay-overlay-close");
			
			// Callback1 and Callback2 are for close links, so we can removeEventListener
			// because transitionEnd is SO finnicky. You can't do a general removeEventListener(transend)
			// call. It's THE WORST.
			
			var callback1 = function(){ 
				// remove close click event
				close.removeEventListener("click", callback1);
				
				// if a video, pause video
				
				if(ourOriginalImage.getAttribute('type') == 'video' || ourOriginalImage.getAttribute('type') == 'youtube'){
					switch (ourOriginalImage.getAttribute('type')){
						case "youtube":
							var ytVid = window[GLOBAL_NAMESPACE].videos.filter(function (vids) { return vids.obj == ourItem.querySelector("."+GLOBAL_NAMESPACE+"-video") })[0];
							ytVid.obj.player.pauseVideo();
							break;
						default:
							var vid = ourItem.getElementsByTagName('video')[0];
							vid.pause();
							break;
					}
					
				}
				
				// add a transend event for callback 2
				if(!transend){
					callback2();
					overlay.className += " "+GLOBAL_NAMESPACE+"-overlay-overlay-fade";
					document.body.style.setAttribute("overflow", "inherit");
				}else{
					overlay.addEventListener(transend, callback2);
					overlay.className += " "+GLOBAL_NAMESPACE+"-overlay-overlay-fade";
					document.body.style.setProperty("overflow", "inherit");
				}
				
				// add -fade class to overlay, which sets opacity to 0. With transition, it fades out.
				
				
			 };
			 
			var callback2 = function () {
					// remove overlay fadeout transition event
					if(transend){
						overlay.removeEventListener(transend, callback2);
					}
					// remove show classes
					var replacestring = "(^| )"+GLOBAL_NAMESPACE+"-overlay-overlay-show";
					overlay.className = overlay.className.replace(new RegExp(replacestring,'g'),"");
					var replacestring = "(^| )"+GLOBAL_NAMESPACE+"-overlay-overlay-fade";
					overlay.className = overlay.className.replace(new RegExp(replacestring,'g'),"");
					// remove item show classes
					var item = overlay.querySelector("."+GLOBAL_NAMESPACE+"-overlay-overlay-item-show");
					var replacestring = "(^| )"+GLOBAL_NAMESPACE+"-overlay-overlay-item-show";
					item.className = item.className.replace(new RegExp(replacestring,'g'),"");
				};
				
			// on close click, go to callback 1
			close.addEventListener("click", callback1);
		})
      
	};
    
    this.whichTransitionEvent = function(){
      var t;
      var el = document.createElement('fakeelement');
      var animations = {
        'animation':'transitionend',
        'OAnimation':'oTransitionEnd',
        'MozAnimation':'transitionend',
        'WebkitAnimation':'webkitTransitionEnd'
      }

      for(t in animations){
          if( el.style[t] !== undefined ){
              return animations[t];
          }
      }
    };
	
	this.init();
	

}

//window[GLOBAL_NAMESPACE].init = function() {
  // Lets do this thing
  //window[GLOBAL_NAMESPACE].overlay.init('t3s-image');
//}