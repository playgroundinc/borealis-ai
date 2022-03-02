<?php
/**
 *
 * Render Fellowship Container
 *
 * @package Borealis
 * @version 1.0.0
 * @author  Playground Inc.
 * @license https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @since  1.0.0
 */

// Check if `register_block_type` exists before calling
// If Gutenberg isn't enabled it wont exist and error.
if ( function_exists( 'register_block_type' ) ) {
    $namespace = pg_get_namespace();
    register_block_type(
        $namespace . '/fellowship',
        array(
            'render_callback' => 'pg_render_fellowship_block',
        )
    );
}

if ( ! function_exists( 'pg_render_fellowship_block' ) ) {
    /**
     * Render out fellowship container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_fellowship_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'name' => '',
            'title' => '',
            'topic' => '',
            'image_id' => 0,
            'logo_id' => 0,
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        $allowed_html = pg_allowed_html();
        $namespace = pg_get_namespace();
        $image = wp_get_attachment_image_url($attributes->image_id);
        $image_alt = get_post_meta($attributes->image_id, '_wp_attachment_image_alt', TRUE);
        $logo = wp_get_attachment_image_url($attributes->logo_id, 'full');
        $logo_alt = get_post_meta($attributes->logo_id, '_wp_attachment_image_alt', TRUE);
        ob_start();
        ?>
        <li class="basis-fellowship nth-child-2:mt-17 sm:nth-child-2:mt-0 sm:nth-child-3:mt-17 sm:nth-child-2n:mr-7 flex flex-col">
            <div class="flex flex-col md:flex-row grow md:items-center">
                <div class="w-35 h-35 rounded-full overflow-hidden shrink-0">
                    <?php if (isset($image) && strlen($image) > 0): ?>
                        <img class="block max-w-full max-h-full" src="<?php echo esc_url_raw($image) ?>" alt="<?php echo esc_attr($image_alt)?>">
                    <?php endif; ?>
                </div>
                <div class="pt-10 md:pt-0 md:pl-10 flex flex-col w-full h-full">
                    <div class="grow <?php echo !isset($logo) || !strlen($logo) > 0 ? esc_attr('flex flex-col justify-center') : ''; ?>">
                        <p class="h4 pb-1"><?php echo esc_html($attributes->name) ?></p>
                        <p class="paragraph-sm"><?php echo esc_html($attributes->topic); ?></p>
                    </div>
                    <?php if (isset($logo) && strlen($logo) > 0): ?>
                        <div class="w-36 max-w-36 md:max-w-36 md:w-36 max-h-18 object-contain mt-8 ">
                            <img class="block max-h-full max-w-full" src="<?php echo esc_url_raw($logo); ?>" alt="<?php echo esc_attr($logo_alt)?>">
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </li>
        <?php
        return ob_get_clean();
    }
}
