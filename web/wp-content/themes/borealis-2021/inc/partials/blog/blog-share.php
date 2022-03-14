<?php
if (!function_exists('pg_generate_blog_share')) {
    function pg_generate_blog_share($id)
    {
        pg_svg_spritemap();
        $post   = get_post($id);
        $url = get_permalink($post->ID);
        ob_start();
        if (isset($url) && !empty($url)) {
?>
            <button class="blog-share flex w-22 text-3xl">
                <?php echo pg_render_icon('share') ?>
                <p class="ml-2 paragraph-sm">
                    Share
                </p>
            </button>
<?php
        }
        return ob_get_clean();
    }
}
