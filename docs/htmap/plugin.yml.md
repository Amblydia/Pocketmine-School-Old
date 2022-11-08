---
sidebar_position: 3
---
# plugin.yml

<!-- TODO: Improve English explanation -->

Every plugin needs a `plugin.yml` file to function. The `plugin.yml` file contains properties and rules which needs to be satisfied for plugins to load properly. For example, if a plugin specifies specific protocol versions in `plugin.yml`, PocketMine-MP will only load the plugin if one of the protocol versions matches the server protocol version.

By default, PocketMine-MP searches for a `plugin.yml` inside every plugin and loads them based on the specified properities and rules inside the `plugin.yml` file. PocketMine-MP will not load a plugin if the server configuration doesn't satisfy with a plugin rule, for example if a plugin depends on another plugin and the other plugin doesn't exists in the server.

In this page, you'll learn how to make a basic functioning `plugin.yml` file in your plugin, alongside with other advanced and optional rules.

## Required fields

Before we start, please open the `plugin.yml` file you created in the previous topic.

Now we're going to add our plugin name and version in the `plugin.yml` file. We're also going to add the supported API version as well as the path to our plugin's main class, because it's required for the plugin to load.

Add this code into your `plugin.yml` file, replacing `YourPluginName` with a plugin name you want to use, and `YourName` with your name:

```yml title="plugin.yml"
name: YourPluginName
version: 1.0.0
api: 4.0.0
main: YourPluginName\YourName\Main
```

:::note
Always try to use `UpperCamelCase` for plugin names.
:::

Now I'm going to explain what each key means.

### `name:`

Type: `string`  
Name of the plugin. This may contain letters, numbers, hyphens, periods and underscores. It may also contain spaces, but this is discouraged.

### `version:`

Type: `string`  
This is where you declare your plugin version. It is recommended to use semantic versioning (visit [semver](https://semver.org) for more information).

### `main:`

Type: `string`  
Fully-qualified name of the main class. This class must meet the following criteria:  
- MUST NOT be abstract  
- MUST implement the `pocketmine\plugin\Plugin` interface  

This is where you declare the path to the Main class in the `src` folder. This will be explained in the next topic.

### `api:`

Type: `string` or `string[]`  

The API version(s) that the plugin is compatible with. If the plugin’s API version is not compatible with that of the server, the server will refuse to load the plugin. More info on API versioning can be found here <api_version_spec>.

## Optional fields

Do you want to add your name, plugin description, plugin website, prefix as well as authors in your `plugin.yml` file? Fortunately, all of them are supported by PocketMine-MP.

Now I'm going to explain what each key means.

### Cosmetics 

#### `website:`

Type: `string`  
Website for the plugin.

#### `description:`

Type: `string`  
Short description of the plugin.

#### `prefix:`

Type: `string`  
Alternative prefix to use in the plugin’s log messages. Defaults to the plugin name.

#### `author:`

Type: `string`  
Author name of the plugin.

#### `authors:`

Type: `string[]`  
A list of author names, if there are more than one. If both `author` and `authors` are defined, a list will be formed containing both.


### Plugin loading controls:

#### `load:`

Type: `string`  
When in the startup sequence to prefer loading this plugin. Currently can be one of `STARTUP` or `POSTWORLD`. See plugin load order.

#### `depend:`

Type: `string` or `string[]`  
List of plugins that this plugin depends on. Plugin will not load if any of these plugins are missing.

#### `softdepend:`

Type: `string` or `string[]`  
List of plugins that the plugin can optionally depend on. Plugins in this list must load prior to the plugin soft-depending on them.

#### `loadbefore:`

Type: `string` or `string[]`  
List of plugins that this plugin must load prior to. Works like a soft-dependency in reverse.

#### `extensions:`

Type: `array`   
List of PHP extensions that the plugin requires. Plugin will not load if any are missing or have unmet version constraints.

#### `mcpe-protocol:`

Type: `int` or `int[]`  
List of Minecraft PE network protocol versions the plugin is compatible with. Plugin will fail to load if the current server protocol version is not in this list.

#### `os:`

Type: `string` or `string[]`  
List of operating systems that the plugin will run on. If not present, the plugin will load on any OS. Possible values include `win`, `mac`, `linux`, `android`, `ios`, `bsd`.

### Misc

#### `commands:`

Type: `array`  
Definitions of commands implemented by this plugin in the `onCommand()` of the `PluginBase`.  

Example:  
```yml
commands:
  # The name of the command the user will type to execute it
  example:
    # Description that will be shown in help command
    description: Example command
    # Shown to the user if they type the command in incorrectly
    usage: "/example"
    aliases:
      - ex
      - examp
    # Permission required to run the command
    permission: exampleperm.command.example
    # Shown to the user if they don't have permission to run the command
    permission-message: "You do not have permission to use this example command!"
```

#### `permissions:`

Type: `array`  
List of permissions defined by this plugin, usually used for commands.  

Example: 
```yml
permissions:
  exampleperm.command.example:
    description: "Allows the user to run the example command"
    # Default state of the permission. Explanation of each value:
    # op: only op players have this permission by default
    # true: everyone has this permission by default
    # false: no one has this permission by default
    default: true
```

#### `src-namespace-prefix:`

Type: `string`  
Base namespace of the classes in your `src/` folder. Defaults to empty string.  
This allows you to have a longer namespace for your classes without having to create useless nested folders in your plugin structure.  

Examples:

| Value of `src-namespace-prefix` | Name of class including namespace | Path class will be loaded from |
| ----------- | ----------- | ----------- |
| (empty) | - `YourName\PluginName\Main` <br/> - `YourName\PluginName\SubNamespace\OtherClass` | - `src/YourName/PluginName/Main.php` <br/> - `src/YourName/PluginName/SubNamespace/OtherClass.php` |
| `YourName\PluginName` | - `YourName\PluginName\Main` <br/> - `YourName\PluginName\SubNamespace\OtherClass` | - `src/Main.php` <br/> - `src/SubNamespace/OtherClass.php` |


## Further Learning and Conclusion

After following this topic, your final `plugin.yml` file should look something like these:

```yml title="plugin.yml"
name: YourPluginName
version: 1.0.0
api: 4.0.0
main: YourPluginName\YourName\Main
author: YourName
description: Description
website: Website
```
___