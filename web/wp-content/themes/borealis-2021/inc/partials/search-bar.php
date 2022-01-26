<?php
if (!function_exists('pg_generate_search_bar')) {
    function pg_generate_search_bar($query, $taxonomies = array())
    {
        ob_start();
?> 
    <div class="border-b border-shade-grey-500">
        <div class="container flex">
            <form class="grow" action="<?php echo esc_attr($_SERVER['REQUEST_URI']) ?>" class="search-form">
                <label class="sr-only" for="search">Search</label>
                <input class="border block w-full border-0 py-6" id="search" name="q" type="search" value="<?php echo isset($query) && !empty($query) ? esc_attr($query) : null; ?>">

                <button class="sr-only" type="submit">
                    <span >Search</span>
                </button>
                <div role="region" id="search-info" aria-atomic="true" aria-live="assertive">
                    <p id="helper-text" class="sr-only">Press enter to search</p>
                    <p id="error-state" class="hidden">Please provide a search term.</p>
                </div>
            </form>
            <div class="flex items-center">
                <button class="text-shade-grey-700 flex items-center"> <span class="paragraph-sm h-4 w-4 bg-tint-lightBlue-400 icon text-center rounded-full mr-2"><span class="icon-sm topics">0</span></span>Topics <span class="icon icon-md ml-2"><?php echo pg_render_icon('chevron')?></span></button>
            </div>
        </div>
    </div>
        <div id="accordion-group" class="accordion">
            <?php
                echo '<form method="post">';
                foreach ($taxonomies as $taxonomy) {
                    $terms = get_terms(array(
                        'taxonomy' => $taxonomy['name'],
                        'hide_empty' => true,
                    ));
                    echo'<fieldset class="checkbox-form" id="'. $taxonomy['name'] .'">
                            <legend>' . $taxonomy['label'] . '</legend>';
                            foreach ($terms as $term) {
                                echo '<input 
                                        value="' . $term->term_id . '" 
                                        name="' . $term->term_id . '[]" 
                                        type="checkbox" 
                                        id="' . $term->term_id . '" 
                                        >
                                            <label 
                                                for="' . $term->term_id . '">
                                            ' . $term->name . '
                                            </label>';
                            };
                    echo '</fieldset>';
                }
                echo '</form>';
            ?>
            <button class="clear-checkboxes">
                Clear All
            </button>
        </div>
<?php
        return ob_get_clean();
    }
}
?>