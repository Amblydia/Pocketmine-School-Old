---
id: config
title: Config
sidebar_label: Config
---
___
Config files can make your plugin one of the most customisablest in the world! But to use a config file, we need multiple things:  
1. A default config file, saved on a resource folder
2. Saving the config so the user can edit it
3. Taking data from the config
4. Setting data to the config  

## 1- Creating a default config:  

Go to your root plugin folder and create a folder called "resources".  

Inside of it, create a file "config.yml" and put the default config you want to display to the user.  

Yaml works like array:   
```
        key: value
``` 
## 2- Saving the config:
Saving the config when the plugins enables after you succefully made your config, go to your main file and add to your onEnable function:
```
    $this->saveDefaultConfig(); // Saves config.yml if not created.
    $this->reloadConfig(); // Fix bugs sometimes by getting configs values
```
## 3- Taking data from the config: 

If you wanna get the data from your config, add this line:      
```
    $keyFromConfig = $this->getConfig()->get("key"); // This will return the element "key" from the config.
```       
Its also a good practive to reload your config before to be sure to get the last user choice.  
```
    $this->reloadConfig();
```
## 4- Setting data to the config: 

Setting data to the config helps you to save data for games, or to correct wrong values inputed by the user.  

To set data to the config, add this line to your code when you want to set the data to the config.  
```
    $this->getConfig()->set("key", "example"); // This will set the element "key" of the config.to example.
```
But remember that you need to save the config to apply changes in the file.  
```
    $this->getConfig()->save(); // Saves the config
```