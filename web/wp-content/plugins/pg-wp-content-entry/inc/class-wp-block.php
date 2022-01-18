<?php 
/**
 * Builds WP Gutenberg blocks.
 * 
 * Based on current anatomy of Gutenberg comments.
 * May need to be updated alongside changes to Gutenberg.
 */
class PG_WP_Block {
  public $block;

  /**
   * Builds the class by pulling off details.
   */
  function __construct($block) {
    $this->name = $block['name'];
    $this->type = $block['type'];
    $this->attributes = $block['attributes'];
    $this->tag = $block['tag'];
    $this->content = $block['content'];
  }

  /**
   * Generates the comment for a single list item.
   */
  private function generate_list_item($content) {
    return '<li>' . $content . '</li>';
  }

  /**
   * Generates the full list Gutenberg comment.
   */
  public function generate_list() {
    $list_items = explode(PHP_EOL, $this->content);
    if (!count($list_items) > 0) {
      return null;
    }
    if ($this->name !== 'list') {
      $comment = '<!-- wp:list { "ordered":true } --><ol>';
    } else {
      $comment = "<!-- wp:list --><ul>";
    }
    foreach ($list_items as $list_item) {
      $comment .= $this->generate_list_item($list_item);
    }
    if ($this->name !== 'list') {
      $comment .= "</ol><!-- /wp:list -->";
    } else {
      $comment .= "</ul><!-- /wp:list -->";
    }
    return $comment;
  }

  /**
   * Generates a core comment.
   * 
   * A core comment is one that maps pretty easily to just content wrapped in a single, specified tag.
   * i.e. A core/paragraph or a core/heading.
   * Based on the current anatomy of a Gutenberg comment.
   */
  public function generate_core_comment() {
    $comment = "<!-- wp:" . $this->name . " ";
    $comment .= isset($this->attributes) && !empty($this->attributes) ? $this->attributes : null;
    $comment .= " -->";
    if (isset($this->type) && 'core' === $this->type) {
      if ($this->tag === 'blockquote') {
        $comment .= "<" . $this->tag . " class='wp-block-quote'>" . $this->content . "</" . $this->tag . ">";
      } else if ($this->tag === 'pre') {
        $comment .= "<" . $this->tag . " class='wp-block-code'>" . $this->content . "</" . $this->tag . ">";
      } else if ($this->name === 'table') {
          $comment .= "<" . $this->tag . " class='wp-block-table'>" . $this->content . "</" . $this->tag . ">";
      } else {
        $comment .= "<" . $this->tag . ">" . $this->content . "</" . $this->tag . ">";
      }
    }
    $comment .= "<!-- /wp:" . $this->name . " -->";
    return $comment;
  }

  /**
   * Generates a comment for a custom image.
   * 
   * Based on the current anatomy of a Gutenberg comment.
   */
  public function generate_custom_image() {
    $comment = "<!-- wp:pg/custom-image ";
    $comment .= isset($this->attributes) && !empty($this->attributes) ? $this->attributes : null;
    $comment .= " /-->";
    return $comment;
  }

  /**
   * Dictates which kind of comment to generate.
   */
  public function generate_comment() {
      if ($this->type !== 'core') {
        if ($this->name === 'pg/custom-image') {
          $comment = $this->generate_custom_image();
          return $comment;
        }
      }
      if(!isset($this->content) || empty($this->content) ) {
        return null;
      }
      switch($this->name) {
        default:
          $comment = $this->generate_core_comment();
        break;
      }
      return $comment;
  }
}