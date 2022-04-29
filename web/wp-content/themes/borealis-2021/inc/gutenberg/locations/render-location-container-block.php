<?php

/**
 *
 * Render Locations Container block
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
        $namespace . '/locations-container',
        array(
            'render_callback' => 'pg_render_locations_container_block',
        )
    );
}

if (!function_exists('pg_render_locations_container_block')) {
    /**
     * Render out locations container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_locations_container_block($attrs, $content, $block_obj)
    {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'title' => '',
            'description' => '',
            'anchor_id' => '',
        );
        $attributes = pg_get_attributes($attrs, $fields);
        ob_start();
?>
        <section id="<?php echo $attributes->anchor_id ?>" class="bg-primary-navy-400 text-shade-white-400 location">
            <div class="container flex flex-col md:flex-row py-10 md:py-18 cursor-default">
                <div class="w-full tb:w-4/12 mb-8 tb:mb-0">
                    <?php if (!empty($attributes->title)) : ?>
                        <h3 class="h3   md:mb-6"><?php echo $attributes->title ?></h3>
                    <?php endif; ?>
                    <?php if (!empty($attributes->description)) : ?>
                        <h4 class="h4"><?php echo $attributes->description ?></h4>
                    <?php endif; ?>
                </div>
                <div class="w-full tb:w-8/12 md:flex-row flex-col flex justify-between flex-wrap">
                    <?php foreach ($block['innerBlocks'] as $inner_block) : ?>
                        <?php echo render_block($inner_block); ?>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>
<?php
        return ob_get_clean();
    }
}
