---
id: invclosehandler
title: Inventory Close Handler
sidebar_label: Inventory Close Handler
---
___
This is the same as Listener from the previous page, but the code from InvCloseListener will be executed when Inventory is closed
Dont forget to Add "use" statement
```PHP
use pocketmine\Player;
use pocketmine\inventory\Inventory;
```
The code in this CloseListener with the previous Listener is quite different
```PHP
$menu->setInventoryCloseListener(function(Player $player, Inventory $inventory) : void {
    //do something
});
```
``$player`` was the Player that Closed that Inventory\
``$inventory`` to Get Inventory you give ``setCloseListener``
