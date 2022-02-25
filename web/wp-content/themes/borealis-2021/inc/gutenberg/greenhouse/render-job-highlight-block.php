<?php 

if (!function_exists('pg_render_job_highlight_block')) {
    function pg_render_job_highlight_block($attrs) {
        $fields = array(
            'copy',
            'image_id',
            'image_alt',
            'title',
        );
        $attributes = pg_get_attributes($fields, $attrs);
        $image = wp_get_attachment_image_url($attributes->image_id, 'job-highlight');
        ob_start();
        ?>
        <div class="justify-between container md:container pt-7 <?php echo is_single() ? 'tb:flex' : 'hidden'?>">
            <div class="basis-3/8 lg:w-3/8 shrink-0 grow-0 flex justify-center items-center">
                <div class="rounded-large overflow-hidden inline-block object-contain">
                    <img class="block max-w-full" src="<?php echo esc_url_raw($image) ?>" alt="<?php echo esc_attr($attributes->image_alt) ?>">
                </div>
            </div>
            <div class="basis-1/2 tb:pl-6 tb:mt-0 mt-14">
                <?php if (!empty($attributes->title) && strlen($attributes->title) > 0): ?>
                    <div>
                        <h3 class="h4"><?php echo esc_html($attributes->title); ?></h3>
                    </div>
                <?php endif;?>
                <?php if (!empty($attributes->copy) && strlen($attributes->copy) > 0): ?>
                    <div class="paragraph-blog mt-3">
                        <?php echo wp_kses(wpautop($attributes->copy), 'post'); ?>
                    </div>
                <?php endif;?>
            </div>
        </div>
    <?php
    return ob_get_clean();
    }
}