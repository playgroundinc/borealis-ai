<?php
get_header();
$current_post_id = $post->ID;
$bibtex = get_post_meta($post->ID, 'bibtex', true);
?>
<main class="border-t border-color-shade-grey-500 pb-15">
    <div class="pt-14 flex justify-start container flex-col md:flex-row">
        <aside class="w-full md:w-3/12 mb-10 md:mb-0">
            <ul class="flex flex-wrap md:flex-col flex-row">
                <?php echo pg_generate_publication_sidebar($post->ID); ?>
            </ul>
        </aside>
        <div class="md:w-8/12 w-full">
            <?php
            if (have_posts()) :
                while (have_posts()) :
                    the_post();
            ?>
            <?php
                    the_content();
                endwhile;
            endif;
            ?>
        </div>
    </div>
    <div class="bg-shade-grey-100 md:mt-20 mt-10 py-18">
        <div class="md:container flex flex-col md:flex-row">
            <div class="w-full mb-10 md:mb-0 md:w-2/6">
                <h3 class="h3   container md:w-full md:m-0">Related Research</h3>
            </div>
            <div class="w-full md:w-4/6">
                <?php
                $research_areas = get_the_terms($post->ID, 'research-areas');
                if (!empty($research_areas)) {
                    $research_areas = array_map(function ($term) {
                        return strval($term->term_id);
                    }, $research_areas);
                }
                $args = pg_generate_query(array('publications', 'research-blogs'), '', array('research-areas' => $research_areas), 1, 3, $current_post_id);
                $Query = new WP_Query($args);
                if (!empty($Query->posts)) : // Empty Query check. 
                ?>
                    <ul class="posts-listing border-color-shade-grey-500 border-t" data-page="1" data-research-areas="<?php echo esc_attr(implode(',', $research_areas)) ?>" data-total="<?php echo esc_attr($Query->max_num_pages) ?>" data-query="<?php echo esc_attr($query) ?>" data-posttype="publications">
                        <?php foreach ($Query->posts as $post) :
                        ?>
                            <li class="border-b border-color-shade-grey-500">
                                <?php echo pg_generate_publication_related($post, $research_areas) ?>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                <?php endif; ?>
                <?php wp_reset_query(); ?>
            </div>
        </div>
    </div>
</main>

<?php
get_footer();
