<?php 
/**
 */

get_header(); ?>

	<article class="template-content">
	
		<div class="row nopaddtop">
			<?php if(get_field('hero_image') != 0) { ?>
			<div class="hero-block" style="background-image: url(<?php echo get_field('hero_image')['url']; ?>)">
				<div class="cta">
					<h2>The Drift Collection</h2>
				</div>
			</div>
			<?php }; ?>
			
		</div>
	
		<div>This is the results page.</div>
		<div>This is the results page.</div>
		<div>This is the results page.</div>
		<div class="search-page-form" id="ss-search-page-form"><?php get_search_form(); ?></div>
		 
	        <?php if ( have_posts() ) : ?>
	 
	            <header class="page-header">
	                <span class="search-page-title"><?php printf( esc_html__( 'Search Results for (collections search.php): %s', stackstar ), '<span>' . get_search_query() . '</span>' ); ?></span>
	            </header><!-- .page-header -->
	 
	            <?php /* Start the Loop */ ?>
	            <?php while ( have_posts() ) : the_post(); ?>
	            <span class="search-post-title"><?php the_title(); ?></span>
	            <span class="search-post-excerpt"><?php the_excerpt(); ?></span>
	            <span class="search-post-link"><a href="<?php the_permalink(); ?>"><?php the_permalink(); ?></a></span>
	 
	            <?php endwhile; ?>
	 
	            <?php //the_posts_navigation(); ?>
	 
	        <?php else : ?>
	 
	            <?php //get_template_part( 'template-parts/content', 'none' ); ?>
	 
	        <?php endif; ?>

	
		<div class="row last-row">
			
			<div class="insta-block">
				<p>Follow us on Instagram</p>
				<div class="insta-list" id="insta-list">
				</div>
			</div>
			
		</div>

<?php get_footer(); ?>


