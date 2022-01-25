<?php
if (!function_exists('pg_generate_search_bar')) {
    function pg_generate_search_bar($query, $taxonomies = array())
    {
        ob_start();
?>
        <form action="<?php echo esc_attr($_SERVER['REQUEST_URI']) ?>" class="search-form">
            <label for="search">Search</label>
            <input class="border" id="search" name="q" type="search" value="<?php echo isset($query) && !empty($query) ? esc_attr($query) : null; ?>">

            <button type="submit">
                <span class="sr-only">Search</span>
            </button>
            <div role="region" id="search-info" aria-atomic="true" aria-live="assertive">
                <p id="helper-text">Press enter to search</p>
                <p id="error-state" class="hidden">Please provide a search term.</p>
            </div>
        </form>
        <div id="accordion-group" class="accordion">
            <p>Topics <span class="topics">0</span></p>
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