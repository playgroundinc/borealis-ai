<?php

/**
 *
 * Render Podcast Block
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
        $namespace . '/podcast',
        array(
            'render_callback' => 'pg_render_podcast_block',
        )
    );
}

if (!function_exists('pg_render_podcast_block')) {
    /**
     * Render out podcast block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_podcast_block($attrs, $content, $block_obj)
    {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'title' => '',
            'author' => '',
            'link_url' => '',
            'image_id' => 0,
            'anchor_id' => '',
        );
        $attributes = pg_get_attributes($attrs, $fields);
        $image = wp_get_attachment_image_url($attributes->image_id, 'full');
        ob_start();
?>
        <section id="<?php echo $attributes->anchor_id ?>" class="custom-component animated-element component-padding container podcast">
            <div class="bg-shade-grey-100 text-shade-grey-500 px-6 py-5">
                <?php if (!empty($attributes->title) and !empty($attributes->author) and !empty($attributes->link_url)) : ?>
                    <div class="flex md:flex-row flex-col">
                        <picture class="image-block__img">
                            <img class="max-w-[180px] rounded-large" data-src="<?php echo esc_url_raw($image) ?>" src="<?php echo esc_url_raw($image) ?>" alt="<?php echo !empty($attributes->image_alt) ? esc_attr($attributes->image_alt) : null ?>">
                        </picture>
                        <div class="pl-0 md:pl-6 pt-4 w-full cursor-default">
                            <h4 class="h4"><?php echo $attributes->title ?></h4>
                            <p class="paragraph"><?php echo $attributes->author ?></p>
                            <audio class="hidden">
                                <source src="<?php echo esc_html($attributes->link_url) ?>">
                                Your browser does not support the audio tag.
                            </audio>
                            <div class="audio-player mt-0 md:mt-11 h-13 w-full flex justify-start md:justify-between text-shade-white-400 items-center">
                                <div class="timeline mr-4 md:mr-0 bg-shade-grey-400 rounded-large overflow-hidden my-5 relative cursor-pointer w-8/12 tb:w-9/12 h-2">
                                    <div class="progress bg-shade-black-400 w-0 h-full transition-width duration-300"></div>
                                </div>
                                <div class="controls w-3/12 tb:w-2/12 flex justify-end">
                                    <div class="flex time text-shade-grey-700 justify-center items-center mr-3 md:mr-7">
                                        <div class="current icon-sm md:paragraph-sm">0:00</div>
                                    </div>
                                    <div class="play-container bg-primary-electric-blue-400 rounded-full w-9 h-9 md:w-11 md:h-11 flex justify-center items-center">
                                        <div class="toggle-play play cursor-pointer">
                                            <span class="playing paragraph md:icon--lg">
                                                <?php echo pg_render_icon('podcast-play'); ?>
                                            </span>
                                            <span class="paused hidden paragraph md:icon--lg">
                                                <?php echo pg_render_icon('pause'); ?>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
        </section>
<?php
        return ob_get_clean();
    }
}
