<?php
if (!function_exists('pg_generate_job_query_bar')) {
    function pg_generate_job_query_bar($department_array)
    {
        ob_start();
?>
        <div class="border-t border-shade-grey-500 mt-8 hidden">

            <div class="hidden">
                <button id="search-topics"> <span class="topics"><?php echo esc_html('0') ?></span></button>
            </div>
        </div>
        <div class="bg-shade-white-400 hover-item-background w-full tb:m-0 tb:w-4/12 md:pr-10">
            <div id="search-filters" class="container" role="region" aria-labelledby="search-topics">
                <div class="pt-6 pb-6">
                    <form method="post">
                        <fieldset class="checkbox-form job-checkboxes" id="Departments">
                            <legend class="sr-only">Departments</legend>
                            <div class="flex flex-wrap">
                                <?php foreach ($department_array as $department) : ?>
                                    <div class="mr-3 mb-3">
                                        <?php if ($department['id'] === 0) : ?>
                                            <button class="pill pill-active hover:cursor-pointer" role="tab" aria-selected="true" id="<?php echo $department['id'] ?>-tab" aria-controls="<?php echo $department['id'] ?>-content-panel"><?php echo $department['name'] ?></button>
                                        <?php else : ?>
                                            <button class="pill hover:cursor-pointer" role="tab" aria-selected="false" id="<?php echo $department['id'] ?>-tab" aria-controls="<?php echo $department['id'] ?>-content-panel"><?php echo $department['name'] ?></button>
                                        <?php endif ?>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                        </fieldset>
                    </form>
                    <button class="clear-checkboxes hidden">
                        <?php echo esc_html('Clear All') ?>
                    </button>
                </div>
            </div>
        </div>
<?php
        return ob_get_clean();
    }
}
?>