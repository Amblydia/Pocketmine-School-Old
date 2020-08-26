---
id: commands
title: Commands
sidebar_label: Commands
---
___
Using commands in a plugin enchants your Plugin! Commands can automatically and easily do things for you!  

Ok lets start by adding the "use" statements for you can use commands.  
```
// The Command
use pocketmine\command\Command;
      
// Person who does command
use pocketmine\command\CommandSender;
```
To setup the command we going to use a public function and inside the function we will add the command, like this:
```
public function onCommand(CommandSender $sender, Command $cmd, string $label, array $args) : bool {
  switch($cmd->getName()) { // Use switch to get the command input
    case "test": // In this case, we will make the command "/test"
      $sender->sendMessage("This Is A Test!"); // when the sender execute the command it sends the sender a message that says "This Is A Test".
    break; // Use break to stop the operations
  }
  return true;
}
```
Here is another example of a command instead of sending a message it gives the sender 4 steaks and a message!
```
public function onCommand(CommandSender $sender, Command $cmd, string $label, array $args) : bool {
  switch($cmd->getName()) {
    case "test":
      $sender->getInventory()->addItem(Item::get(364,0,4)); //364 = Item ID Value (in this case, 364 is steak)
      $sender->sendMessage("You have just recieved 4 steak!");
    break;
  }
  return true;
}
```
What would happen if the CONSOLE was the command sender? How do we prevent the Console?  

To prevent the situation above we are going to use an if statement including "instanceof"  
```
public function onCommand(CommandSender $sender, Command $cmd, string $label, array $args) : bool {
  switch($cmd->getName()) {
    case "test":
      if(!$sender instanceof Player) { // Basically this checks if the Command Sender is NOT a player
        $sender->sendMessage("This Command Only Works for players! Please perform this command IN GAME!"); // For Console Command Sender
      } else { //if command sender is not a CONSOLE
        $sender->getInventory()->addItem(Item::get(364,0,4));
        $sender->sendMessage("You have just recieved 4 steak!");
      }
    break;
  }
  return true;
}
```
Now that we know how to do "basic" commands, let's make the command even better by allowing the user to choose how many steaks he wants by using ARGUMENTS!  

We'll take a look at a variable that we added without knowing what it was... I'm talking about the $args variable.  

It basicly stores every single arguments you use in an array. But how is it stored? Like this:
```
  /command <$args[0]> <$args[1]> <$args[2]> <$args[3]> ...
```    
Warning: Arrays always starts from 0 !
```
public function onCommand(CommandSender $sender, Command $cmd, string $label, array $args) : bool {
  switch($cmd->getName()) {
    case "test":
      if(!$sender instanceof Player){
        $sender->sendMessage("This Command Only Works for players! Please perform this command IN GAME!");
      } else {
        $sender->getInventory()->addItem(Item::get(364,0,(int)$args[0])); // We choose the first argument as the count !
        $sender->sendMessage("You have just recieved" . $args[0] . " steak!");
      }
    break;
  }
  return true;
}
```
As you can see, now we can use the /test <steaks number> and it will give us the number of steaks we want!  

But wait, what if the user doesn't enter the argument? The command won't work! To solve that issue, we need to add a parser to check if no argument "0" was entered, and if that's the case, "creating" it.  

We'll use function isset which allows us to check if a variable is defined. Let's what this give use in our code !  
```
public function onCommand(CommandSender $sender, Command $cmd, string $label, array $args) : bool {
  switch($cmd->getName()) {
    case "test":
      if(!$sender instanceof Player) {
        $sender->sendMessage("This Command Only Works for players! Please perform this command IN GAME!");
      } else {
        if(!isset($args[0])) { // Check if argument 0 isn't defined.
          $args[0] = 4; // Defining $args[0] with value 4 this means giving the player 4 steaks
        }
        $sender->getInventory()->addItem(Item::get(364,0,(int)$args[0]));
        $sender->sendMessage("You have just recieved" . $args[0] . " steak!");
      }
    break;
  }
  return true;
}
```
But what if the user don't enter a number? And even if it's a number, what if it's negative?  

We also need to check this in our code! We will use a new function is_int which will allow us to check if a variable is an integer.  
```
public function onCommand(CommandSender $sender, Command $cmd, string $label, array $args) : bool {
  switch($cmd->getName()) {
    case "test":
      if(!$sender instanceof Player){
        $sender->sendMessage("This Command Only Works for players! Please perform this command IN GAME!");
      } else {
        if(!isset($args[0]) or (is_int($args[0]) and $args[0] > 0)) { // Check if argument 0 is an integer and is more than 0.
          $args[0] = 4; // Defining $args[0] with value 4 this means giving the player 4 steaks
        }
        $sender->getInventory()->addItem(Item::get(364,0,$args[0]));
        $sender->sendMessage("You have just recieved" . $args[0] . " steak!");
      }
    break;
  }
  return true;
}
```
And that's it! You made your first command with arguments!
