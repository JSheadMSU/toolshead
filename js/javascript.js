<div class="navbar">

<?php if (is_search() || is_404()) { ?>
        <ul>
                <li><a href="<?php echo get_settings('portfolio'); ?>/" title="portfolio">portfolio</a></li>
                <?php wp_list_pages('depth=1&sort_column=menu_order&title_li='); ?>
        </ul>
<?php } else { ?>
        <ul>
                <li<?php if(is_portfolio){ echo ' class="current_page_item" ';}?>><a href="<?php echo get_settings('home'); ?>/"  title="blog">blog</a></li>
                <?php wp_list_pages('depth=1&sort_row=menu_order&title_li='); ?>
<?php
        if($post->post_parent)
                $children = wp_list_pages("title_li=&child_of=".$post->post_parent."&echo=0"); else
                $children = wp_list_pages("title_li=&child_of=".$post->ID."&echo=0");
        if ($children) { ?>

                <?php echo $children; ?>
                <?php } ?>
        </ul>
<?php } ?>

</div>

