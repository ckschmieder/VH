<?php 
/**
 * The template for displaying product search results.
 *
 */

get_header(); ?>

	<article class="template-content">
	
		<!-- <div class="row nopaddtop">
			<?php if(get_field('hero_image') != 0) { ?>
			<div class="hero-block" style="background-image: url(<?php echo get_field('hero_image')['url']; ?>)">
				<div class="cta">
					<h2>The Drift Collection</h2>
				</div>
			</div>
			<?php }; ?>
			
		</div>
 -->
		<div class="row">
			<h1 class="page-title search-page-title"><?php printf( esc_html__( 'Search Results for: %s' ), '<span class="search-term">"' . get_search_query() . '"</span>' ); ?></h1>
			
			<div class="category-block">
	
		<!-- <div>This is the results page.</div>
		<div>This is the results page.</div>
		<div>This is the results page.</div>

		.wrapper .main-content .template-content .row .category-block .category-list .category-item .image -->

		<div class="search-page-form" id="ss-search-page-form"><?php get_search_form(); ?></div>

		<div></div>

		<!-- <div class="category-list display alph">
		 
	        <?php if ( have_posts() ) : ?>
	 
	            
	 
	            <?php /* Start the Loop */ ?>
	            <?php while ( have_posts() ) : the_post(); ?>
	            
	            <div class="category-item <?php echo get_field('product_type'); ?>" data-id="<?php the_ID(); ?>">
	            	<a href="<?php echo the_permalink(); ?>"><div class="image" style="background-image: url(<?php 
	            		$images = get_field('product_images');
	            		echo $images[0]['sizes']['medium'];
	            	 ?>)"></div>
	            	<p><?php the_title(); ?></p>
	            	</a>
	            </div>
	 
	            <?php endwhile; ?>
	 
	            <?php //the_posts_navigation(); ?>
	 
	        <?php else : ?>

	        	<div>No products found.</div>
	 
	            <?php //get_template_part( 'template-parts/content', 'none' ); ?>
	 
	        <?php endif; ?>

	    </div> -->

	    <div class="category-list display alph two">
		 
	        <?php

	        if( isset( $_REQUEST['search'] ) ){
	            $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
	            $args = array(
	                'paged'           => $paged,
	                'posts_per_page'  => 16, //or any number
	                'post_type'       => 'products', //or your custom post type if needed
	                's'               => $_REQUEST[ 'search' ]
	            );
	        }

	        // The Query
	        $the_query = new WP_Query( $args );

	        // The Loop
	        if ( $the_query->have_posts() ) {
	        	echo '<ul>';
	        	while ( $the_query->have_posts() ) {
	        		$the_query->the_post();
	        		echo '<li>' . get_the_title() . '</li>';
	        	}
	        	echo '</ul>';
	        	/* Restore original Post Data */
	        	wp_reset_postdata();
	        } else {
	        	// no posts found
	        }

	        ?>

	    </div>

	
		<div class="row last-row">
			
			<div class="insta-block">
				<p>Follow us on Instagram</p>
				<div class="insta-list" id="insta-list">
				</div>
			</div>
			
		</div>

<?php get_footer(); ?>


