---
id: config
title: Config
sidebar_label: Config
---
___
Config files can make your plugin one of the most customisable in the world! Using a config file can be split into 3 topics:  
1. Saving default config
2. Getting data from the config
3. Setting data to the config  

## 1- Creating a default config:  

Go to your root plugin folder and create a folder called "resources".  

Inside of it, create a file "config.yml" and put the default config you want to display to the user.  

Yaml works like array:   
```yaml
    key: value
``` 
## 2- Taking data from the config: 

If you wanna get the data from your config, add this line:      
```php
    $keyFromConfig = $this->getConfig()->get("key"); // This will return the element "key" from the config.
```
You can also reload your config before if you want to get any config options that have been changed during runtime.
```php
    $this->reloadConfig();
```
## 3- Setting data to the config: 

Setting data to the config helps you to correct wrong values inputed by the user.

To set data to the config, add this line to your code when you want to set the data to the config.  
```php
    $this->getConfig()->set("key", "example"); // This will set the element "key" of the config to "example".
```
But remember that you need to save the config to apply changes in the file.  
```php
    $this->saveConfig();
```
