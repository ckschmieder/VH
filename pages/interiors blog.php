<?php 
/**
 * Template Name: Interiors Blog
 */

get_header(); ?>

	<style type="text/css">
		.wrapper .main-content .template-content .row {
			width: 90%;
			max-width: 1200px!important;
			margin: 0 auto!important;
		}
		.wrapper .main-content .template-content .row.last-row {
			max-width: 100%!important;
			width: 100%!important;
		}

		.row img {
			width: 100%;
			max-width: 100%;
			height: auto;
		}
		.row.welcome {
			text-align: center;
			font-size: 1.2rem;
			max-width: 650px;
			margin: 0 auto;
			line-height: 1.7;
		}
		.welcome-text {
			
		}
		.blog-entry {
			margin-bottom: 3em;
		}
		.blog-entry-title {
			font-family: 'TextaAlt', sans-serif;
			text-transform: uppercase;
			font-weight: 400;
			font-style: normal;
			color: #4f4f4f;
			font-size: 21px;
			text-align: center;
		}
		.blog-entry p {
			font-family: "Open Sans", sans-serif;
			font-size: 16px;
			line-height: 1.7;
		}
		.blog-entry-container .blog-entry p {
			text-align: center;
		}
		.more-btn {
		    text-align: center;
		    margin-top: 2em;
		}
		a.more-link {
		    background: #333c42;
		    color: white!important;
		    padding: .5em 1.2em;
		    line-height: 1;
		    text-transform: uppercase;
		    font-weight: normal;
		    font-size: .95rem;
		    font-family: 'TextaAlt', sans-serif;
		    letter-spacing: 2px;
		}
		@media screen and (min-width: 550px) {
			.blog-entry-container {
				display: flex;
				flex-flow: row wrap;
			}
			.blog-entry {
				flex: 1 1 50%;
				padding: 0 2%;
			}
		}
		@media screen and (min-width: 900px) {
			.blog-entry {
				flex: 1 1 33.33%;
			}
		}
	</style>
	
	<article class="template-content">
	
		<div class="row nopaddtop welcome">
			<!-- /wp-content/themes/vh/images/v_vh_kit_4.jpg -->
			<div style="width: 100%;"><img src='<?php the_post_thumbnail_url( 'full' ); ?>' style="width: 100%;max-width: 100%;height:auto;"></div>
			<?php
			// Start the loop.
			while ( have_posts() ) : the_post();

				the_content();

			// End the loop.
			endwhile;
			?>
		</div>

		<div class="row">

			<?php

			$args = array( 'post_type' => 'blog', 'posts_per_page' => 10 );
			$loop = new WP_Query( $args );

			  echo '<div class="blog-entry-container">';

			while ( $loop->have_posts() ) : $loop->the_post();

			  echo '<div class="blog-entry">';
			  echo '<h2 class="blog-entry-title">';
			  the_title();
			  echo '</h2>';
			  echo '<div class="entry-content">';
			  if ( has_post_thumbnail() ) : ?>
			      <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
			          <?php the_post_thumbnail(); ?>
			      </a>
			  <?php endif;
			  // the_content();
			  the_excerpt();
			  ?>
			  <div class="more-btn"><a class="more-link" href="<?php the_permalink(); ?>">Read More</a></div>
			  <?php

			  echo '</div>';
			  echo '</div>';
			endwhile;
			  echo '</div>';

			?>
		</div>
	
		<!-- <div class="row last-row">
			
			<div class="insta-block">
				<p>Follow us on Instagram</p>
				<div class="insta-list" id="insta-list"></div>
			</div>
			
		</div> -->

		<!-- <footer>
			<div class="footer-holder">
				<a href="/"><div class="logo "></div></a>
		
				<?php wp_nav_menu( array('menu' => 'Interiors Footer Menu') );?>
				<div class="socials">
					<a href="https://www.instagram.com/victoriahaganinteriors/" target="_blank"><div class="social insta ">
						<object type="image/svg+xml" data="/wp-content/themes/vh/images/instag.php?c=f1f1f1"></object>
					</div></a>
				</div>
			</div>
			
		</footer> -->

<?php get_footer(); ?>


