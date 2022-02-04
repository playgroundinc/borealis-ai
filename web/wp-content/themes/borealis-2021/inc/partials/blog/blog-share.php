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
            <button id="blog-share" class="flex w-22 text-3xl">
                <!-- <svg class="icon-share w-6 h-6" aria-labelledby="icon-share">
                    <title id="icon-share"></title>
                    <use xlink:href="#icon-share"></use>
                </svg> -->
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
