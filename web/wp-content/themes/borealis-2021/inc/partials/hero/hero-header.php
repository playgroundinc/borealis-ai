<?php
if (!function_exists('pg_generate_hero_header')) {
    function pg_generate_hero_header($id)
    {
        $allowed_html = pg_allowed_html();
        ob_start();
?>
        <div>
            <canvas class="absolute top-0 canvas" id="canvas"></canvas>
            <div class="w-full md:w-6/12 h1 relative z-10 pt-72 text-shade-white-400"><?php echo esc_html(the_title()) ?></div>
        </div>
<?php
        return ob_get_clean();
    }
}
