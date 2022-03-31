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
        $namespace . '/blockquote',
        array(
            'render_callback' => 'pg_render_blockquote_block',
        )
    );
}

if (!function_exists('pg_render_blockquote_block')) {
    /**
     * Render out cognito embed block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_blockquote_block($attrs, $content, $block_obj)
    {
        $block = $block_obj->parsed_block;
        $allowed_html = pg_allowed_html();
        $fields = array(
            'image_id' => false,
            'quote' => '',
            'role' => '',
            'speaker' => '',
            'style' => 'default',
        );
        $attributes = pg_get_attributes($attrs, $fields);
        $image = wp_get_attachment_image_url($attributes->image_id);
        $hasImage = isset($image) && strlen($image) > 0;
        $hasRole = isset($attributes->role) && strlen($attributes->role) > 0;
        $hasSpeaker = isset($attributes->speaker) && strlen($attributes->speaker) > 0;
        ob_start();
?>
        <<<<<<< HEAD <div class="custom-component animated-element">
            =======
            <div class="custom-component animated-element <?php echo $attributes->style === 'dark' ? '' : 'no-background-padding' ?>">
                >>>>>>> e17850f303b6bb89dcc56d1ace782fb788c02b5c
                <?php if ($attributes->style === 'circle' && $hasImage) : ?>
                    <div class="container md:flex">
                        <div class="w-2/3 max-w-[200px] md:w-1/4 pr-10">
                            <div class="w-full pt-full overflow-hidden relative">
                                <img class="rounded-full absolute inset-0 h-full w-full" src="<?php echo esc_url_raw($image) ?>" />
                            </div>
                        </div>
                        <div class="pt-10 md:pt-0 md:w-3/4">
                            <p class="paragraph md:paragraph-lg"><?php echo  esc_html($attributes->quote); ?></p>
                            <?php if ($hasSpeaker || $hasRole) : ?>
                                <p class="pt-10 md:pt-0">
                                    <?php if ($hasSpeaker) : ?>
                                        <span p class="h4"><?php echo esc_html($attributes->speaker); ?></span>
                                    <?php endif; ?>
                                    <?php if ($hasSpeaker && $hasRole) : ?>
                                        <span class="px-5"><?php echo esc_html('-') ?></span>
                                    <?php endif; ?>
                                    <?php if ($hasRole) : ?>
                                        <span class="paragraph"><?php echo esc_html($attributes->role); ?></span>
                                    <?php endif; ?>
                                </p>
                            <?php endif; ?>
                        </div>
                    </div>
            </div>
            <?php return ob_get_clean(); ?>
        <?php endif; ?>
        <?php if ($attributes->style === 'circle-centered' && $hasImage) : ?>
            <div class="container">
                <div class="w-full md:w-1/4 md:mx-auto max-w-[200px]">
                    <div class="w-full pt-full overflow-hidden relative">
                        <img class="rounded-full absolute inset-0 block h-full w-full" src="<?php echo esc_url_raw($image) ?>" />
                    </div>
                </div>
                <p class="paragraph md:paragraph-lg pt-10 md:text-center"><?php echo  esc_html($attributes->quote); ?></p>
                <?php if ($hasSpeaker || $hasRole) : ?>
                    <p class="pt-10 md:text-center">
                        <?php if ($hasSpeaker) : ?>
                            <span class="h4"><?php echo esc_html($attributes->speaker); ?></span>
                        <?php endif; ?>
                        <?php if ($hasSpeaker && $hasRole) : ?>
                            <span class="px-5"><?php echo esc_html('-') ?></span>
                        <?php endif; ?>
                        <?php if ($hasRole) : ?>
                            <span class="paragraph"><?php echo esc_html($attributes->role); ?></span>
                        <?php endif; ?>
                    </p>
                <?php endif; ?>
            </div>
            </div>
            <?php return ob_get_clean(); ?>
        <?php endif; ?>
        <?php if ($attributes->style === 'dark') : ?>
            <div class="container">
                <div class="bg-primary-navy-400 py-8 md:py-10 px-8 md:px-15 rounded-large text-shade-white-400">
                    <p class="paragraph md:paragraph-lg"><?php echo  esc_html($attributes->quote); ?></p>
                    <div class="flex md:flex-row flex-col-reverse md:items-center md:justify-between pt-10">
                        <div>
                            <?php if ($hasSpeaker || $hasRole) : ?>
                                <p class="pt-8 md:pt-0">
                                    <?php if ($hasSpeaker) : ?>
                                        <span class="h4"><?php echo esc_html($attributes->speaker); ?></span>
                                    <?php endif; ?>
                                    <?php if ($hasSpeaker && $hasRole) : ?>
                                        <span class="px-5"><?php echo esc_html('-') ?></span>
                                    <?php endif; ?>
                                    <?php if ($hasRole) : ?>
                                        <span class="paragraph"><?php echo esc_html($attributes->role); ?></span>
                                    <?php endif; ?>
                                </p>
                            <?php endif; ?>
                        </div>
                        <div class="flex" aria-hidden="true">
                            <span style="font-size: 47px"><?php echo pg_render_icon('quote'); ?></span>
                            <span class="pr-8" style="font-size: 47px"><?php echo pg_render_icon('quote'); ?></span>
                            <span class="rotate-180" style="font-size: 47px"><?php echo pg_render_icon('quote'); ?></span>
                            <span class="rotate-180" style="font-size: 47px"><?php echo pg_render_icon('quote'); ?></span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <?php return ob_get_clean(); ?>
        <?php endif; ?>
        <div class="container">
            <div class="flex" aria-hidden="true">
                <span class="text-primary-electric-blue-400" style="font-size: 47px"><?php echo pg_render_icon('quote'); ?></span>
                <span class="text-primary-electric-blue-400 pr-8" style="font-size: 47px"><?php echo pg_render_icon('quote'); ?></span>
                <span class="text-primary-electric-blue-400 rotate-180" style="font-size: 47px"><?php echo pg_render_icon('quote'); ?></span>
                <span class="text-primary-electric-blue-400 rotate-180" style="font-size: 47px"><?php echo pg_render_icon('quote'); ?></span>
            </div>
            <p class="paragraph md:paragraph-lg pt-8 md:pt-11"><?php echo esc_html($attributes->quote); ?></p>
            <?php if ($hasImage || $hasRole || $hasSpeaker) : ?>
                <div class="flex items-center pt-8 md:pt-11">
                    <?php if ($hasImage) : ?>
                        <div class="rounded-large overflow-hidden w-23 pt-23 relative">
                            <img class="absolute inset-0" src="<?php echo esc_url_raw($image) ?>" />
                        </div>
                    <?php endif; ?>
                    <?php if ($hasSpeaker || $hasRole) : ?>
                        <div class="<?php echo $hasImage ? esc_attr('pl-5') : '' ?>">
                            <?php if ($hasSpeaker) : ?>
                                <p class="h4"><?php echo esc_html($attributes->speaker); ?></p>
                            <?php endif; ?>
                            <?php if ($hasRole) : ?>
                                <p class="paragraph"><?php echo esc_html($attributes->role); ?></p>
                            <?php endif; ?>
                        </div>
                    <?php endif; ?>
                </div>
            <?php endif; ?>
        </div>
        </div>
        <?php return ob_get_clean(); ?>
<?php
    }
}
