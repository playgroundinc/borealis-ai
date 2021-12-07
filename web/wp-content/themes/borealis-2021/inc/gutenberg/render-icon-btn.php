<?php
/**
 *
 * Render Button Block with Icon
 *
 * @package pg-wp-starter
 * @subpackage choice-reit
 * @version 1.0.0
 * @author  Playground Inc.
 * @license https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @since  1.0.0
 */

if ( ! function_exists( 'trmc_render_icon_button_block' ) ) {
    /**
     * Render button with icon.
     *
     * @param mixed $block_content the content of the block.
     * @param array $block array of the block features.
     */
    function trmc_render_icon_button_block( $block_content, $block ) {

        $fields = array(
            'icon' => null,
        );
        $attributes = pg_get_attributes($block, $fields);
        $allowed_html = pg_allowed_html();
        if (!empty($attributes->icon)) {
            $icon = pg_render_icon($attributes->icon);
            $replace      = $icon . '</a>';
            $icon_content = str_replace( '</a>', $replace, $block_content );
        }


        ob_start();
        
        if (!empty($icon_content)) {
            echo wp_kses( $icon_content, $allowed_html );
        } else {
            echo wp_kses( $block_content, $allowed_html );
        }

        return ob_get_clean();
    }
}
