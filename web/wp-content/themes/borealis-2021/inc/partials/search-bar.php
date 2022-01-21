<?php
if (!function_exists('pg_generate_search_bar')) {
    function pg_generate_search_bar($query, $taxonomies = array())
    {
        $taxonomies_array = array();
        foreach ($taxonomies as $taxonomy) {
            $taxonomy['active'] = (strpos($_SERVER['REQUEST_URI'], $taxonomy['name']) !== false) ? true : false;
            $taxonomy['label'] = ucwords(str_replace('-', ' ', $taxonomy['name']));
            array_push($taxonomies_array, $taxonomy);
        }
        ob_start();
?>

        <form action="<?php echo esc_attr($_SERVER['REQUEST_URI']) ?>" class="search-form">
            <label for="search">Search</label>
            <input class="border" id="search" name="q" type="search" value="<?php echo isset($query) && !empty($query) ? esc_attr($query) : null; ?>">

            <button type="submit">
                <span class="sr-only">Search</span>
            </button>
            <div role="region" id="search-info" aria-atomic="true" aria-live="assertive">
                <p id="helper-text">Press enter to search</p>
                <p id="error-state" class="hidden">Please provide a search term.</p>
            </div>
        </form>
        <div id="accordion-group" class="accordion">
            <?php
                foreach($taxonomies_array as $taxonomy) {
                    if($taxonomy['active']) {
                        echo '<h3>
                                <button aria-expanded="true" class="" aria-controls="'.$taxonomy['name'].'" id="'.$taxonomy['name'].'">
                                        <span class="">'.$taxonomy['label'].'</span>
                                </button>
                            </h3>
                            <div id="sect1" role="region" aria-labelledby="'.$taxonomy['name'].'" class="">
                                <div>
                                    <fieldset>';
                                    $terms = get_terms( array(
                                        'taxonomy' => $taxonomy['name'],
                                        'hide_empty' => true,
                                    ));
                                    foreach ($terms as $term) {
                                        if (strpos($_SERVER['REQUEST_URI'], $term->slug) !== false){
                                            echo '<input type="checkbox" id="'.$term->slug.'" name="'.$term->slug.'" checked>
                                            <label for="'.$term->slug.'">'.$term->name.'</label>';
                                        } else {
                                            echo '<input type="checkbox" id="'.$term->slug.'" name="'.$term->slug.'">
                                                    <label for="'.$term->slug.'">'.$term->name.'</label>';
                                        }
                                    }
                    }
                }
            ?>
                    </fieldset>
                </div>
            </div>
        </div>
<?php
        return ob_get_clean();
    }
}


// <?php 
// $args = array(
// 'public'   => true,
// '_builtin' => false
// ); 
// $output = 'names'; // or objects
// $operator = 'and'; // 'and' or 'or'
// $taxonomies = get_taxonomies( $args, $output, $operator );
// $taxonomies_array = array(); 

//             if(!empty($taxonomies)) {
//                 foreach ($taxonomies as $taxonomy) {
//                     $single_taxonomies_array = array();
//                     $activeTermsArray = array();
//                     $single_taxonomies_array['name'] = $taxonomy;
//                     $single_taxonomies_array['label'] = $taxonomy;
//                     $activeTerms = get_terms( array(
//                         'taxonomy' => $taxonomy,
//                         'hide_empty' => false,
//                     ));
//                     foreach ($activeTerms as $activeTerm) {
//                         if($single_taxonomies_array['name'] === 'conferences') {
//                             var_dump($activeTerm->slug);
//                         }
//                         // array_push($activeTermsArray, $activeTerm->slug);
//                         // if (strpos($_SERVER['REQUEST_URI'], $activeTerm->slug) !== false){
//                         //     array_push($activeTermsArray, $activeTerm->slug);
//                         // }
//                     }
//                     $single_taxonomies_array['activeTerms'] = $activeTermsArray;
//                     array_push($taxonomies_array, $single_taxonomies_array);
//                 }
//                 // var_dump($taxonomies_array);
//             }
//             // if(!empty($taxonomies_array)) {







//             // }

//             // var_dump($taxonomies);
//             // if ( $taxonomies ) {
//             //     echo '<ul>';
//             //     foreach ( $taxonomies  as $taxonomy ) {
//             //         echo '<li>' . $taxonomy . '</li>';
//             //     }
//             //     echo '</ul>'; 
//             // }
//         
?>