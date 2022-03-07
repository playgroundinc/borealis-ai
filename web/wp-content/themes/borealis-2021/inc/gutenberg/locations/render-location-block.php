<?php

/**
 *
 * Render Graphic Page Strip
 *
 * @package Borealis AI
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
        $namespace . '/location',
        array(
            'render_callback' => 'pg_render_locations_block',
        )
    );
}

if (!function_exists('pg_render_locations_block')) {
    /**
     * Render out page strip block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_locations_block($attrs, $content, $block_obj)
    {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'city' => '',
            'address' => '',
            'video_id' => null,
        );
        $attributes = pg_get_attributes($attrs, $fields);
        $video = wp_get_attachment_url($attributes->video_id);
        ob_start();

        if (!empty($attributes->city) || !empty($attributes->address)) :
?>
            <div class="location-container mr-4 mb-6">
                <div class="mb-6">
                    <p class="h4 mb-4">
                        <?php echo $attributes->city ?>
                    </p>
                    <p class="paragraph-sm">
                        <?php echo $attributes->address ?>
                    </p>
                    <div class="text-primary-electric-blue-400 h3 flex justify-start mt-6 md:mt-8">
                        <?php if (!empty($block['innerBlocks'])) : ?>
                            <button id="open-img" class="mr-10 relative z-10">
                                <div class="images">
                                    <?php echo pg_render_icon('eye-btn'); ?>
                                </div>
                            </button>
                        <?php endif; ?>
                        <?php if (!empty($video)) : ?>
                            <button id="open-vid" class="relative z-10">
                                <div class="video">
                                    <?php echo pg_render_icon('play-btn'); ?>
                                </div>
                            </button>
                        <?php endif; ?>
                    </div>
                </div>
                <?php if (!empty($video)) : ?>
                    <div id="video-modal" class="w-full h-full absolute m-auto right-0 left-0 top-0 bottom-0 bg-shade-black-400 opacity-0 transition ease-in-out delay-150">
                        <div class="container m-auto">
                            <video tabindex="-1" class="absolute top-0 left-0 w-full h-full z-30 py-28 md:py-24 max-h-screen" loop muted autoplay playsinline>
                                <source src="<?php echo esc_url_raw($video); ?>" type="video/mp4">
                            </video>
                        </div>

                    </div>
                <?php endif; ?>
                <?php if (!empty($block['innerBlocks'])) : ?>
                    <div id="img-modal" class="px-6 w-full h-full absolute m-auto right-0 left-0 top-0 bottom-0 bg-shade-black-400 opacity-0 transition ease-in-out delay-150">
                        <div id="image-slideshow" class="grid-container w-full relative mt-26">
                            <?php foreach ($block['innerBlocks'] as $key => $inner_block) : ?>
                                <div id="image<?php echo $key + 1 ?>" class="image-slideshow opacity-0">
                                    <?php echo render_block($inner_block); ?>
                                </div>
                            <?php endforeach; ?>
                        </div>
                        <div class="mt-16 md:hidden">
                            <?php echo pg_render_icon('close-white'); ?>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
<?php
        endif;
        return ob_get_clean();
    }
}
