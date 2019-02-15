/*  ----
 *  _overlay.js
 *  ----
 *  Developer: Tristan Marsh
 *  Crafted: Mar 3, 2016
 * 	Version: 1.0
 *  --
 *  Usage 
 *  In your _config.json file, include "overlay": "1.0" under "modules"
 */
 
 /*  ----
 *  Namespace.video
 *  ----
 *	Object that all video functions will be accessible from 
 */
window[GLOBAL_NAMESPACE].video = {};

/*  ----
 *  Namespace.video
 *  ----
 *	Storage for video instances in case of callback
 */
window[GLOBAL_NAMESPACE].videos = [];

/*  ----
 *  Namespace.video.init
 *  ----
 *	Function that takes a passed class name, sans selector (i.e. video, not .video)
 *	and iterates over all instances of that class, building the custom DOM structure and
 *	feeding them separately to functions
 *	
 *	A NOTE ABOUT THE HTML SETUP:
 *	
 *	<div class="*PASSED_CLASS*" type="*" controls="*" autoplay="*" *muted*>
 *		<video>
 *			<source src="*URL_TO_VIDEO*" type="*VIDEO_TYPE*">
 *		</video>
 *	</div>
 *	
 *	All objects which match the passed class are parsed. Objects can have these options:
 *		type : Currently, if set to “youtube”, will build as youtube.
 *		controls : Currently, allows "default", "custom" and "none". Defaults to "none".
 *		autoplay : Currently, allows "autoplay", "scroll" and "none". Defaults to "none".
 *		muted : If used, video starts muted.
 *	
 *	HTML SETUP FOR YOUTUBE:
 *	
 *	<div class="*PASSED_CLASS*" type="*" controls="*" autoplay="*" *muted*>
 *		<div class='*NAMESPACE*-youtube' src=“*”></div>
 *	</div>
 *	
 *	If type is set to "youtube" a child <div> with class '*NAMESPACE*-youtube’ is required.
 *	YouTube types work with all normal options. Youtube children require the src attribute,
 *	which should be the video identifier from YouTube.com (for instance: “aQVZaeEmkOA” for
 *	the video at https://www.youtube.com/watch?v=aQVZaeEmkOA)
 *	
 */
