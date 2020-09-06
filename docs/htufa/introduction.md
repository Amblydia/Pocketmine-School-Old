---
id: introduction
title: Introduction
sidebar_label: Introduction
---
___
## What's FormAPI?
FormAPI is a simple API for creating forms for Minecraft PE/BE clients.  

It was created by jojoe77777  
His Github: https://github.com/jojoe77777/FormAPI   
His Discord: https://discord.gg/MzKQpWZ  

## How to install?
You can either download FormAPI from <a href="https://poggit.pmmp.io/p/FormAPI">Poggit</a> and install it on your server or use libFormAPI which is basically a virion that can be injected to your plugins.

To use libFormAPI virion, enable your repository at <a href="https://poggit.pmmp.io/ci">Poggit CI</a> and put this in your .poggit.yml file:
```
libs:
    - src: jojoe77777/FormAPI/libFormAPI
      version: ^1.3
```
After you commit the changes, you will see that your plugin has been injected by libFormAPI in Poggit CI.

If you don't want to use libFormAPI, you can add this in your plugin.yml to avoid crashes:
```
depend: FormAPI
```
