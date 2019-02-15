<?php 
/**
 * Template Name: Collections psearch
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
			<div class="product-search">
				<?php get_search_form(); ?>
			</div>
			
			<div class="category-block">
				<div class="category-selector">category
					<select>
					  <!-- <option value="all">All</option> -->
					  <option value="furniture">Furniture</option>
					  <!-- <option value="casegoods">Casegoods</option> -->
					  <!-- <option value="upholstery">Upholstery</option> -->
					  <option value="textiles">Textiles</option>
					  <option value="rugs">Rugs</option>
					</select>
					<!-- <div class="category-block cat-list">
						<div value="furniture">Furniture</div>
						<div value="textiles">Textiles</div>
						<div value="rugs">Rugs</div>
					</div> -->
				</div>

				<nav class="collections-product-nav" style="display:none;">
					<ul>
						<li>
							<a class="" href="" cat="furniture">Furniture</a>
						</li>
						
						<li>
							<a class="" href="" cat="rugs">Rugs</a>
						</li>
						<li>
							<a class="" href="" cat="textiles">Textiles</a>
						</li>
					</ul>
				</nav>

				<!--<div class="category-list display rand"></div>-->
				<div class="category-list display alph"></div>
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


