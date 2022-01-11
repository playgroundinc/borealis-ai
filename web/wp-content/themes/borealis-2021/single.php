<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package pg-wp-starter
 */

get_header();
?>
    <div class="page__content">
        <?php 
            $post_sections = get_post_meta($post->ID, 'post_sections', true);
            if (isset($post_sections) && !empty($post_sections)) {
                $table_of_contents = json_decode($post_sections);
                if (isset($table_of_contents) && !empty($table_of_contents)) {
                    foreach($table_of_contents as $key => $item) {
                    ?>
                        <h2 class="font-bold text-xl">Custom Section: <?php echo esc_html($item->title); ?></h2>
                    <?php
                        if (isset($item->subsections) && !empty($item->subsections)) {
                            ?> 
                                <h3 class="font-bold">Subsections</h3>
                                <ul>
                            <?php
                                foreach($item->subsections as $subsection) {
                                    ?>
                                        <li><?php echo esc_html($subsection) ?></li>
                                    <?php
                                }   
                            ?>
                            </ul>
                            <?php
                        }
                    }
                }
            }
        ?>
        <?php 
        if ( have_posts() ) : 
            while ( have_posts() ) : 
                the_post();
            ?>
            <?php
                the_content();
            endwhile;
        endif;
        ?>
    </div>
<?php
get_footer();

