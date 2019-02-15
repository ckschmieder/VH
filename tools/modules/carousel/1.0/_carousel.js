/*  ----
 *  _carousel.js
 *  ----
 *  Developer: Tristan Marsh, Seth Wieder
 *  Crafted: Mar 1, 2016
 * 	Version: 1.0
 *  --
 *  Usage 
 *  In your _config.json file, include "carousel": "1.0" under "modules"
 */


/*  ----
 *  Namespace.carousel
 *  ----
 *	Object that all carousel functions will be accessible from 
 */
window[GLOBAL_NAMESPACE].carousel = {};

/*  ----
 *  Namespace.carouseling
 *  ----
 *	Storage for carousel instances in case of callback
 */
window[GLOBAL_NAMESPACE].carouseling = [];

/*  ----
 *  Namespace.carousel.init
 *  ----
 *	Function that takes a passed class name, sans selector (i.e. carousel, not .carousel)
 *	and iterates over all instances of that class, building the custom DOM structure and
 *	feeding them separately to functions
 *	
 *	A NOTE ABOUT THE HTML SETUP:
 *	
 *	<div class="*PASSED_CLASS*" frameWidth="*" easing="*" durationInSeconds="*" type="*" *breadcrumbs*>
 *		<div link="*" image="*">*HTML FOR CAPTION/OVERLAY*</div>
 *	</div>
 *	
 *	All objects which match the passed class are parsed. Objects can have these options:
 *		type : Currently, types are "slider" and "crossfade". Defaults to "slider";
 *		frameWidth : For "Slider" type carousels, how wide the frames are based as percentage of container width. Defaults to 75.
 *		easing : Easing. Defaults to "linear".
 *		durationInSeconds : duration of animation/transition in seconds. Defaults to 1.
 *	
 *	Every child of the main object will be made into frames for the carousel. Frame children can have these options:
 *		link : frame link. Will not be included if not used.
 *		target : blank or self. Defaults to "self".
 *		image : main image.
 *	The inner html of the Frame child will be made into a caption overlay. All HTML tags are welcome!
 */
