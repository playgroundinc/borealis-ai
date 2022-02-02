<?php 
if (!function_exists('pg_generate_blog_sidebar')) {
    function pg_generate_blog_sidebar($id) {
        $post_sections = get_post_meta($id, 'post_sections', true);
        ob_start();
        if (isset($post_sections) && !empty($post_sections)) {
            $table_of_contents = json_decode($post_sections);
            if (isset($table_of_contents) && !empty($table_of_contents)) {
                foreach($table_of_contents as $key => $item) {
                ?>
                <li class="pl-5">
                    <a class="pb-4 block text-shade-black-400 hover:text-primary-electric-purple-400 focus:text-primary-electric-purple-400 visited:text-primary-electric-purple-400" href="#<?php echo pg_slugify($item->title); ?>">
                        <p class="paragraph-sm cursor-pointer"><?php echo esc_html($item->title); ?></p>
                    </a>
                </li>
                <?php
                    if (isset($item->subsections) && !empty($item->subsections)) {
                        ?> 
                            <ul>
                                <?php
                                    foreach($item->subsections as $subsection) {
                                        ?>
                                            <li class="pl-10 paragraph-sm cursor-pointer">
                                                <a class="pb-4 block text-shade-black-400 hover:text-primary-electric-purple-400 focus:text-primary-electric-purple-400 visited:text-primary-electric-purple-400" href="#<?php echo pg_slugify($subsection); ?>">
                                                    <?php echo esc_html($subsection) ?>
                                                </a>
                                            </li>
                                        <?php
                                    }   
                                ?>
                            </ul>
                        <?php
                    }
                }
            }
        }
        return ob_get_clean();
    }
}