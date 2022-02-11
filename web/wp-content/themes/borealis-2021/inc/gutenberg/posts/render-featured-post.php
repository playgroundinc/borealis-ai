<?php 

if (!function_exists('pg_render_featured_post')) {
    function pg_render_featured_post($inner_block, $full) {
        $fields = array(
            'post' => false,
        );
        $attributes = pg_get_attributes($inner_block['attrs'], $fields);
        $post_obj = get_post($attributes->post);
        $image = get_the_post_thumbnail_url($attributes->post, 'full');
        $terms = get_the_terms($attributes->post, 'research-areas');
        if (!empty($terms)) {
            $terms = array_map(
                function($term) {
                    return $term->name;
                }, 
                $terms
            );
            $terms_string = implode('; ', $terms);
        }
        if (!$image) {
            return null;
        }
        ob_start();
    ?>
        <div class="pt-12 <?php echo $full ? esc_attr('md:flex justify-between') : '' ?>">
            <h2 class="paragraph-lg <?php echo $full ? esc_attr('md:w-5/12') : esc_attr('md:w-5/6') ?>"><?php echo esc_html($post_obj->post_title) ?></h2>
            <?php if ($full && strlen($post_obj->post_excerpt) > 0): ?>
                <p class="basis-1/2 pt-6 md:pt-0"><?php echo esc_html($post_obj->post_excerpt) ?></p>
            <?php endif; ?>
            <?php if (!$full && strlen($post_obj->post_excerpt) > 0): ?>
                <p class="pt-6 md:hidden"><?php echo esc_html($post_obj->post_excerpt) ?></p>
            <?php endif; ?>
        </div>
        <div class="<?php echo $full ? esc_attr('pt-featured-image') : esc_attr('pt-featured-image-sm') ?> md:pt-featured-image-md bg-center bg-cover rounded-large mt-10" style="background-image: url(<?php echo esc_url_raw($image)?>)"></div>
        <?php if (!$full && strlen($post_obj->post_excerpt) > 0): ?>
            <p class="w-5/6 pt-8 hidden md:block"><?php echo esc_html($post_obj->post_excerpt) ?></p>
        <?php endif; ?>
        <div class="flex mt-10 text-shade-grey-700 md:w-5/6">
            <p class="paragraph-sm pr-10 shrink-0"><?php echo esc_html('Blog') ?></p>
            <?php if (strlen($terms_string) > 0): ?>
                <p class="paragraph-sm border-l border-l-shade-black-400 pl-4"><?php echo esc_html($terms_string) ?></p>
            <?php endif; ?>
        </div>
    <?php 
        return ob_get_clean();
    }
}