---
id: pluginstructure
title: Plugin Structure
sidebar_label: Plugin Structure
---
___
To make a PocketMine-MP plugin, you need a structure for your plugin. You can [generate them automatically](#generating-automatically) using DevTools or [make your own](#making-manually) plugin structure.

## Generating Automatically
Start your PocketMine-MP server and type the command below in the console to create a plugin structure automatically:
```
genplugin <YourPluginName> <YourName>
```
:::note
Don't use `/` when typing commands in console!
:::

It will generate a folder that is named your plugin name inside the `plugins` folder where your server is located. Inside it you have all the essential files and folders for your plugin.

## Making Manually
In your PocketMine-MP server folder, you would find a folder called `plugins` in there create a new folder and that folder will be your plugin, rename that folder to your plugin name, we will be renaming it to TestPlugin.   

In the plugin folder or TestPlugin create a file named `plugin.yml` and a folder named `src`.

Now your file structure should look like this:  
```yml title="/Pocketmine-Server*/plugins/"
TestPlugin 
    ├── plugin.yml 
    └── src
```
:::note
`Pocketmine-Server` is the folder where you have your server setup at.
:::
___
Now you've made a structure for your PocketMine-MP plugin! In the next page, you'll learn how to configure `plugin.yml` file to give your plugin a name, version, author, and much more!

Click the "Next" button to continue learning when you're ready!
