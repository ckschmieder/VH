# Video Module #
---

# Info #


Developer: Tristan Marsh
Crafted: Mar 3, 2016
Version: 1.0
 
# Getting Started #
In your _config.json file, include “video”: "1.0" under "modules”. This will include the needed scss and js for the carousel to work. Read more to find out how to use it.

## Dependencies ##
1. Waypoints. Built with version 4.0.0. In your _config.json file, include “waypoints”: "4.0.0" under "modules”. Be careful if Waypoints has been updated. Test before assuming newer versions work.
2. YouTube iFrame API. Pulled the code from youtube. Someone should check regularly if this needs to be updated.

## How it Works ##

In your HTML, videos are structured as such:

	<div class="*PASSED_CLASS* *NAMESPACE*-video" type=“*” controls="*" autoplay="*" *muted*>
		<video>
			<source src="*URL_TO_VIDEO*" type="*VIDEO_TYPE*">
		</video>
	</div>

or:

	<div class="*PASSED_CLASS* *NAMESPACE*-video" controls="*" autoplay="*" *muted*>
		<div class='*NAMESPACE*-youtube' src=“*”></div>
	</div>


And the code is called through

	window[GLOBAL_NAMESPACE].video.init(‘*PASSED_CLASS*’);

The passed class could be *NAMESPACE*-video if you wanted, as all videos should have that class. Passed_class should NOT include selector. No periods or hashes, please. When called, the code builds and adds functionality to your videos based on the options included in your HTML. These options are:

	type : Currently, if set to “youtube”, will build as youtube.
	controls : Currently, allows "default", "custom" and "none". Defaults to "none".
	autoplay : Currently, allows "autoplay", "scroll" and "none". Defaults to "none".
	muted : If used, video starts muted.

YouTube videos can be included by using the type attribute set to “youtube” and a child <div> with class '*NAMESPACE*-youtube’. YouTube types work with all normal options. Youtube children require the src attribute, which should be the video identifier from YouTube.com (for instance: “aQVZaeEmkOA” for the video at https://www.youtube.com/watch?v=aQVZaeEmkOA)

Once window[GLOBAL_NAMESPACE].video.init has been called, feel free to call it again should new carousels need to be created. It will not double up and cause errors. So, let’s say you have a video classed .myVideo that you’ve initialized. Lets now say you pull new code through ajax, and it includes another .myVideo. Running window[GLOBAL_NAMESPACE].carousel.init(‘myVideo’) will skip your already built video and only create the new one.

Among all of the control classes (*GLOBAL_NAMESPACE*-play for the play button, *GLOBAL_NAMESPACE*-controls for the controls container), there are a number of event classes one can use to style after the fact. They are:

	*GLOBAL_NAMESPACE*-playing : set to container when video is playing
	*GLOBAL_NAMESPACE*-paused : set to container when video is paused
	*GLOBAL_NAMESPACE*-muted : set to container when video is muted
	*GLOBAL_NAMESPACE*-unmute : set to container when video is not muted

They are applied to the container div, not the video itself.

## Versions ##

1.0 - Initial Version. Hopefully there’s nothing too broken.