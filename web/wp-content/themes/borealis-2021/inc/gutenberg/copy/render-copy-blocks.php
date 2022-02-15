<?php 

if (!function_exists('pg_get_copy_blocks')) {
    function pg_get_copy_blocks() {
        $namespace = pg_get_namespace();
        return $blocks = array(
            $namespace . '/paragraph' => array(
                'tag' => 'p',
                'class' => 'paragraph-blog mt-10 md:mt-15'
            ),
            $namespace . '/heading-two' => array(
                'tag' => 'h2',
                'class' => 'h2 mt-11 md:mt-13'
            ),
            $namespace . '/heading-three' => array(
                'tag' => 'h3',
                'class' => 'h3 mt-11 md:mt-13'
            ),
            $namespace . '/heading-four' => array(
                'tag' => 'h4',
                'class' => 'h4 mt-9 md:mt-10'
            ),
            $namespace . '/legal' => array(
                'tag' => 'p',
                'class' => 'legal mt-8'
            ),
        );
    }
}


$blocks = pg_get_copy_blocks();
foreach($blocks as $name => $args) {
    // Check if `register_block_type` exists before calling
    // If Gutenberg isn't enabled it wont exist and error.
    if (function_exists('register_block_type')) {
        register_block_type(
            $name,
            array(
                'render_callback' => 'pg_render_copy_block',
            )
        );
    }
}

if (!function_exists('pg_render_copy_block')) {
     /**
     * Render out page strip block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_copy_block($attrs, $content, $block_obj) {
        $fields = array(
            'content' => ''
        );
        $block = $block_obj->parsed_block;
        $blocks = pg_get_copy_blocks();
        $copy_block =$blocks[$block['blockName']];
        $attributes = pg_get_attributes($attrs, $fields);
        ob_start();
        echo '<' . $copy_block['tag'] . ' class="' . $copy_block['class'] . '">' . $attributes->content . '</' . $copy_block['tag'] . '>'; 
        return ob_get_clean();
    }
}