window[GLOBAL_NAMESPACE].carousel.init = function(_item){
	// Get all elements matching classname
	this.init = function(item){
		
		item = document.getElementsByClassName(item);
		// Iterating over matched elements
		for(var b = 0; b < item.length; b++){
		
			var test = item[b];
			
			if(window[GLOBAL_NAMESPACE].carouseling.filter(function (car) { return car.obj == test }).length == 0){
				
			
				// Get all immediate children, and save some basic numbers for later math
				var childrenConstruction = item[b].children;
				var totalLength = childrenConstruction.length+3;
				var totalPercent = 100/(totalLength);
				
				// Set frameWidth math for slider. Default is 75%.
				var frameWidth = 75;
				if (item[b].hasAttribute("frameWidth")){
					frameWidth = parseInt(item[b].getAttribute("frameWidth"));
				}
				
				// ConstructionHTML is the HTML for our frames. Here we create it as well as
				// "FirstBlock", code that replicates the LAST frame in a slider carousel and
				// pops it in at the beginning, so we see the last frame peeking out  to the left
				// when we're on the first frame
				var constructionHTML = "";
				var firstBlock = "";
				if(childrenConstruction[childrenConstruction.length-1].hasAttribute("link")){
					firstBlock += '<a href="'+childrenConstruction[childrenConstruction.length-1].getAttribute("link")+'" target="';
					var target = "_self";
					if(childrenConstruction[childrenConstruction.length-1].hasAttribute("target") && (childrenConstruction[childrenConstruction.length-1].getAttribute("target") == 'self' || childrenConstruction[childrenConstruction.length-1].getAttribute("target") == 'blank')){
						target = childrenConstruction[childrenConstruction.length-1].getAttribute("target");
					}
					firstBlock += target+'">';
				}
				firstBlock += '<div class="'+GLOBAL_NAMESPACE+'-carousel-item" data-slide-index="-1" style="width:'+totalPercent+'%;">';
		        firstBlock += '<div class="'+GLOBAL_NAMESPACE+'-carousel-image" style="background-image:url('+childrenConstruction[childrenConstruction.length-1].getAttribute("image")+')"></div>';
		        firstBlock += '<div class="'+GLOBAL_NAMESPACE+'-carousel-item-caption">';
		        firstBlock += childrenConstruction[childrenConstruction.length-1].innerHTML;
		        firstBlock += '</div></div>';
				if(childrenConstruction[childrenConstruction.length-1].hasAttribute("link")){
					firstBlock += '</a>';
				}
		        
		        // Switch for transition type. If they put in gobbledegook it defaults to slider
				if (item[b].hasAttribute("type")){
					switch (item[b].getAttribute("type")){
						// Slider just pops in that first block code
						case "slider" :
							constructionHTML += firstBlock;
						break;
						// Cross fade ignores some math we previously set. It was only for Slider after all.
						case "crossfade" :
							frameWidth = 100;
							totalPercent = 100;
							item[b].className += " "+GLOBAL_NAMESPACE+"-crossfade";
						break;
						// Default is Slider. I mentioned that, right?
						default :
							item[b].setAttribute("type", "slider");
							constructionHTML += firstBlock
						break;
					}
					
				} else {
					// If they didn't even declare a type, default is slider. But you knew that. You catch on quick.
					constructionHTML += '<div class="'+GLOBAL_NAMESPACE+'-slider" style="width: '+(frameWidth*(totalLength))+'%;transform:translateX(-'+(1.5*totalPercent)+'%);-webkit-transform:translateX(-'+(1.5*totalPercent)+'%);">';
					// Set it to have a type, because they're lazy and we need to know.
					item[b].setAttribute("type", "slider");
					constructionHTML += firstBlock;
				}
				
				// DotsHTML makes the arrows and dots. I seem to remember that we need the breadcrumbs for something.
				// Maybe I'm wrong, but instead of not including the dots, I prefer to just hide them. But they're still there!
				var dotsHTML = '<div class="'+GLOBAL_NAMESPACE+'-carousel-btn '+GLOBAL_NAMESPACE+'-carousel-btn-l" ></div><div class="'+GLOBAL_NAMESPACE+'-carousel-btn '+GLOBAL_NAMESPACE+'-carousel-btn-r"></div>';
				if (item[b].hasAttribute("breadcrumbs")){
					dotsHTML += '<div class="'+GLOBAL_NAMESPACE+'-carousel-dots">';
				} else {
					// They're still there!
					dotsHTML += '<div class="'+GLOBAL_NAMESPACE+'-carousel-dots" style="display:none">';
				}
				
				// Okay, now we iterate over all them children and build our actual frames. We set width, image, and caption info.
				for(var i = 0; i < childrenConstruction.length; i++){
					if(childrenConstruction[i].hasAttribute("link")){
						constructionHTML += '<a href="'+childrenConstruction[i].getAttribute("link")+'" target="';
						var target = "_self";
						if(childrenConstruction[i].hasAttribute("target") && (childrenConstruction[i].getAttribute("target") == 'self' || childrenConstruction[i].getAttribute("target") == 'blank')){
							target = childrenConstruction[i].getAttribute("target");
						}
						constructionHTML += target+'">';
					}
			        constructionHTML += '<div class="'+GLOBAL_NAMESPACE+'-carousel-item" data-slide-index="'+i+'" style="width:'+totalPercent+'%">';
			        constructionHTML += '<div class="'+GLOBAL_NAMESPACE+'-carousel-image" style="background-image:url('+childrenConstruction[i].getAttribute("image")+')"></div>';
			        constructionHTML += '<div class="'+GLOBAL_NAMESPACE+'-carousel-item-caption">';
			        constructionHTML += childrenConstruction[i].innerHTML;
			        constructionHTML += '</div></div>';
			        
					if(childrenConstruction[i].hasAttribute("link")){
						constructionHTML += '</a>';
					}
			        //We also add a dot to the dotHTML. Gotta have them dots.
			        dotsHTML += '<div class="'+GLOBAL_NAMESPACE+'-carousel-dot" data-slide-index="'+i+'"></div>';
			      }
			      
			    // If it's a slider carousel, we also need two more frames. The first and second frame over again. Why?
			    // We just do. Okay, here's why. So you can always scroll left or right and it's infinite. When you scroll
			    // left from frame 0 it jumps to this SECOND frame zero, you still see frame 1 to your right, and it scrolls
			    // left to the last frame. If you scroll right from the last frame, it scrolls right to the duplicate frame 0
			    // then jumps to real frame 0. Magic.
			    
			    // DONT DELETE THIS THINKING IT DOES NOTHING. I've already fixed that a million times.
			    
		        if (item[b].getAttribute("type") == "slider"){
					if(childrenConstruction[0].hasAttribute("link")){
						constructionHTML += '<a href="'+childrenConstruction[0].getAttribute("link")+'" target="';
						var target = "_self";
						if(childrenConstruction[0].hasAttribute("target") && (childrenConstruction[0].getAttribute("target") == 'self' || childrenConstruction[0].getAttribute("target") == 'blank')){
							target = childrenConstruction[0].getAttribute("target");
						}
						constructionHTML += target+'">';
					}
					constructionHTML += '<div class="'+GLOBAL_NAMESPACE+'-carousel-item" data-slide-index="'+childrenConstruction.length+'" style="width:'+totalPercent+'%">';
			        constructionHTML += '<div class="'+GLOBAL_NAMESPACE+'-carousel-image" style="background-image:url('+childrenConstruction[0].getAttribute("image")+')"></div>';
			        constructionHTML += '<div class="'+GLOBAL_NAMESPACE+'-carousel-item-caption">';
			        constructionHTML += childrenConstruction[0].innerHTML;
			        constructionHTML += '</div></div>';
			        if(childrenConstruction[0].hasAttribute("link")){
						constructionHTML += '</a>';
					}
					if(childrenConstruction[1].hasAttribute("link")){
						constructionHTML += '<a href="'+childrenConstruction[1].getAttribute("link")+'" target="';
						var target = "_self";
						if(childrenConstruction[1].hasAttribute("target") && (childrenConstruction[1].getAttribute("target") == 'self' || childrenConstruction[1].getAttribute("target") == 'blank')){
							target = childrenConstruction[1].getAttribute("target");
						}
						constructionHTML += target+'">';
					}
					constructionHTML += '<div class="'+GLOBAL_NAMESPACE+'-carousel-item" data-slide-index="1" style="width:'+totalPercent+'%">';
			        constructionHTML += '<div class="'+GLOBAL_NAMESPACE+'-carousel-image" style="background-image:url('+childrenConstruction[1].getAttribute("image")+')"></div>';
			        constructionHTML += '<div class="'+GLOBAL_NAMESPACE+'-carousel-item-caption">';
			        constructionHTML += childrenConstruction[1].innerHTML;
			        constructionHTML += '</div></div>';
					constructionHTML += '</div>';
					if(childrenConstruction[1].hasAttribute("link")){
						constructionHTML += '</a>';
					}
				}
			    dotsHTML += '</div>';
			    
			    // Replace construction code with new code, and push this bad boy to functions, and save it to carouseling.
			    
			    item[b].innerHTML = constructionHTML + dotsHTML;
				var ca = new window[GLOBAL_NAMESPACE].carousel.functions(item[b]);
				window[GLOBAL_NAMESPACE].carouseling.push(ca);
			}
		}
	};
	
	
	// Run that code
	this.init(_item);
	

}

