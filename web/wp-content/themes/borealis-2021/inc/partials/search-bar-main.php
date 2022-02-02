<?php
if (!function_exists('pg_generate_search_bar_main')) {
    function pg_generate_search_bar_main($query, $taxonomies = array())
    {
        ob_start();
?> 
    <div class="border-t border-shade-grey-500 mt-8">
        <div class="container flex">
            <form class="search-form relative grow">
                <label class="sr-only" for="search">Search</label>
                <input class="h2 border block w-full border-0 text-shade-grey-700 py-10" id="search" name="q" type="search" placeholder="<?php echo esc_attr('Type Here')?>" value="<?php echo isset($query) && !empty($query) ? esc_attr($query) : null; ?>">
                <button class="sr-only" type="submit">
                    <span ><?php echo esc_html('Search') ?></span>
                </button>
                <div role="region" id="search-info" aria-atomic="true" aria-live="assertive">
                    <p id="helper-text" class="sr-only"><?php echo esc_html('Press enter to search') ?></p>
                </div>
            </form>
            <div class="flex items-center accordion-block">
                <span id="open-search" class="icon icon--xl"><?php echo pg_render_icon('large-search')?></span>
                <span id="close-search" class="icon icon--xl hidden"><?php echo pg_render_icon('large-search-close')?></span>
            </div>
        </div>
    </div>
<?php
        return ob_get_clean();
    }
}
?>