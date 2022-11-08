---
sidebar_position: 4
---
# Main

In [plugin.yml](plugin.yml.md#main) we added a path `main`. Now depending on the path we added for this tutorial, we will first create a folder called `YourPluginName` in the src folder and in this folder we will create another folder called `YourName` and in this folder we will create a file called `Main` with the extension `.php` 

Now lets start adding some code to `Main.php`.

## Namespace
Here you would add the sub-folders of the src dictionary. Based off `main` path in [plugin.yml](plugin.yml.md#main).
```php title="Main.php"
<?php

namespace YourPluginName\YourName;
```

## Use Statement
In a new line you will now add a `use` statement.
```php title="Main.php"
use pocketmine\plugin\PluginBase;
```
This statement is used to enable our plugin.

## Class
We will now add the `class`. In the `class` we will be able to enable your plugin. But to enable your plugin you need to extend your `class`.
```php title="Main.php"
class Main extends PluginBase { }
```

## Function
In the `class` we will add a function to enable your plugin and to do so we will be using the `onEnable()` function like so:
```php title="Main.php"
class Main extends PluginBase { 

    protected function onEnable() : void 
    {  
        $this->getLogger()->info("Plugin has been Enabled");
    }

}
```

At the end your `Main.php` file should look like this:
```php title="Main.php"
<?php

namespace YourPluginName\YourName;

use pocketmine\plugin\PluginBase;

class Main extends PluginBase { 

    protected function onEnable() : void
    {  
        $this->getLogger()->info("Plugin has been Enabled");
    }

}
```

Now when you start your server your console should have a message saying `Plugin has been Enabled`.
