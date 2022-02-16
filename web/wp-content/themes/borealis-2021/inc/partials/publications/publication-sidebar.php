<?php
if (!function_exists('pg_generate_publication_sidebar')) {
    function pg_generate_publication_sidebar($id)
    {
        $sidebar_arr = array(
            'Abstract' => get_post_meta($id, 'abstract', true),
            'Paper' => get_post_meta($id, 'paper', true),
            'Code' => get_post_meta($id, 'code', true),
            'Blog' => get_post_meta($id, 'blog', true),
        );
        ob_start();
        if (isset($sidebar_arr) && !empty($sidebar_arr)) {
            foreach ($sidebar_arr as $key => $item) {
                if (!empty($item)) {
?>
                    <li>
                        <a class="md:pb-4 mr-7 block text-shade-black-400 hover:text-primary-electric-purple-400" target="_blank" rel="noreferrer" href="<?php echo $item; ?>">
                            <h4 class="h4 cursor-pointer"><?php echo $key; ?></h4>
                        </a>
                    </li>
<?php
                }
            }
        }
        return ob_get_clean();
    }
}
