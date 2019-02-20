<?php
/**
 * default search form
 */
?>
<form role="search" method="get" id="search-form" action="<?php echo get_permalink(); ?>">
    <div>
        <label class="screen-reader-text" for="s">Search for:</label>
        <input type="text" value="" name="s" id="s" />
        <input type="submit" id="searchsubmit" value="Search" />
    </div>
</form>