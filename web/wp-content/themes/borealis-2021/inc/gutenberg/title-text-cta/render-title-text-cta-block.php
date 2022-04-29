<?php

/**
 *
 * Render Title Text Cta Strip
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
        $namespace . '/title-text-cta',
        array(
            'render_callback' => 'pg_render_title_text_cta_block',
        )
    );
}

if (!function_exists('pg_render_title_text_cta_block')) {
    /**
     * Render out title text cta block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_title_text_cta_block($attrs, $content, $block_obj)
    {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'title' => '',
            'copy' => '',
            'cta_text' => '',
            'cta_url' => '',
            'background_colour' => '',
            'anchor_id' => '',
        );
        $attributes = pg_get_attributes($attrs, $fields);
        ob_start();
?>
        <div id="<?php echo $attributes->anchor_id ?>" class="w-full component-padding custom-component animated-element title-text <?php echo $attributes->background_colour ?> component-dark">
            <div class="container flex flex-col tb:flex-row gap-6">
                <h3 class="h3   w-full tb:w-4/12"> <?php echo $attributes->title ?></h3>
                <p class="w-full tb:w-4/12 tb:self-center">
                    <?php echo $attributes->copy ?>
                </p>
                <a href="<?php echo $attributes->cta_url ?>" class="primary-button flex items-center underline-cta before:bg-shade-black-400 mt-3 md:mt-0 w-full md:w-5/12 tb:w-1/5 tb:ml-auto tb:self-center <?php echo $attributes->background_colour ?>"><?php echo $attributes->cta_text ?><span class="pl-8 tb:pl-4 lg:pl-8"><?php echo pg_render_icon('arrow-white'); ?></span></a>
            </div>
        </div>
<?php
        return ob_get_clean();
    }
}
