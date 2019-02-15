<?php 
/**
 * Template Name: Interiors Press
 */

get_header(); ?>

	<article class="template-content">
	
		<div class="row nopaddtop">
			
			<div class="hero-block <?php echo get_field('main_image_text_color'); ?>" style="background-image: url(<?php echo get_field('main_image')['url']; ?>)">
				<div>
					<h2><?php echo get_field('main_text'); ?></h2>
					<h4><?php echo get_field('main_attribution'); ?></h4>
				</div>
			</div>
			
		</div>
	
		<div class="row">
			
			<div class="notable-press-block">
				<h3>Notable Press</h3>
				<?php $images = get_field("notable_press");
					foreach ($images as $image) {?>
					<img class="image" src="<?php echo $image['image']['sizes']['medium']; ?>">
				<?php } ?>
			</div>
			
			<?php $clips = get_field("press_clips");
				foreach ($clips as $clip) {?>
				<div class="press-quote-block">
					<div class="image" style="background-image: url(<?php echo $clip['image']['sizes']['large']; ?>)"></div>
					
					<div class="text">
						<?php if( $clip['clip'] ): ?><p><?php echo $clip['clip']; ?></p><?php endif; ?>
						<h3><?php if( $clip['attribution'] ): ?>- <i><?php echo $clip['attribution']; ?></i><?php endif; ?><?php if( $clip['date'] ): ?><?php echo " ," . $clip['date']; ?><?php endif; ?></h3>
					</div>
					
				</div>
			<?php } ?>
			
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


