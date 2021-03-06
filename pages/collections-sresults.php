<?php 
/**
 * Template Name: Collections Product sresults
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
	
		<div class="row">

			
			<div class="category-block">


				<nav class="collections-product-nav category-selector">
					<div class="furniture" value="furniture">Furniture</div>
					<div class="rugs" value="rugs">Rugs</div>
					<div class="textiles" value="textiles">Textiles</div>
				</nav>


				<!-- Search and Search Results -->
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
				    	// echo '<ul>';
				    	while ( $the_query->have_posts() ) {
				    		$the_query->the_post();

				    		?>
				    		<div class="category-item <?php echo get_field('product_type'); ?>" data-id="<?php the_ID(); ?>">
				    			<a href="<?php echo the_permalink(); ?>"><div class="image" style="background-image: url(<?php 
				    				$images = get_field('product_images');
				    				echo $images[0]['sizes']['medium'];
				    			 ?>)"></div>
				    			<p><?php the_title(); ?></p>
				    			</a>
				    		</div>
				    		<?php
				  


				    	}
				    	// echo '</ul>';
				    	/* Restore original Post Data */
				    	wp_reset_postdata();
				    } else {
				    	// no posts found
				    	?>
				    	<div>No products found. collections-sresults template</div>					
					    <?php
				    }

				    ?>

				</div>
				<div class="loading"></div>
				<!-- END Search and Search Results -->



				<!--<div class="category-list display rand"></div>-->

				<!--<div class="category-list display rand"></div>-->
				<!-- <div class="category-list furniture alph">
					<?php 
					if ( have_posts() ) : ?>
					    
					
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

						<div>No products found. Sresults template</div>
					
					    <?php //get_template_part( 'template-parts/content', 'none' ); ?>
					
					<?php endif; ?>
				</div> -->
				
			</div>


			
		</div>

		
	
		<div class="row">
			
			<div class="custom-block">
				<h2>The Ultimate Customization</h2>
				<p>Every item is personalized to your every need. Take a look at what we offer for customized styles!</p>
				<?php if( strlen(get_field('customization', 36))) { ?>
					<a href="<?php echo get_field('customization', 36); ?>"><button>See Customizing Options</button></a>
				<?php } ?>
			</div>
			
		</div>
	
		<div class="row last-row">
			
			<div class="insta-block">
				<p>Follow us on Instagram</p>
				<div class="insta-list" id="insta-list">
				</div>
			</div>
			
		</div>

<?php get_footer(); ?>


