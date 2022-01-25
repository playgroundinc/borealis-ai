<?php
/**
 *
 * Render Accordion Row Block
 *
 * @package pg-wp-starter
 * @subpackage choice-reit
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
        $namespace . '/accordion-row',
        array(
            'render_callback' => 'pg_render_accordion_row_block',
        )
    );
}

if ( ! function_exists( 'pg_render_accordion_row_block' ) ) {
    /**
     * Render out accordion block.
     *
     * @param mixed $block_content the content of the block.
     * @param array $block array of the block features.
     */
    function pg_render_accordion_row_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'title' => '',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        $allowed_html = pg_allowed_html();
        ob_start();
        if ( ! empty( $attributes->title ) ) :
            $id         = pg_slugify( $attributes->title );
            $heading_id = $id . '-title';
    ?>
        <div>
            <h3>
                <button class="accordion-row__header" id="<?php echo esc_attr( $heading_id ); ?>" aria-controls="<?php echo esc_attr( $id ); ?>" aria-label="<?php esc_attr_e('Expand or collapse item', 'pg'); ?>" aria-expanded="false">
                    <span>
                        <?php echo esc_html( $attributes->title ); ?>
                    </span>                
               </button>
            </h3>
            <div id="<?php echo esc_attr( $id ); ?>" class="slide-toggle" role="region" aria-labelledby="<?php echo esc_attr( $heading_id ); ?>">
                <?php foreach ( $block['innerBlocks'] as $inner_block ) : ?>
                    <?php echo wp_kses( render_block( $inner_block ), $allowed_html ); ?>
                <?php endforeach; ?>
            </div>
        </div>
    <?php
        endif;
        return ob_get_clean();
    }
}
