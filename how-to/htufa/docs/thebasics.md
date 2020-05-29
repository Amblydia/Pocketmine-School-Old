---
id: thebasics
title: The Basics
sidebar_label: The Basics
---
___
Here we will teach you all of the items of code that are required in order for the plugin to work.
```
<?php 

namespace ExampleName; 
//This should be the subfolder of the src directory. Based off of the folder structure example in "plugin.yml".

# Next, we need to add a "use" statement:

use pocketmine\plugin\PluginBase;

#Then, we type the class statement:
class Main extends PluginBase {  
/*
* This has a very simple format: 
* class (The File Name) extends PluginBase { 
*/

}
```

## onEnable() Function  
After the Class statement we add the onEnable() function and in it we add a message to the console everytime the plugin enables.
```
<?php

namespace ExampleName;

use pocketmine\plugin\PluginBase;

class Main extends PluginBase { 

  public function onEnable() {  // the onEnable() function
    $this->getLogger()->info("Plugin has been Enabled"); //A message every time the plugin enables
  }

}
```

You can also use onLoad() and onDisable() function the same way.

```
  public function onLoad(){
    $this->getLogger()->info("Loading Plugin");
  }

  public function onDisable(){
    $this->getLogger()->info("Plugin Disabled");
  }
```

