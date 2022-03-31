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
            'cta_text' => '',
            'title_size' => '',
            'copy_size' => '',
            'text_or_image' => '',
            'image_id' => '',
            'image_alt' => '',
        );
        $attributes = pg_get_attributes($attrs, $fields);
        $image = wp_get_attachment_image_url($attributes->image_id, 'full');
        ob_start();
?>
        <div class="<?php echo $attributes->bgColour ?> custom-component animated-element <?php echo is_singular('product') ? '-mb-10' : '' ?>">
            <div class="container flex <?php echo !empty($attributes->cta_text) ? 'md:pt-20 pt-10' : 'md:py-20 py-10' ?> tb:flex-row flex-col">
                <div class="w-full tb:w-4/12">
                    <?php if ($attributes->text_or_image === 'image') : ?>
                        <img class="mb-6" src="<?php echo $image ?>" alt="<?php echo $attributes->image_id ?>">
                    <?php else : ?>
                        <?php if (!empty($attributes->title)) : ?>
                            <h2 class="<?php echo $attributes->title_size ?> mb-8"><?php echo $attributes->title ?></h2>
                        <?php endif; ?>
                        <?php if (!empty($attributes->subtitle)) : ?>
                            <h3 class="h4 mb-8"><?php echo esc_html($attributes->subtitle) ?></h3>
                        <?php endif; ?>
                    <?php endif; ?>
                </div>
                <?php
                if ($attributes->colAmount === 'three') {
                ?>
                    <div class="w-full tb:w-8/12 flex flex-col">
                        <div class="w-full">
                            <div class="mb-10 md:mb-0 w-full text-2-up">
                                <p class="<?php echo $attributes->copy_size ?> md:pr-10">
                                    <?php echo $block['innerBlocks'][0]['attrs']['copy'] ?>
                                </p>
                            </div>
                        </div>
                        <div class="flex md:flex-row flex-col mt-0 md:mt-12">
                            <?php
                            echo wp_kses(render_block($block['innerBlocks'][1]), 'post');
                            echo wp_kses(render_block($block['innerBlocks'][2]), 'post');
                            ?>
                        </div>
                        <?php
                        ?>
                    </div>
                <?php
                } elseif ($attributes->colAmount === 'two') {
                ?>
                    <div class="w-full md:flex-row flex-col tb:w-8/12 flex">
                        <?php
                        foreach ($block['innerBlocks'] as $inner_block) {
                            echo wp_kses(render_block($inner_block), 'post');
                        }
                        ?>
                    </div>
                <?php
                } else {
                ?>
                    <div class="w-full md:flex-row flex-col tb:w-8/12">
                        <div class="mb-10 md:mb-0 w-full text-2-up">
                            <p class="<?php echo $attributes->copy_size ?> md:pr-10">
                                <?php echo $block['innerBlocks'][0]['attrs']['copy'] ?>
                            </p>
                        </div>
                    </div>
                <?php
                }
                ?>
            </div>
            <?php if (!empty($attributes->cta_text)) : ?>
                <div class="container flex justify-end">
                    <a href="#job-anchor" class="primary-button flex items-center md:pb-20 pb-10 w-full tb:w-8/12 mt-8 tb:mt-14">
                        <p class="product-cta  <?php echo $attributes->bgColour ?>">
                            <?php echo $attributes->cta_text ?><span class="pl-8 tb:pl-4 lg:pl-8 down"><?php echo pg_render_icon('arrow-down'); ?></span>
                        </p>
                    </a>
                </div>
            <?php endif; ?>
        </div>
<?php
        return ob_get_clean();
    }
}
