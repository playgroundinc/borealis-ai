<?php

if (!function_exists('pg_generate_publication_related')) {
    function pg_generate_publication_related($post, $research_areas)
    {
        $allowed_html = pg_allowed_html();
        $url = get_permalink($post->ID);
        $terms = get_the_terms($post->ID, 'research-areas');

        if (strpos($post->post_type, '-') !== false) {
            $label = substr($post->post_type, 0, strpos($post->post_type, "-"));
        } else {
            $label = $post->post_type;
        }

        if (!empty($terms)) {
            $terms = array_map(
                function ($term) use ($research_areas) {
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
            $terms_string = implode('; ', $terms);
        }
        ob_start();
        // if ($terms !== false) {
?>
            <a href="<?php echo esc_attr($url) ?>" class="py-5 block hover:bg-shade-white-400 bg-shade-grey-100 transition-background-color duration-300">
                <div class="container">
                    <div class="md:flex items-center">
                        <div class="grow pr-3">
                            <p class="paragraph"><?php echo esc_html($post->post_title) ?></p>
                            <?php if (isset($terms_string) && $terms_string !== '') : // Start of Terms String check 
                            ?>
                                <p class="mt-5 md:mt-3 text-shade-grey-700">
                                    <?php echo wp_kses($terms_string, $allowed_html) ?>
                                </p>
                            <?php endif; // End of Terms String check 
                            ?>
                        </div>
                        <p class="paragraph-sm text-shade-grey-700 break-normal mt-16 md:mt-0"><?php echo ucfirst($label); ?></p>
                    </div>
                </div>
            </a>

<?php
        // }
        return ob_get_clean();
    }
}
