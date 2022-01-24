<?php
if (!function_exists('pg_generate_search_bar')) {
    function pg_generate_search_bar($query, $taxonomies = array())
    {
        $taxonomies_array = array();
        foreach ($taxonomies as $taxonomy) {
            $taxonomy['active'] = (strpos($_SERVER['REQUEST_URI'], $taxonomy['name']) !== false) ? true : false;
            $taxonomy['label'] = ucwords(str_replace('-', ' ', $taxonomy['name']));
            array_push($taxonomies_array, $taxonomy);
        }
        $topics = 0;
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
            foreach ($taxonomies_array as $taxonomy) {
                $terms = get_terms(array(
                    'taxonomy' => $taxonomy['name'],
                    'hide_empty' => true,
                ));
                if ($taxonomy['active'] and !empty($terms)) {
                    echo '<h3>
                                <button aria-expanded="true" class="" aria-controls="' . $taxonomy['name'] . '" id="' . $taxonomy['name'] . '">
                                        <span class="">' . $taxonomy['label'] . '<span class="icon">></span></span>
                                </button>
                            </h3>
                            <form class="checkbox-form" method="post" id="' . $taxonomy['name'] . '">
                                <fieldset>
                                    <legend class="sr-only">' . $taxonomy['label'] . '</legend>';
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
                            echo '</fieldset>
                            </form>';
                }
            }
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