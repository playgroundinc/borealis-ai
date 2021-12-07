<?php
/**
 *
 * Render Development Column
 *
 * @package Trimac
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
        $namespace . '/development-column',
        array(
            'render_callback' => 'trmc_render_development_column_block',
        )
    );
}

if ( ! function_exists( 'trmc_render_development_column_block' ) ) {
    /**
     * Render out development column block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function trmc_render_development_column_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        $fields     = array(
          'sm'        => '',
          'md' => '',
          'lg' => '',
          'xl' => '',
        );
        $classes = 'development-block___column';
        $attributes = pg_get_attributes( $attrs, $fields );        
        foreach ($fields as $key=>$field) {
          if (!empty($attributes->$key)) {
            $classes .= " col-" . $key . "-" . $attributes->$key;
          }
        }
        ob_start();
        ?>
          <div class="<?php echo esc_attr($classes)?>">
            <?php
              foreach($block['innerBlocks'] as $inner_block) {
                echo wp_kses(render_block( $inner_block ), 'post');
              }
            ?>
          </div>
        <?php
        return ob_get_clean();
    }
}
