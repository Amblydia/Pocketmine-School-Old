<div class="sidebar">
    <h5>Plugin Tutorial</h5>
    <?php
        
        $urls = array(
            'Introduction' => 'introduction.php',
            'plugin.yml' => 'plugin.yml.php',
            'The Basics' => 'the-basics.php',
            'Events' => 'Events.php',
            'Commands' => 'Commands.php',
            'Permissions' => 'Permissions.php',
            'Config' => 'Config.php',
            'Tasks' => 'Tasks.php',
        );

        foreach ($urls as $name => $url) {
            print '<a '.(($currentPage === $name) ? ' class="active" ': '').' href="'.$url.'">'.$name.'</a>';
        }
    ?>
</div>