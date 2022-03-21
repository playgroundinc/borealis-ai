<?php

if (!function_exists('pg_render_featured_post')) {
    function pg_render_featured_post($inner_block, $full)
    {
        $fields = array(
            'post' => false,
        );
        $attributes = pg_get_attributes($inner_block['attrs'], $fields);
        $post_obj = get_post($attributes->post);
        $image = get_the_post_thumbnail_url($attributes->post, 'full');
        $terms = get_the_terms($attributes->post, 'research-areas');
        $url = get_permalink($post_obj->ID);
        if (!empty($terms)) {
            $terms = array_map(
                function ($term) {
                    return $term->name;
                },
                $terms
            );
            $terms_string = implode('; ', $terms);
        }
        if (!$image) {
            $image = get_bloginfo('stylesheet_directory') . '/src/images/heroImage.jpg';
        }
        var_dump($full);
        ob_start();
?>
        <a href="<?php echo esc_url_raw($url) ?>" class="block pt-12 md:flex flex-col grow">
            <div class=" <?php echo $full ? esc_attr('md:flex justify-between') : 'grow' ?>">
                <h2 class="paragraph-lg <?php echo $full ? esc_attr('md:w-5/12') : esc_attr('md:w-5/6') ?>"><?php echo esc_html($post_obj->post_title) ?></h2>
                <?php if ($full && strlen($post_obj->post_excerpt) > 0) : ?>
                    <p class="basis-1/2 pt-6 md:pt-0"><?php echo esc_html($post_obj->post_excerpt) ?></p>
                <?php endif; ?>
            </div>
            <div class="mt-10">
                <div class="<?php echo $full ? esc_attr('pt-featured-image') : esc_attr('pt-featured-image-sm') ?> md:pt-featured-image-md bg-center bg-cover rounded-large" style="background-image: url(<?php echo esc_url_raw($image) ?>)"></div>
            </div>
            <?php if (!$full && strlen($post_obj->post_excerpt) > 0) : ?>
                <p class="pt-6 w-full md:w-10/12"><?php echo esc_html($post_obj->post_excerpt) ?></p>
            <?php endif; ?>
            <div class="md:flex flex-col <?php !$full ? esc_attr('md:items-end') : '' ?>">
                <div class="flex mt-10 text-shade-grey-700 md:w-5/6 grow-2 items-end">
                    <p class="paragraph-sm pr-10 shrink-0"><?php echo $post_obj->post_type === 'news' ? esc_html('News') : esc_html('Blog') ?></p>
                    <?php if (strlen($terms_string) > 0) : ?>
                        <p class="paragraph-sm border-l border-l-shade-black-400 pl-4"><?php echo esc_html($terms_string) ?></p>
                    <?php endif; ?>
                </div>
            </div>
        </a>
<?php
        return ob_get_clean();
    }
}
