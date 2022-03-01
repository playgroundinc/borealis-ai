<?php 

if (!function_exists('pg_render_publications_item')) {
    function pg_render_publications_item($block, $link) {
        $fields     = array(
            'post' => 0,
        );

        $attributes = pg_get_attributes( $block['attrs'], $fields );
        if (isset($attributes->post) && intval($attributes->post) > 0): // Start of post ID check
            $post = get_post($attributes->post);
            $terms = wp_get_post_terms($post->ID, 'research-areas' );
            $content_types = wp_get_post_terms($post->ID, 'content-type' );
            $content_type = pg_get_content_type($content_types, $post->post_type);
            
        ?> 
            <li class="block border-b border-shade-grey-700">
                <a class="block py-6 md:px-5 md:py-5 hover:bg-shade-grey-100 bg-shade-white-400 transition-background-color duration-300" href="<?php echo esc_attr(get_permalink($post->ID))?>">
                    <div class="container md:w-full md:m-0 md:flex justify-between items-center">
                        <div>
                            <p class="paragraph"><?php echo esc_html($post->post_title) ?></p>
                            <?php 
                                if (!empty($terms)): // Start of empty terms check 
                                    $terms = array_map(function($term) { return $term->name; }, $terms);
                                    $terms_string = implode('; ', $terms);
                            ?>
                                <p class="paragraph-sm text-shade-grey-700 pt-5 md:pt-2"><?php echo esc_html($terms_string); ?></p>
                                
                            <?php endif; // End of empty terms check ?>
                        </div>
                        <div>
                            <p class="md:pl-4 mt-16 md:mt-0 break-normal text-shade-grey-700 paragraph-sm"><?php echo esc_html($content_type)?></p>
                        </div>
                    </div>
                </a>
            </li>
        <?php 
        endif; // End of post ID check
    }
}