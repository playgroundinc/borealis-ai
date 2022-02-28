<?php

/**
 *
 * Render Text 2 Up Container block
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
        $namespace . '/text-2-up-container',
        array(
            'render_callback' => 'pg_render_text_2_up_container_block',
        )
    );
}

if (!function_exists('pg_render_text_2_up_container_block')) {
    /**
     * Render out text 2 up container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_text_2_up_container_block($attrs, $content, $block_obj)
    {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'title' => '',
            'subtitle' => '',
            'bgColour' => '',
            'colAmount' => '',
        );
        $attributes = pg_get_attributes($attrs, $fields);
        ob_start();
?>
        <section class="<?php echo $attributes->bgColour ?>">
            <div class="container flex md:py-20 py-10 tb:flex-row flex-col">
                <div class="w-full tb:w-4/12">
                    <?php if (!empty($attributes->title)) : ?>
                        <h2 class="<?php echo $attributes->bgColour === 'bg-shade-white-400 text-shade-black-400' ? 'h2':'h3' ?> mb-8"><?php echo esc_html($attributes->title) ?></h2>
                    <?php endif; ?>
                    <?php if (!empty($attributes->subtitle)) : ?>
                        <h3 class="h4 mb-8"><?php echo esc_html($attributes->title) ?></h3>
                    <?php endif; ?>
                </div>
                <div class="w-full md:flex-row flex-col tb:w-8/12 <?php echo $attributes->colAmount === 'two' ? 'flex' : ''?>">
                    <?php
                    if ($attributes->colAmount === 'two') {
                        foreach ($block['innerBlocks'] as $inner_block) {
                            echo wp_kses(render_block($inner_block), 'post');
                        }
                    } else {
                        echo wp_kses(render_block($block['innerBlocks'][0]), 'post');
                    }
                    ?>
                </div>
            </div>
        </section>
<?php
        return ob_get_clean();
    }
}
