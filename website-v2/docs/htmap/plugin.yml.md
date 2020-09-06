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
name: Name of Your Plugin  # This will be the name of your plugin
author: Your Name
api: 3.11.7
version: 1.0  # This is where you put the version of the plugin
main: ExampleName/Main
# "ExampleName" will be a folder in the src folder and "Main" will be the file in the "ExampleName" folder

# This will be the commands of your plugin. If your plugin has commands do this:
commands:
	test:  #"test" will be the name of the command
		description: Put any description
		usage: /test
		permission: test.command  # This will be the command's permission
	test2: # Second command
		description: Put any Description
		usage: /test2
		permission: test2.command
 
# Declaring permissions' default usage for commands using the permissions below
permissions:
	test.command:  # Will declare the command that uses the test.command permission (in this case /test)
		default: true  # Anyone can execute the command that uses this permission (non-OP and OP players)
	test2.command:
        default: op  # The command that uses the permission can only be executed by OP players
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
