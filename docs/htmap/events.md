---
id: events
title: Events
sidebar_label: Events
---
___
Now we are going to learn about something that makes plugins how they are! EVENTS.  

Before we start were going to add some new "use" statements and changed the "class" statement a bit and add a new line to the onEnable() function because we are using events.
```php
<?php

namespace ExampleName;

use pocketmine\plugin\PluginBase;

// Event
use pocketmine\event\player\PlayerJoinEvent;  //This is the event 

// Player "class"
use pocketmine\Player;

// Server "class"
use pocketmine\Server;

// Event Listener
use pocketmine\event\Listener;

class Main extends PluginBase implements Listener{ //Added "implements Listener" because of the Listener event

    public function onEnable(){
        $this->getServer()->getPluginManager()->registerEvents($this,$this); // This is the new line 
        $this->getLogger()->info("Plugin Enabled");
    }

}
```

## PlayerJoinEvent
PlayerJoinEvent is the event of a player joining.  

So were going to broadcast a message saying someone joined in a fancy way and give that someone an item.

```php
public function onJoin(PlayerJoinEvent $event){
    $player = $event->getPlayer();  //This gets the player
    $name = $player->getName();  //Gets the Name of the player
    $inv = $player->getInventory();  //Gets the player Inventory

    $this->getServer()->broadcastMessage("Welcome $name to my server");  //This broadcast a Message to the whole server  
    $item = Item::get(345, 0, 1); //The item that you want to give
    $inv->setItem(0, $item);  //This gives the item to the player, '0' means the first slot of the players hotbar so you can change to any slot
}             
```