/*  ----
 *  Namespace.carousel.functions
 *  ----
 *	Function that takes a passed object and sets it up to be a lovely carousel. Init makes it. Functions makes it work.
 */
window[GLOBAL_NAMESPACE].carousel.functions = function(_item){
	
	this.obj = _item;
    this.slide_index;
    this.slide_length;
    this.slide_current_obj;
	this.transition;
	this.type;
	this.transitions = ["ease","linear","ease-in","ease-out","ease-in-out","step-start","step-end"];
	
	
	this.init = function(){
	
		// Set up the saved transition information for Slider types, and set master animation
		// info for crossfade types.
		var easing = "linear";
		if (this.obj.hasAttribute("easing")&&this.transitions.indexOf(this.obj.getAttribute("easing")) != -1){
			easing = this.obj.getAttribute("easing");
		}
		var duration = "1s";
		if (this.obj.hasAttribute("durationInSeconds")){
			duration = this.obj.getAttribute("durationInSeconds")+"s";
		}
		this.transition = "all "+duration+" "+easing;
		this.type = this.obj.getAttribute("type");
		
		if (this.type == "crossfade"){
			this.obj.style['animation-duration'] = duration;
			this.obj.style['animation-timing-function'] = easing;
		}
		
      // start at the beginning. A lot of this code is cribbed from Seth Wieder. http://i0.kym-cdn.com/photos/images/newsfeed/000/234/739/fa5.jpg
      this.slide_index =  0;
      // starting obj
      this._updateCurrentSlideObj();
      this.slide_current_obj.className += ' '+GLOBAL_NAMESPACE+'-active';
      // store length
      switch (this.type){
      	case "slider":
      		// Slider length is bigger because of those frames we added. Remember? Up there ^^ Like line 105 or whatever.
      		this.slide_length = this.obj.querySelectorAll("."+GLOBAL_NAMESPACE+"-carousel-item").length - 3;
      		break;
      	case "crossfade":
      		this.slide_length = this.obj.querySelectorAll("."+GLOBAL_NAMESPACE+"-carousel-item").length;
      		break;
      }
      // animation end event to use ALSO TRANSITION EVENT
      this.animationEnd = this.whichAnimationEvent();
      this.transitionEnd = this.whichTransitionEvent();
      // go-go-gadget-eventHandlers! << This is Seths joke. I approve.
      this._setupHandlers();
      // add swipe detection
      if (this.obj.hasAttribute("swipe")){
	      this._swipeSetup();
	  }
	};
	this._setupHandlers = function() {

      var self = this;

	  // Pretty self explanitory.

      var btn_L = this.obj.querySelector("."+GLOBAL_NAMESPACE+"-carousel-btn."+GLOBAL_NAMESPACE+"-carousel-btn-l");
      btn_L.addEventListener("mousedown", function(){ if(self.obj.className.indexOf('preventDoubleTap')==-1){self._slideLeft()} });

      var btn_R = this.obj.querySelector("."+GLOBAL_NAMESPACE+"-carousel-btn."+GLOBAL_NAMESPACE+"-carousel-btn-r");
      btn_R.addEventListener("mousedown", function(){ if(self.obj.className.indexOf('preventDoubleTap')==-1){self._slideRight()} });

      var dots = this.obj.querySelectorAll("."+GLOBAL_NAMESPACE+"-carousel-dot");
      for(var i = 0; i < dots.length; i++){
        dots[i].addEventListener("mousedown", function(){ if(self.obj.className.indexOf('preventDoubleTap')==-1){self._slideJump(this.getAttribute("data-slide-index"))} });
      }
      
      // So, Transition events, for some reason, have a hard time being removed. So, we can't add and remove them
      // like the Animation events. Dang. But we're only moving one thing, so, you know, not so bad.
      
      if (this.type == "slider"){
      	  if (this.transitionEnd){
	      this.obj.querySelector("."+GLOBAL_NAMESPACE+"-slider").addEventListener(this.transitionEnd, function(e) {
	      
	      	// Oh, Transition events also bubble up like all get out. Don't play that game, keep them
	      	// where they belong, or else the opacity changes of the frames and captions will screw
	      	// everything up.
	      	
	      	if(e.target.className.indexOf(GLOBAL_NAMESPACE+'-slider')!=-1){
	      	
		      	//  TURN THAT TRANSITION OFF. That way we can be SNEAKY and...
		      	
			    self.obj.querySelector("."+GLOBAL_NAMESPACE+"-slider").style['transition'] = "none";
		        if(self.slide_index == self.slide_length){
		        
		        	// If we need to, jump you from a duplicate frame to the REAL first frame, if coming from the last.
		        	
			        self.obj.querySelector("."+GLOBAL_NAMESPACE+"-slider").style['transform'] = "translateX(-"+(1.5*(100/(self.slide_length+3)))+"%)";
			        self.obj.querySelector("."+GLOBAL_NAMESPACE+"-slider").style['-webkit-transform'] = "translateX(-"+(1.5*(100/(self.slide_length+3)))+"%)";
			        var replacestring = "(^| )"+GLOBAL_NAMESPACE+"-active";
					self.obj.querySelector("."+GLOBAL_NAMESPACE+"-carousel-item[data-slide-index='"+self.slide_index+"']").className = self.obj.querySelector("."+GLOBAL_NAMESPACE+"-carousel-item[data-slide-index='"+self.slide_index+"']").className.replace(new RegExp(replacestring,'g'),"");
			        self.slide_index = 0;
		        }
		        
		        // Remove DoubleTap and update
		        self.obj.className = self.obj.className.replace(new RegExp('(^| )'+'preventDoubleTap','g'),"");
				self._updateCurrentSlideObj();
			}
	      });
	      } else {
		    self.obj.querySelector("."+GLOBAL_NAMESPACE+"-slider").style['transition'] = "none";
	        if(self.slide_index == self.slide_length){
	        
	        	// If we need to, jump you from a duplicate frame to the REAL first frame, if coming from the last.
	        	
		        self.obj.querySelector("."+GLOBAL_NAMESPACE+"-slider").style['transform'] = "translateX(-"+(1.5*(100/(self.slide_length+3)))+"%)";
		        self.obj.querySelector("."+GLOBAL_NAMESPACE+"-slider").style['-webkit-transform'] = "translateX(-"+(1.5*(100/(self.slide_length+3)))+"%)";
		        var replacestring = "(^| )"+GLOBAL_NAMESPACE+"-active";
				self.obj.querySelector("."+GLOBAL_NAMESPACE+"-carousel-item[data-slide-index='"+self.slide_index+"']").className = self.obj.querySelector("."+GLOBAL_NAMESPACE+"-carousel-item[data-slide-index='"+self.slide_index+"']").className.replace(new RegExp(replacestring,'g'),"");
		        self.slide_index = 0;
	        }
	        
	        // Remove DoubleTap and update
	        self.obj.className = self.obj.className.replace(new RegExp('(^| )'+'preventDoubleTap','g'),"");
			self._updateCurrentSlideObj();
	      }
      } 

    };

    this._updateCurrentSlideDot = function () {
      // update dots
      var dots = this.obj.querySelectorAll("."+GLOBAL_NAMESPACE+"-carousel-dot");
      for(var i = 0; i < dots.length; i++){
        if(i == this.slide_index){
          dots[this.slide_index].className += " "+GLOBAL_NAMESPACE+"-active";
        } else {
		  var replacestring = "(^| )"+GLOBAL_NAMESPACE+"-active";
          dots[i].className = dots[i].className.replace(new RegExp(replacestring,'g'),"");
        }
      }

    };

    this._updateCurrentSlideObj = function() {
      // get current slide from DOM
      this.slide_current_obj = this.obj.querySelector("."+GLOBAL_NAMESPACE+"-carousel-item[data-slide-index='"+this.slide_index+"']");

      // keep dots concurrent with slides
      this._updateCurrentSlideDot();
    };

    /*

      Sliding Controls

    */

    // Main movement/animation fn. Applies next/prev & active classes to correct .carousel-item's if we're doing a cross fade thing, or applies transformX on the slider for sliders.
    this._slide = function(dir) {
    
    console.log(dir);
      
      // add preventDoubleTap to prevent double press
      var carousel = this.obj;
      carousel.className += " preventDoubleTap";
      
      
      switch (this.type){
      	case "slider":
	  	  // Get Slider
		  slider = carousel.querySelector("."+GLOBAL_NAMESPACE+"-slider");
	      
	      // We still do Active class, so we get those nice fades
	      var current_slide = this.slide_current_obj;
		  var replacestring = "(^| )"+GLOBAL_NAMESPACE+"-active";
	      current_slide.className = current_slide.className.replace(new RegExp(replacestring,'g'),"");
	      this.obj.querySelector("."+GLOBAL_NAMESPACE+"-carousel-item[data-slide-index='"+this.slide_length+"']").className = this.obj.querySelector("."+GLOBAL_NAMESPACE+"-carousel-item[data-slide-index='"+this.slide_length+"']").className.replace(new RegExp(replacestring,'g'),"");
	      
	      // We gotta make sure we add Active class to the first frame if we're gonna jump back.
	      if(this.slide_index == this.slide_length){
		      var target_slide = this.obj.querySelector("."+GLOBAL_NAMESPACE+"-carousel-item[data-slide-index='0']");
		      target_slide.className += ' '+GLOBAL_NAMESPACE+'-active';
		  }
		  // Add Active to the next frame so we see that fade in
	      var target_slide = this.obj.querySelector("."+GLOBAL_NAMESPACE+"-carousel-item[data-slide-index='"+this.slide_index+"']");
	      target_slide.className += ' '+GLOBAL_NAMESPACE+'-active';
	      
	      // Move to the new frame
	      slider.style['transform'] = "translateX(-"+((this.slide_index+1.5)*(100/(this.slide_length+3)))+"%)";
	      slider.style['-webkit-transform'] = "translateX(-"+((this.slide_index+1.5)*(100/(this.slide_length+3)))+"%)";
	      slider.style['transition'] = this.transition;
	      slider.style['-webkit-transition'] = this.transition;
	      break;
	    case "crossfade":
	      // This is all Seth. Good job.
	      var class_for_current = dir == "_R" ? GLOBAL_NAMESPACE+'-prev' : GLOBAL_NAMESPACE+'-next';
	      var class_for_target = dir == "_R" ? GLOBAL_NAMESPACE+'-next' : GLOBAL_NAMESPACE+'-prev';
	
	      // anim out current
	      var current_slide = this.slide_current_obj;
	      // add
	      current_slide.className += ' ' + class_for_current;
	      console.log(current_slide.className);
		  var replacestring = "(^| )"+GLOBAL_NAMESPACE+"-active";
	      current_slide.className = current_slide.className.replace(new RegExp(replacestring,'g'),"");
	      // remove
	      var remove = function() {
	        current_slide.className = current_slide.className.replace(new RegExp('(^| )'+class_for_current,'g'),"");
	        if(this.animationEnd){
		        current_slide.removeEventListener(this.animationEnd, remove);
	        }
	      };
	      current_slide.addEventListener(this.animationEnd, remove);
	      if(!this.animationEnd){
	      	remove();
	      }
	
	      // anim in next
	      var target_slide = this.obj.querySelector("."+GLOBAL_NAMESPACE+"-carousel-item[data-slide-index='"+this.slide_index+"']");
	      // add
	      target_slide.className += ' ' + class_for_target;
	      target_slide.className += ' '+GLOBAL_NAMESPACE+'-active';
	      // remove
	      var remove = function() {
	        target_slide.className = target_slide.className.replace(new RegExp('(^| )'+class_for_target,'g'),"");
	        // remove top level class
	        carousel.className = carousel.className.replace(new RegExp('(^| )'+'preventDoubleTap','g'),"");
	        if(this.animationEnd){
		        target_slide.removeEventListener(this.animationEnd, remove);
	        }
	      };
	      current_slide.addEventListener(this.animationEnd, remove);
	      if(!this.animationEnd){
	      	remove();
	      }
	
	      // update current slide
	      this._updateCurrentSlideObj();
	      break;
	  }

    };

    // slide Carousel one item to _L
    this._slideLeft = function() {
		switch (this.type){
	      	case "slider":
			  save = window[GLOBAL_NAMESPACE].carouseling.indexOf(this);
		      if(this.slide_index == 0){
		        this.slide_index = this.slide_length - 1;
			    this.obj.querySelector("."+GLOBAL_NAMESPACE+"-slider").style['transition'] = "none";
		        this.obj.querySelector("."+GLOBAL_NAMESPACE+"-carousel-item[data-slide-index='"+this.slide_length+"']").className += " "+GLOBAL_NAMESPACE+"-active";
		        this.obj.querySelector("."+GLOBAL_NAMESPACE+"-slider").style['transform'] = "translateX(-"+((this.slide_length+1.5)*(100/(this.slide_length+3)))+"%)";
		        this.obj.querySelector("."+GLOBAL_NAMESPACE+"-slider").style['-webkit-transform'] = "translateX(-"+((this.slide_length+1.5)*(100/(this.slide_length+3)))+"%)";
		        var current_slide = this.slide_current_obj;
				var replacestring = "(^| )"+GLOBAL_NAMESPACE+"-active";
		        current_slide.className = current_slide.className.replace(new RegExp(replacestring,'g'),"");
		        setTimeout(function(){window[GLOBAL_NAMESPACE].carouseling[save]._slide("_L")}, 50)
		      } else {
		        this.slide_index -= 1;
				this._slide("_L");
		      }
		      break;
		    case "crossfade":
		      if(this.slide_index == 0){
		        this.slide_index = this.slide_length - 1;
		      } else {
		        this.slide_index -= 1;
		      }
		      this._slide("_L");
		      break;
		}
      
    };

    // slide Carousel one item to _R
    this._slideRight = function() {
		switch (this.type){
	      	case "slider":
		      this.slide_index += 1;
		      this._slide("_R");
		      break;
		    case "crossfade":
		      if(this.slide_index == this.slide_length - 1){
		        this.slide_index = 0;
		      } else {
		        this.slide_index += 1;
		      }
		      this._slide("_R");
		      break;
		}
    };

    // Go directly to slide param:'jumpTo'. Animating in correct direction.
    this._slideJump = function(jumpTo) {
      jumpTo = parseInt(jumpTo);
      if (jumpTo > this.slide_index) {
        this.slide_index = jumpTo;
        this._slide("_R");
      } else {
        this.slide_index = jumpTo;
        this._slide("_L");
      }
    };

    /*

      Swipe Detection

    */
    this._swipeSetup = function() {

      var carousel = this,
          touchsurface = this.obj,
              startX,
              startY,
              dist,
              threshold = 150, //required min distance traveled to be considered swipe
              allowedTime = 400, // maximum time allowed to travel that distance
              elapsedTime,
              startTime;

      touchsurface.addEventListener('touchstart', function(e){
          var touchobj = e.changedTouches[0];
          dist = 0;
          startX = touchobj.pageX;
          startY = touchobj.pageY;
          startTime = new Date().getTime(); // record time when finger first makes contact with surface
          // e.preventDefault();
      });

      // touchsurface.addEventListener('touchmove', function(e){
      //     e.preventDefault(); // prevent scrolling when inside DIV
      // });

      touchsurface.addEventListener('touchend', function(e){
          console.log("touchend");
          var touchobj = e.changedTouches[0];
          dist = touchobj.pageX - startX; // get total dist traveled by finger while in contact with surface
          elapsedTime = new Date().getTime() - startTime; // get time elapsed
          // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
          var swipeBool = (elapsedTime <= allowedTime && Math.abs(dist) >= threshold && Math.abs(touchobj.pageY - startY) <= 100)

          if(swipeBool)
            carousel._handleSwipe(dist);

          // e.preventDefault()
      }, false)
    };

    this._handleSwipe = function (dist){
        if (dist <= 0)
            this._slideRight();
        else {
            this._slideLeft();
        }
    },

    /*

      Utilities

    */

    /* From Modernizr. Get supported event for CSS animation animationEnd */
    this.whichAnimationEvent = function(){
      var t;
      var el = document.createElement('fakeelement');
      var animations = {
        'animation':'animationend',
        'OAnimation':'oAnimationEnd',
        'MozAnimation':'animationend',
        'WebkitAnimation':'webkitAnimationEnd'
      }

      for(t in animations){
          if( el.style[t] !== undefined ){
              return animations[t];
          }
      }
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

  // Add this code to your window[GLOBAL_NAMESPACE].init to run!
  // window[GLOBAL_NAMESPACE].carousel.init('t3s-carousel');