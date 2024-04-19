---
sidebar_position: 8
---
# Tasks

## Creating a Simple Plugin Task
We'll take our last plugin and add a simple task to it that tells the user when 10 seconds have passed.  

First, go to your "Main.php" folder and create a new folder called "tasks".  

Create a new file called "MyTask.php".  

And put those contents inside it.  
```php title="MyTask.php"
<?php // As always when you start a PHP file

namespace YourPluginName\YourName\tasks; // Use the same namespace as in your first file but add a \tasks which symbolises that this file is in the subfolder "tasks"

use pocketmine\scheduler\Task; // This is the class that your task will extend to be a plugin task.
use ExampleName\Main; // This will allow us to use our main class. It is a required argument for a plugin task.
            
class MyTask extends Task { // Remember that your task must have the same name as your file!

// First we need a __construct function which is used when you create a class to set default variables, etc...
    public function __construct(Main $main, string $playername) { // The arguments you define here depend on what you want to do, except for your base.
       $this->main = $main; //You can retrieve your main class at anytime and use its methods on your class by using $this->getOwner()
       $this->playername = $playername; // So we can retreive the player for later.
    }

// Then we'll create an onRun function that will be called when the time has passed for the execution of the task.
    public function onRun() {
        $player = $this->getOwner()->getServer()->getPlayer($this->playername()); // This retreives the main class with $this->getOwner() then asks the server for the player with the name $this->playername
        if($player instanceof Player) { // Basically checks if the player we retreive is online.
            $player->sendMessage("10 seconds has past!"); // Sends him a message !
        }
    }
// Then we create a getOwner function to return the Main class
    public function getOwner() : Main {
        return $this->main;
    }
}
```
That's it you created a task ! Now we'll see how to execute it.  

First we will make it execute 1 time, but delayed. 

In your main class, where you did your "example" command.  
```php title="Main.php"
    $task = new tasks\MyTask($this, $sender->getName()); // Create the new class Task by calling
    $this->getScheduler()->scheduleDelayedTask($task, 10*20); // Counted in ticks (1 second = 20 ticks)
```
So the player will receive a message 10 seconds after he executed the command /example !  

But now, what if we want the player to receive a message each 10 seconds?  

Well, there's a special function for that! We don't even need to change the task!  
```php title="Main.php"
    $task = new tasks\MyTask($this, $sender->getName()); // Create the new class Task by calling
    $this->getScheduler()->scheduleRepeatingTask($task, 10*20); // Counted in ticks (1 second = 20 ticks)
```
