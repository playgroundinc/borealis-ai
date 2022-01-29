<?php 
if (!function_exists('pg_generate_blog_sidebar_cite')) {
    function pg_generate_blog_sidebar_cite($id) {
        pg_svg_spritemap(); 
        $post_sections = get_post_meta($id, 'post_sections', true);
        $allowed_html = pg_allowed_html();
        $post   = get_post( $id );
        $title = get_the_title($id);
        $publication_date = get_post_meta($id, 'publication_date', true);
        $authors = get_post_meta($id, 'authors', true);
        $url = $post->guid;
        if (isset($authors) && $authors !== '') {
            $authors = json_decode($authors);
            $authors_mapped = array_map(
                function($author) { 
                    return $author->label; 
                }, 
                $authors);
            $authors_string = implode(', ', $authors_mapped);
            
        }



        ob_start();
        if (isset($authors_string) && !empty($authors_string) 
            && isset($publication_date) && !empty($publication_date) 
            && isset($title) && !empty($title)
            && isset($url) && !empty($url)) {
                ?>
                    <div id="modal" class="bg-navy-400 w-2/5 m-auto fixed right-0 left-0 top-96 bg-shade-white-400 border-radius-10 hidden">
                        <button id="close-cite" class="absolute top-4 right-4">
                            <svg class="icon-close w-6 h-6" aria-labelledby="icon-close">
                                <title id="icon-close"></title>
                                <use xlink:href="#icon-close"></use>
                            </svg>
                        </button>
                        <h3 class="h3 pl-12 py-10">Citation</h3>
                        <div class="bg-shade-grey-100 py-8 px-12 border-radius-10">
                            <p class="paragraph">
                                <?php echo wp_kses($authors_string, $allowed_html); ?>
                                (<?php echo esc_html(substr($publication_date, 0 ,4)); ?>).
                                <?php echo esc_html($title); ?>.
                                <a href="<?php echo esc_url($url); ?>"><?php echo esc_html($title); ?></a>
                            </p>
                        </div>
                    </div>
                <?php    
        }
        return ob_get_clean();
    }
}