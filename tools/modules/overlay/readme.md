# Overlay Module #
---

# Info #


Developer: Tristan Marsh
Crafted: Mar 7, 2016
Version: 1.0
 
# Getting Started #
In your _config.json file, include “overlay”: "1.0" under "modules”. This will include the needed scss and js for the carousel to work. Read more to find out how to use it.

## Dependencies ##
1. Carousel Module. If carousels are used, this module is required. Check Carousel Module for Carousel Dependencies.
2. Video Module. If videos are used, this module is required. Check Video Module for Video Dependencies.

## How it Works ##

In your HTML, overlays are structured as such:

	<div class="*PASSED_CLASS*" type="*" carDur="*" carEase="*">
		<img src="*" caption="*"/> <-- FOR IMAGE
		*<img as above/>* <-- FOR CAROUSEL
	
		<img src="*" type="*" vidSrc="*" controls="*" autoplay="*" mime="*" caption="*"/> <-- FOR VIDEO
	
		<div class="*NAMESPACE*-image-expand">
			*EXPAND HTML*
		</div>
	</div>
	
All objects which match the passed class are parsed. Objects can have these options:
	type : Currently, types are "carousel", "video" and "single". Defaults to "single";
	carDur : For "carousel" type overlays, duration of animation/transition in seconds. Passed to carousel creation.
	carEase : For "carousel" type overlays, easing. Passed to carousel creation.
	
Children <img> tags of the main object will be made into overlay items. Frame children can have these options:
	src : Source for item image. For "single" type overlays, it will be both the overlay image and the item image.
	caption : Caption for overlay. For "carousel" type overlays, this will be passed to carousel creation.
	
For "Video" type carousels, other items are available.
	type : REQUIRED. Can be "youtube" or "video".
	controls : Passed to Video creation, and to be used as video module.
	autoplay: True/False. If true, on expand the video plays. Defaults to "false".
	mime: If video type, mime of video.
	
Lastly, the final div should have class ofNAMESPACE*-image-expand.EXPAND HTML* can be any html to diplay as CTA.

It is called by:

	window[GLOBAL_NAMESPACE].overlay.init(‘*PASSED_CLASS*’);

## Versions ##

1.0 - Initial Version. Hopefully there’s nothing too broken.