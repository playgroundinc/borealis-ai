<?php

if (!function_exists('pg_server_side_block_render')) {
    function pg_server_side_block_render($block_content, $block)
    {
        switch ($block['blockName']) {

            case 'core/button':
                $block_content = pg_render_icon_button_block($block_content, $block);
                break;
            case 'core/video':
                $block_content = pg_render_video_block($block_content, $block);
                break;
            case 'core/embed':
                $block_content = pg_render_video_block($block_content, $block);
                break;
            case 'core/list':
                $block_content = pg_render_list_block($block_content, $block);
                break;
        }
        return $block_content;
    }
}

add_filter('render_block', 'pg_server_side_block_render', 10, 2);
