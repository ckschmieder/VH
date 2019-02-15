<?php
/**
 * The Template for displaying all single posts
**/
get_header(); ?>

<style type="text/css">
		.content-wrap {
			width: 90%;
			max-width: 960px!important;
			margin: 0 auto!important;
			padding: 40px 0;
		}
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
		}
		.welcome-text {
			max-width: 650px;
			margin: 0 auto;
			line-height: 1.7;
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
			text-align: center;
			font-size: 16px;
			line-height: 1.7;
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

<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php
		// Start the loop.
		while ( have_posts() ) : the_post();

			/*
			 * Include the post format-specific template for the content. If you want to
			 * use this in a child theme, then include a file called called content-___.php
			 * (where ___ is the post format) and that will be used instead.
			 */
			?>
			<div class="content-wrap">
			<article id="post-<?php the_ID(); ?>" <?php post_class( 'template-content' ); ?>>
				
					<?php
						// Post thumbnail.
						the_post_thumbnail();
					?>

					<div class="entry-header">
						<?php
							if ( is_single() ) :
								the_title( '<h1 class="entry-title">', '</h1>' );
							else :
								the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' );
							endif;
						?>
					</div><!-- .entry-header -->

					<div class="entry-content">
						<?php
							/* translators: %s: Name of current post */
							the_content( sprintf(
								__( 'Continue reading %s', 'vh' ),
								the_title( '<span class="screen-reader-text">', '</span>', false )
							) );

							wp_link_pages( array(
								'before'      => '<div class="page-links"><span class="page-links-title">' . __( 'Pages:', 'vh' ) . '</span>',
								'after'       => '</div>',
								'link_before' => '<span>',
								'link_after'  => '</span>',
								'pagelink'    => '<span class="screen-reader-text">' . __( 'Page', 'vh' ) . ' </span>%',
								'separator'   => '<span class="screen-reader-text">, </span>',
							) );
						?>
					</div><!-- .entry-content -->

					<?php
						// Author bio.
						if ( is_single() && get_the_author_meta( 'description' ) ) :
							get_template_part( 'author-bio' );
						endif;
					?>

					
			
			</article><!-- #post-## -->


			<?php
			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

			// Previous/next post navigation.
			the_post_navigation( array(
				'next_text' => '<span class="meta-nav" aria-hidden="true">' . __( 'Next', 'vh' ) . '</span> ' .
					'<span class="screen-reader-text">' . __( 'Next post:', 'vh' ) . '</span> ' .
					'<span class="post-title">%title</span>',
				'prev_text' => '<span class="meta-nav" aria-hidden="true">' . __( 'Previous', 'vh' ) . '</span> ' .
					'<span class="screen-reader-text">' . __( 'Previous post:', 'vh' ) . '</span> ' .
					'<span class="post-title">%title</span>',
			) );

			?>
			</div>

			<?php

		// End the loop.
		endwhile;
		?>

		</main><!-- .site-main -->
	</div><!-- .content-area -->

<?php get_footer(); ?>