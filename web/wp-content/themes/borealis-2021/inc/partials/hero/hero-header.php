<?php
if (!function_exists('pg_generate_hero_header')) {
    function pg_generate_hero_header($id, $headline)
    {
        $allowed_html = pg_allowed_html();
        ob_start();
?>
        <div class="flex flex-col grow">
            <canvas class="absolute top-0 canvas -z-10" id="canvas"></canvas>
            <div class="w-full grow md:w-6/12 h1 relative pt-72 text-shade-white-400 flex flex-col justify-end">
                <h1 class="h1 pb-10 md:pb-19"><?php echo isset($headline) && strlen($headline) > 0 ? wp_kses($headline, 'post') : esc_html(the_title()); ?></h1>
            </div>
        </div>
<?php
        return ob_get_clean();
    }
}
