<?php

/**
 *
 * Render Blockquote Block
 *
 * @package Borealis
 * @version 1.0.0
 * @author  Playground Inc.
 * @license https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @since  1.0.0
 */

// Check if `register_block_type` exists before calling
// If Gutenberg isn't enabled it wont exist and error.
if (function_exists('register_block_type')) {
    $namespace = pg_get_namespace();
    register_block_type(
        $namespace . '/testimonial',
        array(
            'render_callback' => 'pg_render_testimonial_block',
        )
    );
}

if (!function_exists('pg_render_testimonial_block')) {
    /**
     * Render out cognito embed block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_testimonial_block($attrs, $style)
    {
        $allowed_html = pg_allowed_html();
        if (!isset($style) || !strlen($style) > 0) {
            return;
        }
        $fields = array(
            'image_id' => false,
            'quote' => '',
            'role' => '',
            'speaker' => '',
        );
        $attributes = pg_get_attributes($attrs, $fields);
        $image = wp_get_attachment_image_url($attributes->image_id, 'full');
        $thumbnail = wp_get_attachment_image_url($attributes->image_id);
        $hasThumbnail = isset($thumbnail) && strlen($thumbnail) > 0;
        $hasRole = isset($attributes->role) && strlen($attributes->role) > 0;
        $hasSpeaker = isset($attributes->speaker) && strlen($attributes->speaker) > 0;
        ob_start();
?>
        <?php if ($style === 'dark') : ?>
            <li class="w-full flex flex-col justify-center group shrink-0 slide" aria-roledescription="slide">
                <div class="flex flex-col md:flex-row grow bg-primary-electric-purple-400 relative">
                    <div class="w-full pt-full md:pt-0 md:w-4/12 md:absolute inset-0 lg:w-full-bleed bg-cover bg-center shrink-0" style="background-image: url(<?php echo esc_url_raw($image); ?>)"></div>
                    <div class="container flex flex-col grow md:flex-row justify-center md:justify-end items-start md:items-end pb-29 md:pb-12 py-12 text-shade-white-400">
                        <div class="w-full md:w-7/12">
                            <p class="paragraph-lg"><?php echo esc_html($attributes->quote); ?></p>
                            <?php if ($hasRole || $hasSpeaker) : ?>
                                <div class="mt-22 w-7/12 tb:w-8/12">
                                    <?php if ($hasSpeaker) : ?>
                                        <p class="h4"><?php echo esc_html($attributes->speaker); ?></p>
                                    <?php endif; ?>
                                    <?php if ($hasRole) : ?>
                                        <p class="paragraph <?php echo $hasSpeaker ? esc_attr('pt-2') : '' ?>"><?php echo esc_html($attributes->role); ?></p>
                                    <?php endif; ?>
                                </div>
                            <?php endif; ?>
                        </div>

                    </div>
                </div>
            </li>
        <?php else : ?>
            <li class="w-full flex flex-col justify-center group shrink-0 slide" aria-roledescription="slide">
                <div class="container flex flex-col  justify-center md:justify-end items-end md:justify-center pt-8 md:pt-0 pb-15 md:pb-0">
                    <div>
                        <p class="paragraph-lg"><?php echo esc_html($attributes->quote); ?></p>
                        <?php if ($hasRole || $hasSpeaker || $hasThumbnail) : ?>
                            <div class="mt-22 md:w-7/12 tb:w-8/12 flex items-center">
                                <?php if ($hasThumbnail) : ?>
                                    <div class="rounded-large inline-block overflow-hidden mr-10 shrink-0">
                                        <img src="<?php echo esc_url_raw($thumbnail) ?>" class="max-h-15 block" />
                                    </div>
                                <?php endif; ?>
                                <div>
                                    <?php if ($hasSpeaker) : ?>
                                        <p class="h4"><?php echo esc_html($attributes->speaker); ?></p>
                                    <?php endif; ?>
                                    <?php if ($hasRole) : ?>
                                        <p class="paragraph <?php echo $hasSpeaker ? esc_attr('pt-2') : '' ?>"><?php echo esc_html($attributes->role); ?></p>
                                    <?php endif; ?>
                                </div>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
            </li>
        <?php endif; ?>
        <?php return ob_get_clean(); ?>
<?php
    }
}
