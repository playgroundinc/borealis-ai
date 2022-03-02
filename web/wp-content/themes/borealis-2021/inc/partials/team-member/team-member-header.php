<?php 
if (!function_exists('pg_generate_team_member_header')) {
    function pg_generate_team_member_header($id) {
        $allowed_html = pg_allowed_html();
        $position = get_post_meta($id, 'position', true);
        $education = get_post_meta($id, 'education', true);
        ob_start();
        ?>
        <div class="md:flex pt-41 pb-8 md:pb-15 items-center">
            <div class="basis-7/12 shrink-0">
                <h1 class="h1"><?php echo esc_html(the_title()); ?></h1>
            </div>
            <div class="basis-5/12 shrink-0 pt-11 md:pt-0">
                <?php if (isset($position) && strlen($position) > 0): ?>
                    <p class="h4"><?php echo esc_html($position); ?></p>
                <?php endif; ?>
                <?php if (isset($education) && strlen($education) > 0): ?>
                    <p class="paragraph text-shade-grey-700"><?php echo esc_html($education); ?></p>
                <?php endif; ?>
            </div>   
        </div>
        <?php
        return ob_get_clean();
    }
}