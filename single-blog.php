<?php
/**
 * The Template for displaying all single blog posts
**/
get_header(); ?>

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

			<?php
				$classes = array(
					'template-content',
					'blog-entry',
				);
			?>
			<article id="post-<?php the_ID(); ?>" <?php post_class( $classes ); ?>>
				<?php 
				/* grab the url for the full size featured image */
        		$featured_img_url = get_the_post_thumbnail_url('full');
        		?>
				<div class="blog-hero" style="background-image: url(<?php the_post_thumbnail_url( 'full' ); ?>);">
					<!-- <?php the_post_thumbnail();	?> -->
					
				</div>
				<div class="content-wrap">

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

					
				</div>
			</article><!-- #post-## -->

			<div class="content-wrap" style="padding-top: 0;">

				<?php
				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;

				// Previous/next post navigation.
				the_post_navigation( array(
					'next_text' => '<span class="meta-nav" aria-hidden="true">' . __( '', 'vh' ) . '</span> ' .
						'<span class="screen-reader-text">' . __( 'Next post:', 'vh' ) . '</span> ' .
						'<span class="post-title">%title</span>',
					'prev_text' => '<span class="meta-nav" aria-hidden="true">' . __( '', 'vh' ) . '</span> ' .
						'<span class="screen-reader-text">' . __( '', 'vh' ) . '</span> ' .
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