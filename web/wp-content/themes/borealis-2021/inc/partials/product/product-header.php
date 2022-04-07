<?php

if (!function_exists('pg_generate_product_header')) {
    function pg_generate_product_header($id)
    {
        ob_start();
?>
        <div class="pt-41 pb-8 md:pb-15">
            <div class="basis-4/12 ">
                <h1 class="h1 md:h1-desktop"><?php echo esc_html(the_title()); ?></h1>
            </div>
        </div>
<?php
        return ob_get_clean();
    }
}