window[GLOBAL_NAMESPACE].video.init = function(_item){
	// Get all elements matching className
	this.init = function(item){
		// Iterating over matched elements
		
		item = document.getElementsByClassName(item);
		
		for(var b = 0; b < item.length; b++){
		
			var test = item[b];
			console.log(test);
			
			// Make sure we aren't reinitializing shit.
			
			if(window[GLOBAL_NAMESPACE].videos.filter(function (vid) { return vid.obj == test }).length == 0){
			
				var controls = "";
				var autoplay = "";
				var type = item[b].getAttribute("type");
			
			// Split at normal vs. "youtube" type
			
				switch(type){
					case "youtube" :
					
						// If YouTube type, we'll be initializing using the youtube player using the YouTube Vendor Code
						
						//set Control variable for YT.player
						
						var vidcontrols = 0;
						
						switch(item[b].getAttribute("controls")){
							case "default" :
								vidcontrols = 1;
								break;
							case "custom" :
								vidcontrols = 0;
						
								//If custom controls, lets build that.
						
								var muteText = "Mute";
								var playText = "Play";
								if(item[b].getAttribute("autoplay") == "autoplay"){
									playText = "Pause";
								}
								if(item[b].hasAttribute("muted")){
								    muteText = "Unmute"
							    }
								item[b].innerHTML += "<div class='"+GLOBAL_NAMESPACE+"-controls'><button class='"+GLOBAL_NAMESPACE+"-play'>"+playText+"</button><input class='"+GLOBAL_NAMESPACE+"-scan' type='range' value='0'><button class='"+GLOBAL_NAMESPACE+"-mute'>"+muteText+"</button><input type='range' class='"+GLOBAL_NAMESPACE+"-volume' min='0' max='1' step='0.1' value='1'><button class='"+GLOBAL_NAMESPACE+"-full-screen'>Full-Screen</button></div>";
								break;
							default: 
								break;
						}
						var vidloop = 0;
						
						if(item[b].getAttribute("loop") == "loop"){
								vidloop = 1;
						    	item[b].className += " "+GLOBAL_NAMESPACE+"-playing";
						}
						
						//set Autoplay variable for YT.player
						
						var vidauto = 0;
						
						if(item[b].getAttribute("autoplay") == "autoplay"){
								vidauto = 1;
						    	item[b].className += " "+GLOBAL_NAMESPACE+"-playing";
						} else {
								vidauto = 0;
						    	item[b].className += " "+GLOBAL_NAMESPACE+"-paused";
						}
						
						//set ID variable for YT.player
						
						var vidID = item[b].querySelector('.'+GLOBAL_NAMESPACE+'-youtube').getAttribute('src');
						
						
						item[b].player = new YT.Player(item[b].querySelector('.'+GLOBAL_NAMESPACE+'-youtube'), {
				            videoId: vidID,
				            playerVars: { 'autoplay': vidauto, 'controls': vidcontrols, 'loop': vidloop },
				            events: {
					          'onReady': function(event){
						
								  //If mute attribute, force mute
						
						          if(event.target.c.parentNode.hasAttribute("muted")){
						              event.target.mute();
								  }
					          }
					        }
				        });
						
						//set Mute classes
				        
				        if(item[b].hasAttribute("muted")){
						    item[b].className += " "+GLOBAL_NAMESPACE+"-muted";
					    } else {
						    item[b].className += " "+GLOBAL_NAMESPACE+"-unmute";
					    }
						
						break;
					default :
						switch(item[b].getAttribute("controls")){
							case "default" :
								var videos = item[b].getElementsByTagName("video");
								videos[0].setAttribute("controls", "true");
								break;
							case "custom" :
								
								//If custom controls, lets build that.
						
								var muteText = "Mute";
								var playText = "Play";
								if(item[b].getAttribute("autoplay") == "autoplay"){
									playText = "Pause";
								}
								if(item[b].hasAttribute("muted")){
								    muteText = "Unmute"
							    }
								item[b].innerHTML += "<div class='"+GLOBAL_NAMESPACE+"-controls'><button class='"+GLOBAL_NAMESPACE+"-play'>"+playText+"</button><input class='"+GLOBAL_NAMESPACE+"-scan' type='range' value='0'><button class='"+GLOBAL_NAMESPACE+"-mute'>"+muteText+"</button><input type='range' class='"+GLOBAL_NAMESPACE+"-volume' min='0' max='1' step='0.1' value='1'><button class='"+GLOBAL_NAMESPACE+"-full-screen'>Full-Screen</button></div>";
								
								break;
							default: 
								var videos = item[b].getElementsByTagName("video");
								break;
						}
						
						if(item[b].getAttribute("loop") == "loop"){
								var videos = item[b].getElementsByTagName("video");
								videos[0].setAttribute("loop", "true");
						}
					
					// Add autoplay is normal. 
					
						if(item[b].getAttribute("autoplay") == "autoplay"){
								var videos = item[b].getElementsByTagName("video");
								videos[0].setAttribute("autoplay", "true");
						    	item[b].className += " "+GLOBAL_NAMESPACE+"-playing";
						} else {
								var videos = item[b].getElementsByTagName("video");
						    	item[b].className += " "+GLOBAL_NAMESPACE+"-paused";
						}
						
					// Add mutes. 
					
						if(item[b].hasAttribute("muted")){
								var videos = item[b].getElementsByTagName("video");
								videos[0].muted = true
							    item[b].className += " "+GLOBAL_NAMESPACE+"-muted";
						} else {
							    item[b].className += " "+GLOBAL_NAMESPACE+"-unmute";
						}
						break;
				}
							
				
				
						
			// Pass the individual item to functions and save for callback. 
			
				var vi = new window[GLOBAL_NAMESPACE].video.functions(item[b]);
				window[GLOBAL_NAMESPACE].videos.push(vi);
				console.log(vi);
				console.log(window[GLOBAL_NAMESPACE].videos);
			}
		}
	};
	
	
	// Run that code
	this.init(_item);
	

}

