<?php 
/**
 * Pagination Class
 * 
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package pg-wp-starter
 */

class PG_Pagination {
    function __construct($current, $total, $offset = 2) {
        $this->current = $current;
        $this->total = $total;
        $this->path = $_SERVER['REQUEST_URI'];
        $this->url = $this->path;
        $this->active = $this->total > 1;
        $this->skip_right = false;
        $this->skip_left = false;
        $this->offset = $offset;
    }
    function get_link($page_number) {
        return add_query_arg('pno', $page_number, $this->url);
    }

    function get_pagination_links() {
        if ($this->active) {
            ob_start();
            ?>
            <div class="pagination-links animated-element flex center-xs mt-xs-4 mt-md-10 mt-lg-13">
                <?php if ($this->current > 1): ?>
                    <a class="p-xs-1 pagination-links__single link--arrow" aria-label="<?php esc_attr_e('Previous page', 'pg'); ?>" href="<?php echo esc_url_raw($this->get_link(intval($this->current - 1))); ?>">
                        <?php echo pg_render_icon('arrow-left') ?>
                    </a>
                <?php endif; ?>
                <ul class="flex">
                    <?php for ($i = 1; $i <= $this->total ; $i = $i + 1): ?>
                        <?php if (($i > intval($this->current + $this->offset)) && $i < $this->total && $this->skip_right): ?>
                            <?php continue; ?>
                        <?php endif; ?>
                        <?php if (($i < intval($this->current - $this->offset)) && $i > 1 && $this->skip_left): ?>
                            <?php continue; ?>
                        <?php endif; ?>
                        <li class="ml-xs-1">
                            <?php if ($i === $this->current): ?>
                                <p class="pagination-links__active p-xs-1"><?php echo esc_html($i); ?></p>
                            <?php elseif (intval($i) === 1): ?>
                                <a class="block-link p-xs-1 pagination-links__single" href="<?php echo esc_url_raw($this->get_link($i)) ?>"><?php echo esc_html($i) ?></a>
                            <?php elseif ($i <= $this->current + $this->offset && $i >= $this->current - $this->offset) : ?>
                                <a class="block-link p-xs-1 pagination-links__single" href="<?php echo esc_url_raw($this->get_link($i)) ?>"><?php echo esc_html($i) ?></a>
                            <?php elseif (($i > intval($this->current + $this->offset)) && $i < $this->total && !$this->skip_right): ?>
                                <p class="p-xs-1">...</p>
                                <?php  $this->skip_right = true; ?>
                            <?php elseif (($i < intval($this->current - $this->offset)) && $i > 1 && !$this->skip_left): ?>
                                <p class="p-xs-1">...</p>
                                <?php  $this->skip_left = true; ?>
                            <?php elseif (intval($i) === intval($this->total)): ?>
                                <a class="block-link p-xs-1 pagination-links__single" href="<?php echo esc_url_raw($this->get_link($i)) ?>"><?php echo esc_html($i) ?></a>
                            <?php endif; ?>
                        </li>
                    <?php endfor; ?>
                </ul>
                <?php if ($this->current < $this->total): ?>
                    <a class="p-xs-1 pagination-links__single link--arrow" aria-label="<?php esc_attr_e('Next page', 'pg'); ?>" href="<?php echo esc_url_raw($this->get_link(intval($this->current + 1))); ?>">
                        <?php echo pg_render_icon('arrow') ?>
                    </a>
                <?php endif; ?>
            </div>
            <?php
            return ob_get_clean();
        }
    }
}