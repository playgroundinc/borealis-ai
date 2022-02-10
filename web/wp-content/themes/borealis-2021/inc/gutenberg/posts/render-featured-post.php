<?php 

if (!function_exists('pg_render_featured_post')) {
    function pg_render_featured_post($inner_block) {
        $fields = array(
            'post' => false,
        );
        $attributes = pg_get_attributes($inner_block['attrs'], $fields);
        $post_obj = get_post($attributes->post);
        $image = get_the_post_thumbnail_url($attributes->post, 'full');
        ob_start();
    ?>
        <div class="flex">
            <h2 class="paragraph-lg basis-1/2"><?php echo esc_html($post_obj->post_title) ?></h2>
            <?php if (strlen($post_obj->post_excerpt) > 0): ?>
                <p class="basis-1/2"><?php echo esc_html($post_obj->post_excerpt) ?></p>
            <?php endif; ?>
        </div>
        <div class="pt-featured-image bg-center bg-cover rounded-large mt-10" style="background-image: url(<?php echo esc_url_raw($image)?>)"></div>
    <?php 
        return ob_get_clean();
    }
}