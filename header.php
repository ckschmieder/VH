<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>

		<meta charset="<?php bloginfo( 'charset' ); ?>">

		<meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1">
        
        <?php 

            $page_title = "";

            // On the core page, use the site tagline from the CMS.
            // Otherwise, use the current page title.
            if ( is_front_page() ) {
                $page_title = get_bloginfo ( 'description' );
            } else {
                $page_title = get_the_title();
            } 
        ?>
		<title><?php echo get_bloginfo('name'); ?> | <?php echo $page_title; ?></title>
    	<meta property="dw:responsive:mobile" content="true" />		
		<?php if ($post->post_type != "portfolio"){ ?>
			<link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/css/slick-theme.css" />
			<link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/css/slick.css" />
			<link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/css/master.css" />
			<link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/css/cks-styles.css" />
		<?php } ?>
		<?php if ($post->post_parent == 20){ ?>
			<meta property="og:url"           content="http://vagrantpress.dev" />
			<meta property="og:type"          content="website" />
			<meta property="og:title"         content="Victoria Hagan Interiors" />
			<meta property="og:description"   content="Victoria Hagan has long been respected for the intelligent integration of architecture and interior design. Her design philosophy features a refined use of materials, sophisticated color, and strong silhouettes." />
			<meta property="og:image"         content="<?php echo get_field('main_image', 5)['url']; ?>" />
		<?php } else if ($post->post_parent == 13 || $post->post_type == "products"){ ?>
			<meta property="og:url"           content="http://collection.vagrantpress.dev" />
			<meta property="og:type"          content="website" />
			<meta property="og:title"         content="Victoria Hagan Collections" />
			<meta property="og:description"   content="Victoria Hagan has long been respected for the intelligent integration of architecture and interior design. Her design philosophy features a refined use of materials, sophisticated color, and strong silhouettes." />
			<meta property="og:image"         content="<?php echo get_field('hero_image', 36)['url']; ?>" />
		<?php } else if ($post->post_type == "vh_life"){ ?>
			<meta property="og:url"           content="<?php echo get_permalink(); ?>" />
			<meta property="og:type"          content="website" />
			<meta property="og:title"         content="Victoria Hagan | <?php the_title(); ?>" />
			<meta property="og:description"   content="<?php echo get_the_excerpt(); ?>" />
			<meta property="og:image"         content="<?php echo get_field('main_image')['url']; ?>" />
		<?php } else if ($post->post_type == "portfolio"){ ?>
			<meta property="og:url"           content="<?php echo get_permalink( 7 ); ?>?i=<?php echo the_id(); ?>" />
			<meta property="og:type"          content="website" />
			<meta property="og:title"         content="Victoria Hagan | <?php the_title(); ?>" />
			<meta property="og:description"   content="<?php echo get_the_excerpt(); ?>" />
			<meta property="og:image"         content="<?php echo get_field('main_image')['url']; ?>" />
		<?php } ?>
		<script>
			CONTENT = "<?php echo WP_CONTENT_URL; ?>";
		</script>

	</head>

	<body <?php body_class(); ?>
	
		<?php if ($post->post_type == "portfolio"){ ?>
			onpageshow="window.location = '<?php echo get_permalink( 7 ); ?>?i=<?php echo the_id(); ?>';"></body
		<?php } ?> >
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-78115005-1', 'auto');
  ga('send', 'pageview');

</script>
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
 fbq('init', '190392041685677'); 
fbq('track', 'PageView');
</script>
<noscript>
 <img height="1" width="1" 
src="https://www.facebook.com/tr?id=190392041685677&ev=PageView
&noscript=1"/>
</noscript>
<!-- End Facebook Pixel Code -->
        
		<div class="wrapper">

			 <div class="main-content">

			<?php if ($post->post_parent == 20 || $post->post_type == "blog" || $post->post_type == "post"){ ?>

				<header class="header">
				
					<div class="header-holder">
						<a href="/"><div class="logo "></div></a>

						<?php wp_nav_menu( array('menu' => 'Interiors Header Menu') );?>
					</div>
				
					

				</header>
				
			<?php } else if ($post->post_parent == 13 || $post->post_type == "products" || $post->post_type == "vh_life"){ ?>

				<header class="header">
				
					<div class="header-holder">
						<a href="/"><div class="logo "></div></a>

						<?php wp_nav_menu( array('menu' => 'Collections Header Menu') );?>
						
						<a href="http://www.victoriahagan.com"><div class="site-switch">Victoria Hagan Interiors</div></a>
					</div>
				
					

				</header>


			} <?php } else { ?>

				<header class="header">
				
					<div class="header-holder">
						<a href="/"><div class="logo "></div></a>

						<?php wp_nav_menu( array('menu' => 'Interiors Header Menu') );?>
					</div>
								

				</header>

			<?php } ?>