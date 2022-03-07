<?php 

if (!function_exists('pg_generate_program_header')) {
    function pg_generate_program_header($id) {
        $excerpt = get_the_excerpt($id);
        ob_start();
    ?>
        <div class="pt-41 pb-8 md:pb-15 lg:flex justify-between">
            <div class="basis-3/12 shrink-0">
                <h1 class="h1"><?php echo esc_html(the_title()); ?></h1>
            </div>
            <?php if (isset($excerpt) && strlen($excerpt) > 0): ?>
                <div class="basis-8/12 shrink-0 pt-5 lg:pt-0">
                    <p class="paragraph md:paragraph-lg"><?php echo esc_html($excerpt); ?></p>
                </div>
            <?php endif; ?>
        </div>
    <?php
        return ob_get_clean();
    }
}