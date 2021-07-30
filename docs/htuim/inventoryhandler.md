---
id: inventoryhandler
title: Inventory Handler
sidebar_label: Inventory Handler
---
___
To create a Fake Inventory Handler we need to first add "use" statement
```PHP
use muqsit\invmenu\InvMenuHandler; 
```

after that you have to add this in onEnable to register InvMenuHandler to handle Inventory
```PHP
public function onEnable(){
    if(!InvMenuHandler::isRegistered()){
        InvMenuHandler::register($this);
    }
}
```
