---
id: plugin.yml
title: plugin.yml
sidebar_label: plugin.yml
---
___
First create a folder and name it whatever you want because this folder will be your plugin.  
In the folder create a file and name it plugin.yml.  

In this file you will add:  

```
name: Name of Your Plugin
author: Your Name
api: 3.11.7
version: 1.0  #This is where you put the version of the plugin
main: ExampleName/Main
# "ExampleName" will be a folder in the src folder and "Main" will be the file in the "ExampleName" folder
 
# Commands If ur plugin has commands do this:
command:
	test:  #"test" this is the name of the command
		description: Put any description
		usage: /test
	test2:  #Second command
		description: Put any Description
		usage: /test2
 
# Permissions 
permissions:
	test.command:
		default: true
	test2.command:
        default: true
```
So after you add your plugin.yml make a folder and name it src, in this folder you will add a new folder called "ExampleName" (were nameing it "ExampleName" because that is what we named it in the plugin.yml).  

Now in the "ExampleName" folder we add a new file and name it "Main.php" (were nameing it "Main.php" because that is what we named it in the plugin.yml and the .php is the extension).  

Now your file structure should look like this:  
```
PluginName 
    ├── plugin.yml 
    └── src
         └── ExampleName
                  └── Main.php
```