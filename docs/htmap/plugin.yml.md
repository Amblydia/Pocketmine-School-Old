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

## Adding Required Information

Before we start, please open the `plugin.yml` file you created in the previous topic.

Now we're going to add our plugin name and version in the `plugin.yml` file. We're also going to add the supported API version as well as the path to our plugin's main class, because it's required for the plugin to load.

Add this code into your `plugin.yml` file, replacing `YourPluginName` with a plugin name you want to use, and `YourName` with your name:

```yaml
name: YourPluginName
version: 1.0.0
api: 4.0.0
nain: YourPluginName\YourName\Main
```

::note
Always try to use `UpperCamelCase` for plugin names.
::

Now I'm going to explain what each keys means.

### `name:`

This is where you add the name of your plugin.

### `version:`

This is where you declare your plugin version. It is recommended to always use semantic versioning (visit [this website](https://semver.org) for more information).

### `api:`

This is where you declare your PocketMine-MP API version(s) which is compatible with your plugin. It should contain the minimum API minor and patch version for every major API version supported by the plugin.

For now we'll just use `4.0.0`, but if you want to support other API versions (e.g. API 3), you can add something like `[3.0.0, 4.0.0]`.

### `main:`

This is where you declare the path to the Main class in the `src` folder. This will be explained in the next topic.

## Adding Optional Information

Do you want to add your name, plugin description, plugin website, permissions as well as commands in your `plugin.yml` file? Fortunately, all of them are supported by PocketMine-MP.

This time we're going to add the plugin author, description and website in the `plugin.yml` file. The other two information will be explained in upcoming topics.

Add this code into your `plugin.yml` file, replacing `YourName` with your name, `Description` with a plugin description you want to use, and `Website` with your website:

```yaml
author: YourName
description: Description
website: Website
```

::note
You can remove `website:` if you don't have a website.
::

Now I'm going to explain what each keys means.

### `author:`

This is where you declare your name as the plugin author.

You can add more than one author by using `authors: [Author1, Author2]` instead.

### `description:`

This is where you declare your plugin description.

### `website:`

This is where you declare your website.

## Further Learning and Conclusion

There are a plenty of `plugin.yml` options I won't mention in this topic, but you can learn more about all the possible `plugin.yml` options in [this website](https://doc.pmmp.io/en/rtfd/developer-reference/plugin-manifest.html).

Anyways, after following this topic, your final `plugin.yml` file should look something like these (remember, you don't have to add `website:` if you don't have a website):

```yaml
name: YourPluginName
version: 1.0.0
api: 4.0.0
nain: YourPluginName\YourName\Main
author: YourName
description: Description
website: Website
```

___

Congratulations, you've created your first `plugin.yml` file. Now you're ready to continue into the next topic!
