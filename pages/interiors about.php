<?php 
/**
 * Template Name: Interiors About
 */

get_header(); ?>

	<article class="template-content">
	
		<div class="row nopaddtop">
			
			<div class="hero-block <?php echo get_field('main_image_text_color'); ?>" style="background-image: url(<?php echo get_field('main_image')['url']; ?>)">
				<div>
					<h2><?php echo get_field('main_quote'); ?></h2>
					<h4><?php echo get_field('main_attribution'); ?></h4>
				</div>
			</div>
			
		</div>
	
		<div class="row">
			
			<div class="about-content-block">
				<div class="image" style="background-image: url(<?php echo get_field('about_image')['sizes']['large']; ?>)"></div>
				<div class="text">
					<h2>Meet Victoria</h2>
					<hr/>
					<?php echo get_field('pull_quote'); ?>
				</div>
			</div>
			
			<div class="about-columns-block">
				<?php if ( have_posts() ) : while ( have_posts() ) : the_post();
					the_content();
				endwhile;endif; ?>
			</div>
			
		</div>
	
		<div class="row">
			
			<div class="book-block">
				<div class="text">
					<div class="book-cover" style="background-image: url(<?php echo get_field('book_cta_image', 2)['sizes']['large']; ?>)">
					</div>
					<h4><?php echo get_field('book_name', 2); ?></h4>
					<h3><?php echo get_field('book_quote', 2); ?></h3>
					<hr/>
					<p><?php echo get_field('book_color_quote', 2); ?></p>
					<a href="<?php echo get_field('book_link', 2); ?>" target="_blank"><button>purchase book</button></a>
				</div>
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


