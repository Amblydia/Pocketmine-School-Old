---
id: events
title: Events
sidebar_label: Events
---
___
<!-- TODO LATER
PocketMine-MP has an events' system which allows plugins to react to, modify the outcome of, and prevent the result of events.

## How it works
1. Something registers a handler for a given event.
2. Just before the event takes place, the handler is called and passed an object containing information about the event. This allows handlers to react to, modify (and in some cases prevent) an event from taking place.
3. The event takes place (or does not take place if cancelled) as defined by the object which contains the event information.

:::note
All event handlers are currently executed before the event takes place. This is a common pitfall of PocketMine-MP plugin developers - when an event handler is executed, the actual event has not yet taken place.
:::
-->

:::note
Please see the [PMMP Docs](https://doc.pmmp.io/en/rtfd/developer-reference/events.html) for explanation on how events works. This section currently only explains an example on how to create an event. This will be updated in the future.
:::

## Creating an Event Listener Class

Create a new file named `EventListener.php` inside the directory where your Main class file is located at. Then open the file and add this code (replace the namespace with your plugin's namespace):

```php title="EventListener.php"
<?php

namespace YourPluginName\YourName;

use pocketmine\event\Listener;

class EventListener implements Listener{

}
```

## Creating an Event Handling Method

We're going to use `PlayerMoveEvent` as an example.

First, import the `PlayerMoveEvent` class:

```php title="EventListener.php"
use pocketmine\event\player\PlayerMoveEvent;
```

Second, add a method with `PlayerMoveEvent $event` as its argument. You can use any method name you like, but the method must be public and must return `void` This time we're going to use `onPlayerMove`:

```php title="EventListener.php"
public function onPlayerMove(PlayerMoveEvent $event): void{

}
```

## Handling the Event

In this example, we want to print the player's origin and target location in the player's chat, and cancel the event to prevent the player from moving.

Before that, we need to check if the event has been cancelled by another plugin. If it's indeed has been cancelled, we'd like to stop the event handling. To do that, add this code into the method we've just created:

```php title="EventListener.php"
if($event->isCancelled()){ // Checks if the event has been cancelled by another plugin
    return; // Stops the event handling
}
```

Now we can do what we wanted safely. Please add this code under the code we've just added:

```php title="EventListener.php"
$player = $event->getPlayer(); // Saves the player instance as a variable to make the code a bit cleaner
$player->sendMessage("From: " . $event->getFrom()); // This should call the Location->__toString() method
$player->sendMessage("To: " . $event->getTo());

$event->cancel(); // Cancels the event to prevent the player from moving
```

___

After doing the three sections above, your `EventListener` class should look like these:

```php title="EventListener.php"
<?php

namespace YourPluginName\YourName;

use pocketmine\event\Listener;
use pocketmine\event\player\PlayerMoveEvent;

class EventListener implements Listener{
    public function onPlayerMove(PlayerMoveEvent $event): void{
        if($event->isCancelled()){ // Checks if the event has been cancelled by another plugin
            return; // Stops the event handling
        }
        
        $player = $event->getPlayer(); // Saves the player instance as a variable to make the code a bit cleaner
        $player->sendMessage("From: " . $event->getFrom()); // This should call the Location->__toString() method
        $player->sendMessage("To: " . $event->getTo());

        $event->cancel(); // Cancels the event to prevent the player from moving
    }
}
```

If not, please check again what you may have missed before continuing.

## Registering the Event Listener Class

To make our `EventListener` class work, we need to register it in our Main class, specifically while our plugin is enabling (that is, in the `onEnable` method).

To do that, please open your Main class, then add this code in your `onEnable` method:

```php title="Main.php"
$this->getServer()->getPluginManager()->registerEvents(new EventListener(), $this);
```

This time we don't need to import the `EventListener` class, because it's located in the same directory as our Main class. Please always keep this in mind.

___

Congratulations, you've created your first event listener class and handler. Now you're ready to test it!
