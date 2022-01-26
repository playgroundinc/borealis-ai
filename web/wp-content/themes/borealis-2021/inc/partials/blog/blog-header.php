<?php 
if (!function_exists('pg_generate_blog_header')) {
    function pg_generate_blog_header($id) {
        $type = get_the_terms($id, 'content-type');
        $research_areas = get_the_terms($id, 'research-areas');
        $publication_date = get_post_meta($id, 'publication_date', true);
        $time_to_read = get_post_meta($id, 'time_to_read', true);
        $authors = get_post_meta($id, 'authors', true);
        if (isset($authors) && $authors !== '') {
            $authors = json_decode($authors);
            $authors_mapped = array_map(function($author) { if ($author->equal) { return '*' . $author->label; } return $author->label; }, $authors);
            $authors_string = implode(', ', $authors_mapped);
        }
        if (!empty($research_areas)) {
            $research_areas = array_map(function($area) { return $area->name; }, $research_areas);
            $research_areas = join(", ", $research_areas);
        }
        ob_start();
        ?>
        <div class="pt-41">
            <div class="md:w-8/12">
                <div class="flex flex-col-reverse">
                    <h1 class="h1 pt-8"><?php echo esc_html(the_title()) ?></h1>
                    <div class="md:flex">
                        <p class="paragraph-small text-shade-grey-700 pr-4"><?php echo !empty($type[0]) ? esc_html($type[0]->name) : 'Blog' ?></p>
                        <?php if (!empty($research_areas)): ?>
                            <p class="paragraph-small text-shade-grey-700 md:pl-4 md:border-l border-shade-black-400"><?php echo esc_html($research_areas)?></p>
                        <?php endif;?>
                    </div>
                </div>
                <div class="flex pt-8">
                    <div class="w-3/8">
                        <p class="h4"><?php echo esc_attr($publication_date); ?></p>
                        <?php if (isset($time_to_read) && $time_to_read !== ''): ?>
                            <p class="paragraph-sm mt-4"><?php echo esc_html($time_to_read . ' minute read'); ?></p>
                        <?php endif; ?>
                    </div>  
                    <?php if (isset($authors_string)): ?>
                        <div class="w-5/8">
                            <p class="paragraph"><?php echo esc_html($authors_string); ?></p>
                            <p class="mt-4 paragraph-sm text-shade-grey-700"><?php echo esc_html('*Denotes Equal Contribution')?></p>
                        </div>
                    <?php endif; ?>
                </div> 
            </div>
            <!-- TODO: Add series -->
        </div>
        <?php
        return ob_get_clean();
    }
}