/*  ----
 *  Namespace.videos.functions
 *  ----
 *	Function that takes a passed object and sets it up to be a lovely video. Init makes it. Functions makes it work.
 *	Mainly just there for the custom controls and scroll play.
 */
window[GLOBAL_NAMESPACE].video.functions = function(_item){
	
	this.obj = _item;
	this.type = this.obj.getAttribute("type");
	this.waypoint = [];
	this.YTTimeUpdater;
	
	
	this.init = function(){
	
		// If autoplay is scroll, lets do that thing
		
		if(this.obj.hasAttribute('autoplay') && this.obj.getAttribute('autoplay') == 'scroll'){
			
			this._setupWaypoints();
			
		}
	
      // go-go-gadget-eventHandlers! << This is Seths joke. I approve.
      
		if(this.obj.hasAttribute('controls') && this.obj.getAttribute('controls') == 'custom'){
			this._setupHandlers();
		}
	
		
      
	};
	
	this._setupWaypoints = function() {
		
			// Setup waypoint and push to this.waypoint in case it needs to be handled later.
	
			// StartVid is the waypoint at the TOP of the video. If you're scrolling down, it plays, if you're scrolling up, it pauses
			
			self = this;
			
			var startVid = new Waypoint({
				  element: this.obj,
				  handler: function(direction) {
					    if (this.element.className.indexOf(GLOBAL_NAMESPACE+"-paused") == -1 && direction == "up"){
					    	this.element.className += " "+GLOBAL_NAMESPACE+"-paused";
					    	var replacestring = "(^| )"+GLOBAL_NAMESPACE+"-playing";
							this.element.className = this.element.className.replace(new RegExp(replacestring,'g'),"");
							if(this.element.hasAttribute('controls') && this.element.getAttribute('controls') == 'custom'){
								this.element.querySelector("."+GLOBAL_NAMESPACE+"-controls").querySelector("."+GLOBAL_NAMESPACE+"-play").innerHTML = "Play";
							}
							switch(this.element.getAttribute("type")){
								case "youtube" :
									if(self.obj.player.pauseVideo){
										self.obj.player.pauseVideo();
									} else {
										self.obj.player.addEventListener('onReady',function(){
											self.obj.player.pauseVideo();
										})
									}
									break;
								default :
								    var vid = this.element.getElementsByTagName("video")[0];
									vid.pause();
									break;
							}
					    } else if (this.element.className.indexOf(GLOBAL_NAMESPACE+"-paused") != -1 && direction == "down"){
					    	this.element.className += " "+GLOBAL_NAMESPACE+"-playing";
					    	var replacestring = "(^| )"+GLOBAL_NAMESPACE+"-paused";
							this.element.className = this.element.className.replace(new RegExp(replacestring,'g'),"");
							if(this.element.hasAttribute('controls') && this.element.getAttribute('controls') == 'custom'){
								this.element.querySelector("."+GLOBAL_NAMESPACE+"-controls").querySelector("."+GLOBAL_NAMESPACE+"-play").innerHTML = "Pause";
							}
							switch(this.element.getAttribute("type")){
								case "youtube" :
									if(self.obj.player.playVideo){
										self.obj.player.playVideo();
									} else {
										self.obj.player.addEventListener('onReady',function(){
											self.obj.player.playVideo();
										})
									}
									break;
								default :
								    var vid = this.element.getElementsByTagName("video")[0];
									vid.play();
									break;
							}
					    }
				  },
				  offset: '70%'
				});
			this.waypoint.push(startVid);
	
			// StopVid is the waypoint at the BOTTOM of the video. If you're scrolling up, it plays, if you're scrolling down, it pauses
			
			var stopVid = new Waypoint({
				  element: this.obj,
				  handler: function(direction) {
				  		if (this.element.className.indexOf(GLOBAL_NAMESPACE+"-paused") == -1 && direction == "down"){
					    	this.element.className += " "+GLOBAL_NAMESPACE+"-paused";
					    	var replacestring = "(^| )"+GLOBAL_NAMESPACE+"-playing";
							this.element.className = this.element.className.replace(new RegExp(replacestring,'g'),"");
							if(this.element.hasAttribute('controls') && this.element.getAttribute('controls') == 'custom'){
								this.element.querySelector("."+GLOBAL_NAMESPACE+"-controls").querySelector("."+GLOBAL_NAMESPACE+"-play").innerHTML = "Play";
							}
							switch(this.element.getAttribute("type")){
								case "youtube" :
									if(self.obj.player.pauseVideo){
										self.obj.player.pauseVideo();
									} else {
										self.obj.player.addEventListener('onReady',function(){
											self.obj.player.pauseVideo();
										})
									}
									break;
								default :
								    var vid = this.element.getElementsByTagName("video")[0];
									vid.pause();
									break;
							}
					    } else if (this.element.className.indexOf(GLOBAL_NAMESPACE+"-paused") != -1 && direction == "up"){
					    	this.element.className += " "+GLOBAL_NAMESPACE+"-playing";
					    	var replacestring = "(^| )"+GLOBAL_NAMESPACE+"-paused";
							this.element.className = this.element.className.replace(new RegExp(replacestring,'g'),"");
							if(this.element.hasAttribute('controls') && this.element.getAttribute('controls') == 'custom'){
								this.element.querySelector("."+GLOBAL_NAMESPACE+"-controls").querySelector("."+GLOBAL_NAMESPACE+"-play").innerHTML = "Pause";
							}
							switch(this.element.getAttribute("type")){
								case "youtube" :
									if(self.obj.player.playVideo){
										self.obj.player.playVideo();
									} else {
										self.obj.player.addEventListener('onReady',function(){
											self.obj.player.playVideo();
										})
									}
									break;
								default :
								    var vid = this.element.getElementsByTagName("video")[0];
									vid.play();
									break;
							}
					    }
				  },
				  offset: function() {
				    return -(this.element.clientHeight*.7);
				  }
				});
			this.waypoint.push(stopVid);
	}
	
	this._setupHandlers = function() {

		// Basic Event Handlers

		var self = this;
		var videoHolder = this.obj;
			
		var videoControls = videoHolder.querySelector("."+GLOBAL_NAMESPACE+"-controls");
		
		var playButton = videoControls.querySelector("."+GLOBAL_NAMESPACE+"-play");
		var muteButton = videoControls.querySelector("."+GLOBAL_NAMESPACE+"-mute");
		var fullScreenButton = videoControls.querySelector("."+GLOBAL_NAMESPACE+"-full-screen");
		
		var seekBar = videoControls.querySelector("."+GLOBAL_NAMESPACE+"-scan");
		var volumeBar = videoControls.querySelector("."+GLOBAL_NAMESPACE+"-volume");
		
		playButton.addEventListener("click", function(){self._playButton()});
		muteButton.addEventListener("click", function(){self._muteButton()});
		fullScreenButton.addEventListener("click", function() {self._fullScreenClick()});
		seekBar.addEventListener("change", function() {self.seekBarChange()});
		
		this._setupSeekbars();
		
		volumeBar.addEventListener("change", function() {self._volumeBarChange()});
		
    };
	
	this._playButton = function(){
		
		var videoControls = this.obj.querySelector("."+GLOBAL_NAMESPACE+"-controls");
		
		var playButton = videoControls.querySelector("."+GLOBAL_NAMESPACE+"-play");
		
		// If PAUSED class, set to play and play, else set to paused and paused
		
		if (this.obj.className.indexOf(GLOBAL_NAMESPACE+"-paused") != -1) {
		  	this.obj.className += " "+GLOBAL_NAMESPACE+"-playing";
		    var replacestring = "(^| )"+GLOBAL_NAMESPACE+"-paused";
			this.obj.className = this.obj.className.replace(new RegExp(replacestring,'g'),"");
			switch(this.type){
				case "youtube" :
					this.obj.player.playVideo();
					break;
				default :
					var video = this.obj.getElementsByTagName("video")[0];
					video.play();
					break;
			}
		    playButton.innerHTML = "Pause";
		  } else {
		  	this.obj.className += " "+GLOBAL_NAMESPACE+"-paused";
		    var replacestring = "(^| )"+GLOBAL_NAMESPACE+"-playing";
			this.obj.className = this.obj.className.replace(new RegExp(replacestring,'g'),"");
		    switch(this.type){
				case "youtube" :
					console.log(this.obj.player);
					this.obj.player.pauseVideo();
					break;
				default :
					var video = this.obj.getElementsByTagName("video")[0];
					video.pause();
					break;
			}
		    playButton.innerHTML = "Play";
		  }
	}
	
	this._muteButton = function(){
			
		var videoControls = this.obj.querySelector("."+GLOBAL_NAMESPACE+"-controls");
		
		var muteButton = this.obj.querySelector("."+GLOBAL_NAMESPACE+"-mute");
		
		var volumeBar = this.obj.querySelector("."+GLOBAL_NAMESPACE+"-volume");
		
		// If MUTED class, set to mute and mute, else set to unmute and unmute
		
	  if (this.obj.className.indexOf(GLOBAL_NAMESPACE+"-unmute") != -1) {
	  	switch(this.type){
			case "youtube" :
				this.obj.player.mute();
				break;
			default :
				var video = this.obj.getElementsByTagName("video")[0];
				video.muted = true;
				break;
		}
	    this.obj.className += " "+GLOBAL_NAMESPACE+"-muted";
	    var replacestring = "(^| )"+GLOBAL_NAMESPACE+"-unmute";
		this.obj.className = this.obj.className.replace(new RegExp(replacestring,'g'),"");
	    muteButton.innerHTML = "Unmute";
	    // Make sure the volume bar reflects the mute
	    volumeBar.value = 0;
	  } else {
	  	switch(this.type){
			case "youtube" :
				this.obj.player.unMute();
				break;
			default :
				var video = this.obj.getElementsByTagName("video")[0];
				video.muted = false;
				break;
		}
	    this.obj.className += " "+GLOBAL_NAMESPACE+"-unmute";
	    var replacestring = "(^| )"+GLOBAL_NAMESPACE+"-muted";
		this.obj.className = this.obj.className.replace(new RegExp(replacestring,'g'),"");
	    muteButton.innerHTML = "Mute";
	    // Make sure the volume bar reflects the unmute
	  	switch(this.obj.getAttribute("type")){
			case "youtube" :
				volumeBar.value = this.obj.player.getVolume()/100;
				break;
			default :
				var video = this.obj.getElementsByTagName("video")[0];
				volumeBar.value = video.volume;
				break;
		}
	    
	  }
	}
	
	this._fullScreenClick = function(){
	    // Make fullscreen
		switch(this.type){
			case "youtube" :
			    if (this.obj.requestFullscreen) {
			      this.obj.requestFullscreen();
			    } else if (this.obj.mozRequestFullScreen) {
			      this.obj.mozRequestFullScreen();
			    } else if (this.obj.webkitRequestFullscreen) {
			      this.obj.webkitRequestFullscreen();
			    }
				break;
			default :
				var video = this.obj.getElementsByTagName("video")[0];
			    if (video.requestFullscreen) {
			      video.requestFullscreen();
			    } else if (video.mozRequestFullScreen) {
			      video.mozRequestFullScreen();
			    } else if (video.webkitRequestFullscreen) {
			      video.webkitRequestFullscreen();
			    }
				break;
		}
	}
	
	this.seekBarChange = function(){
	
		// If you're moving the seekbar, update the video
			
		var videoControls = this.obj.querySelector("."+GLOBAL_NAMESPACE+"-controls");
		
		var seekBar = this.obj.querySelector("."+GLOBAL_NAMESPACE+"-scan");
		
		switch(this.type){
			case "youtube" :
				var time = this.obj.player.getDuration() * (seekBar.value / 100);
				this.obj.player.seekTo(time);
				break;
			default :
				var video = this.obj.getElementsByTagName("video")[0];
				var time = video.duration * (seekBar.value / 100);
				video.currentTime = time;
				break;
		}
	}
	
	this._volumeBarChange = function(){
	
		// If you're moving the volumebar, update the volume
			
		var videoControls = this.obj.querySelector("."+GLOBAL_NAMESPACE+"-controls");
		
		var volumeBar = videoControls.querySelector("."+GLOBAL_NAMESPACE+"-volume");
		
		switch(this.type){
			case "youtube" :
				this.obj.player.setVolume(volumeBar.value*100);
				break;
			default :
				var video = this.obj.getElementsByTagName("video")[0];
				video.volume = volumeBar.value;
				break;
		}
	}
	
	this._setupSeekbars = function() {
	
		// Beyond the basic seekbar functionality, there's a lot of other bullshit. I've lumped it here.
	
		var self = this;
			
		var videoControls = this.obj.querySelector("."+GLOBAL_NAMESPACE+"-controls");
		
		var seekBar = videoControls.querySelector("."+GLOBAL_NAMESPACE+"-scan");
	
		// If YouTube, theres NO TIMEUPDATE >:|
		// So what we're doing is looking for a state change to attach a setInterval to watch the current time stamp
		// The reason we wait for onStateChange is because this code is run before the class instance is pushed
		// to window[GLOBAL_NAMESPACE].videos, so we need to wait a minute (microsecond)
		
		// If a regular video thing, hey, we got TimeUpdate, so lets use the easy thing
		
		switch(this.type){
			case "youtube" :
				this.obj.player.addEventListener('onStateChange',function(){
					if(self.YTTimeUpdater == undefined){
						var save = window[GLOBAL_NAMESPACE].videos.indexOf(self);
						self.YTTimeUpdater = setInterval(function(){window[GLOBAL_NAMESPACE].videos[save].updateTime()}, 100);
					}
				})
				break;
			default :
				video.addEventListener("timeupdate", function() {
					var video = self.obj.getElementsByTagName("video")[0];
					var value = (100 / video.duration) * video.currentTime;
					seekBar.value = value;
				});
				break;
		}
		
		seekBar.addEventListener("mousedown", function() {
		
			// If YouTube, we need to remove the setInterval so it doesn't fight your moving the slider
		
			// If regular video, just pause the video
		
			switch(self.type){
				case "youtube" :
					clearInterval(self.YTTimeUpdater);
					break;
				default :
					if(self.obj.className.indexOf(GLOBAL_NAMESPACE+"-playing") != 0){
						var video = self.obj.getElementsByTagName("video")[0];
						video.pause();
					}
					break;
			}
		  
		});
		
		seekBar.addEventListener("mouseup", function() {
		
			// If YouTube, reinstate the video interval
		
			// If regular video, just play the video
			
			switch(self.type){
				case "youtube" :
					var save = window[GLOBAL_NAMESPACE].videos.indexOf(self);
					self.YTTimeUpdater = setInterval(function(){window[GLOBAL_NAMESPACE].videos[save].updateTime()}, 100);
					break;
				default :
					if(self.obj.className.indexOf(GLOBAL_NAMESPACE+"-playing") != 0){
						var video = self.obj.getElementsByTagName("video")[0];
						video.play();
					}
					break;
			}
		  
		});
	}
    
    this.updateTime = function(){
    
    	// For YouTube videos, this is the Interval callback. Set the scroll bar to current time.
    
		var value = (100 / this.obj.player.getDuration()) * this.obj.player.getCurrentTime();
		this.obj.querySelector("."+GLOBAL_NAMESPACE+"-controls").querySelector("."+GLOBAL_NAMESPACE+"-scan").value = value;
	}
	
	this.init(_item);
	

}


  // Lets do this thing. Run this code to init.
  // window[GLOBAL_NAMESPACE].video.init('t3s-video');
