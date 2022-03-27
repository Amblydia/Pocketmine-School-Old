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

### `name:`
This is where you add the name of your plugin.  
Example:
```yaml
name: YourPluginName
```

### `main:`
This is where you declare the path to the main file in the src folder.  
Here's an example:
```yaml
main: YourPluginName\YourName\Main
```

### `version:`
This is where you declare your plugin version. It is recommended to use semantic versioning (x.x/x.x.x).  
Example:
```yaml
version: 1.0.0
#or
version: 1.0
```

### `api:`
This is where you declare your PocketMine-MP API version(s) which is compatible with your plugin.  
It should contain the minimum API minor and patch version for every major API version supported by the plugin.  
Example:
```yaml
api: 4.0.0
```
You can declare multiple API versions by using `[ ]`.  
Example:
```yaml
api: [3.0.0, 4.0.0]
```

:::note
`name`, `main`, `version` and `api` are required.
:::

### `commands:`
If your plugin uses commands you need to register the commands here.  
Example:
```yaml
commands:
  example:
    description: Example command
    usage: "/example"
    permission: exampleplugin.command.example
```

### `permissions:`
If you registered commands (either in plugin.yml or code), you need to declare the permission usage.  
Example:
```yaml
permissions:
  yourpluginname.command.example:
    description: "Allows the user to run the example command"
    default: true
```
:::note 
There are 4 possible values for the `default` key:
1. `true` - Anyone can use the command.
2. `op` - Only OP-ped players can use the command.
3. `notop` - Only not OP-ped players can use the command.
4. `false` - Nobody can use the command (except from console).
:::

:::note
The rest of the Keys are optional.
:::

### `mcpe-protocol:`
This is where you can declare your minecraft protocol version supported by your plugin.  
Usually you don't need this, but it is recommended to declare it if you use classes from `pocketmine\network\mcpe` for compatibility reasons.  
You may need to update this if a new Minecraft version released.
Example:
```yaml
mcpe-protocol: 408
```

### `author:`
This is where you declare your name as the plugin author.  
Example:
```yaml
author: YourName
```
If you want to add multiple authors, use `authors` instead.\
Example:
```yaml
authors: [Author1, Author2]
```

### `description:`
This is where you  declare your plugin description.  
Example:
```yaml
description: YourPluginDesc
```

### `website:`
This is where you declare your website.
Example:
```yaml
website: https://github.com/YourGithub/YourPluginName
```
