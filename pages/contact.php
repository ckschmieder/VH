<?php 
/**
 * Template Name: Both Site Contact
 */

get_header(); ?>

	<article class="template-content <?php if ($post->post_parent == 20){ echo "int"; } ?>">
	
		<div class="row nopaddtop">
			
			<div class="hero-block ">
				<div class="cta">
					<h2>5 Columbus Circle<br/> New York, NY 10019</h2>
					<a href="mailto:info@victoriahagan.com"><h2>Info @ VictoriaHagan.com</h2></a>
					<h2>212-888-1178</h2>
				</div>
			</div>
			
		</div>
	
		<div class="row">
			
			<div class="contact-block">
				<input type="text" class="contact-input fn-input" name="f_name" value="First Name"/>
				<input type="text" class="contact-input ln-input" name="l_name" value="Last Name"/>
				<input type="text" class="contact-input em-input" name="email" value="Email"/>
				<input type="text" class="contact-input sb-input" name="subject" value="Subject"/>
				<textarea class="contact-input tx-input">Please type your message here...</textarea>
				<button>Submit</button>
			</div>
			
		</div>
	
		<div class="row last-row">
			
			<div class="insta-block">
				<p>Follow us on Instagram</p>
				<div class="insta-list" id="insta-list"
				</div>
			</div>
			
		</div>

<?php get_footer(); ?>


