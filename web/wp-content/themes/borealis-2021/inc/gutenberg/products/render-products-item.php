<?php

if (!function_exists('pg_render_products_item')) {
    function pg_render_products_item($block, $link)
    {
        $fields     = array(
            'post' => 0,
        );

        $attributes = pg_get_attributes($block['attrs'], $fields);
        if (isset($attributes->post) && intval($attributes->post) > 0) : // Start of post ID check
            $post = get_post($attributes->post);
            $image = get_the_post_thumbnail_url($post->ID, 'product-single');
            $market = get_post_meta($post->ID, 'market', true);
            $image_url = get_post_meta($post->ID, 'image_url', true);
            $description = get_post_meta($post->ID, 'description', true);
            $cta_text = get_post_meta($post->ID, 'cta_text', true);
            $cta_link = get_post_meta($post->ID, 'cta_link', true);
?>
            <li class="block border-b border-color-shade-grey-500 overflow-hidden image-hover">
                <a class="hover-item block transition-background-color duration-300 group" href="<?php echo $cta_link ?>" target="_blank" rel="noopener noreferrer">
                    <div class="container md:flex items-center hover py-8 md:py-15">
                        <div class="basis-1/3 shrink-0 md:pr-12">
                            <?php if (isset($market) && strlen($market) > 0) : ?>
                                <p class="h3"><?php echo esc_html($market); ?></p>
                            <?php endif; ?>
                        </div>
                        <div class="basis-1/2 shrink-0 pt-5 md:pt-0 md:pr-6">
                            <p class="paragraph"><?php echo $description && strlen($description) > 0 ? esc_html($description) : esc_html($post->post_title); ?></p>
                            <img id="product-image" class="hidden" src=" <?php echo esc_url_raw($image_url) ?>" />
                        </div>
                        <div class="basis-1/6 shrink-0 pt-15 md:pt-0">
                            <p id="cta-hover" class="primary-button flex items-center underline-cta black-underline"><?php echo $cta_text ?><span class="pl-8 tb:pl-4 lg:pl-8"><?php echo pg_render_icon('arrow-white'); ?></span></p>
                        </div>
                    </div>
                </a>
            </li>
<?php
        endif; // End of post ID check
    }
}
