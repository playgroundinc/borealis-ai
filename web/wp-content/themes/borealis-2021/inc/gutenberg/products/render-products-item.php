<?php 

if (!function_exists('pg_render_products_item')) {
    function pg_render_products_item($block, $link) {
        $fields     = array(
            'post' => 0,
        );

        $attributes = pg_get_attributes( $block['attrs'], $fields );
        if (isset($attributes->post) && intval($attributes->post) > 0): // Start of post ID check
            $post = get_post($attributes->post);
            $image = get_the_post_thumbnail_url($post->ID, 'product-single');
            $market = get_post_meta($post->ID, 'market', true);
            $description = get_post_meta($post->ID, 'description', true);
        ?> 
            <li class="block border-b border-color-shade-grey-500">
                <a class="block py-8 md:py-15 hover:bg-shade-grey-100 bg-shade-white-400 transition-background-color duration-300 group" href="<?php echo esc_attr(get_permalink($post->ID))?>">
                    <div class="container md:flex items-center">
                        <div class="basis-1/3 shrink-0 md:pr-12">
                            <?php if (isset($market) && strlen($market) > 0): ?>
                                <p class="h3"><?php echo esc_html($market); ?></p>
                            <?php endif; ?>
                        </div>
                        <div class="basis-1/2 shrink-0 relative pt-5 md:pt-0 md:pr-6">  
                            <p class="paragraph"><?php echo $description && strlen($description) > 0 ? esc_html($description) : esc_html($post->post_title); ?></p>
                            <div class="hidden tb:block opacity-0 invisible absolute rounded-large overflow-hidden right-6 -top-20 tb:group-hover:opacity-100 tb:group-hover:visible transition-all duration-400">
                                <img src="<?php echo esc_url_raw($image)?>" />
                            </div>
                        </div>
                        <div class="basis-1/6 shrink-0 pt-15 md:pt-0">
                            <p class="primary-button flex items-center"><?php echo esc_html('View Product') ?><span class="pl-8 tb:pl-4 lg:pl-8"><?php echo pg_render_icon('arrow-white'); ?></span></p>
                        </div>
                    </div>
                </a>
            </li>
        <?php 
        endif; // End of post ID check
    }
}