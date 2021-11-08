---
id: plugin.yml
title: plugin.yml
sidebar_label: plugin.yml
---
___

<!-- TODO: Improve English explanation -->

Every plugin needs a `plugin.yml` file to function. The `plugin.yml` file contains properties and rules which needs to be satisfied for plugins to load properly. For example, if a plugin specifies specific protocol versions in `plugin.yml`, PocketMine-MP will only load the plugin if one of the protocol versions matches the server protocol version.

By default, PocketMine-MP searches for a `plugin.yml` inside every plugin and loads them based on the specified properities and rules inside the `plugin.yml` file. PocketMine-MP will not load a plugin if the server configuration doesn't satisfy with a plugin rule, for example if a plugin depends on another plugin and the other plugin doesn't exists in the server.

In this page, you'll learn how to make a basic functioning `plugin.yml` file in your plugin, alongside with other advanced and optional rules. 

## `name:`
This is where you add the name of your plugin.  
Example:
```yaml
name: YourPluginName
```

## `main:`
main is where you put the path to the main file in the src folder.  
Here are four ways you can make the path:
```yml
main: PluginName\YourName\Main
#or
main: YourName\Main
#or
main: YourName\PluginName\Main
#or
main: PluginName\Main
```

* "PluginName" : This is your plugin name  
* "YourName" : This is your name
## `version:`
This is where you declare your plugin version. It is recommended to use semantic versioning (x.x/x.x.x).  
Example:
```yml
version: 1.0.0
```

## `api:`
This is where you declare your PocketMine-MP API version(s) which is compatible with your plugin.  
It should contain the minimum API minor and patch version for every major API version supported by the plugin.  
You can declare mutiple API versions by using [].  
Example:
```yml
api: 3.0.0
# or
api: [3.0.0, 4.0.0]
```

## `mcpe-protocol:`
This is where you can declare your minecraft protocol version supported by your plugin.  
Usually you don't need this, but it is recommended to declare it if you use classes from `pocketmine\network\mcpe` for compatibility reasons.  
You may need to update this if a new Minecraft version released.
Example:
```yml
mcpe-protocol: 408
```

## `author:`
This is where you declare your plugin author (usually your name).  
Example:
```yml
author: YourName
```

## `description:`
This is where you can declare your plugin description.  
Example:
```yml
description: YourPluginDesc
```

## `commands:`
If your plugin uses commands you need to register the commands here.  
Example:
```yml
commands:
  ExampleCommand:
    description: CommandDesc
    aliases: [CommandAlias]
    permission: example.command
```

## `permissions:`
If you registered commands (either in plugin.yml or code), you need to declare the permission usage.  
Example:
```yml
permissions:
  example.command:
    description: PermissionDesc
    default: true
```
**Note**:  
There are 4 possible values for the `default` key:  
1. `true` - Anyone can use the command.
2. `op` - Only OP-ped players can use the command.
2. `notop` - Only not OP-ped players can use the command.
4. `false` - Nobody can use the command (except from console).
