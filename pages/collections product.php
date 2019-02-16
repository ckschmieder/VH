<?php 
/**
 * Template Name: Collections Product
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
			<!-- <div class="product-search">
				
			</div> -->
			
			<div class="category-block">
				<!-- <div class="category-selector">category
					<select>
					  <option value="all">All</option>
					  <option value="furniture">Furniture</option>
					  <option value="casegoods">Casegoods</option>
					  <option value="upholstery">Upholstery</option>
					  <option value="textiles">Textiles</option>
					  <option value="rugs">Rugs</option>
					</select>
				</div> -->

				<nav class="collections-product-nav category-selector">
					<div class="furniture" value="furniture">Furniture</div>
					<div class="rugs" value="rugs">Rugs</div>
					<div class="textiles" value="textiles">Textiles</div>
				</nav>

				<!--<div class="category-list display rand"></div>-->
				<div class="category-list furniture alph"></div>
				<div class="loading"></div>
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


