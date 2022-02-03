<?php 

if (!function_exists('pg_generate_main_search_result')) {
    function pg_generate_main_search_result($post, $research_areas, $id) {
        $allowed_html = pg_allowed_html();
        $url = get_permalink($post->ID);
        $terms = get_the_terms($post->ID, 'research-areas');
        var_dump($id);
        if (!empty($terms)) {
            $terms = array_map(
                function($term) use ($research_areas) {
                    if (!empty($research_areas)) {
                        $match = array_search(strval($term->term_id), $research_areas);
                        if ($match !== false) {
                            return '<span class="text-primary-electric-blue-400">' . $term->name . '</span>';
                        }
                    }
                    return $term->name;
                }, 
                $terms
            );
            $terms_string = implode(', ', $terms);
        }
        ob_start();
    ?>
        <a href="<?php echo esc_attr($url)?>" class="py-5 block bg-shade-white-400 hover:bg-shade-grey-50 transition-background-color duration-300">
            <div class="container">
                <div class="flex items-center">
                    <div class="grow">
                        <p class="paragraph"><?php echo esc_html($post->post_title) ?></p>
                        <?php if (isset($terms_string) && $terms_string !== ''): // Start of Terms String check ?>
                            <p class="mt-3 text-shade-grey-700">
                                <?php echo wp_kses($terms_string, $allowed_html) ?>
                            </p>
                        <?php endif; // End of Terms String check ?>
                    </div>
                    <p class="paragraph-sm text-shade-grey-700"><?php echo esc_html('Publication'); ?></p>
                </div>
            </div>
        </a>
    <?php 
    return ob_get_clean();
    }
}