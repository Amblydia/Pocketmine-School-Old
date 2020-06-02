---
id: permissions
title: Permissions
sidebar_label: Permissions
---
___
You just learned how to add commands but you want only certain group of players to use it.  

Well lets teach you how to add Permissions to your commands, it very simple
```
public function onCommand(CommandSender $sender, Command $cmd, string $label, array $args) : bool {
  if($player->hasPermission("test.cmd")){ // we only add this one line just to add Permissions
    if($cmd->getName() == "test") {
      if(!$sender instanceof Player){
        $sender->sendMessage("This Command Only Works for players! Please perform this command IN GAME!");
      } else {
        if(!isset($args[0]) or (is_int($args[0]) and $args[0] > 0)) { 
          $args[0] = 4; 
        }
        $sender->getInventory()->addItem(Item::get(364,0,$args[0]));
        $sender->sendMessage("You have just recieved" .count($args[0]). " steak!");
      }
    }
  } //Don't forget to add this for the command to work
  return true;
}
```
Want to add a message to the player who doesn't have permission to use the command the here you go.
```
public function onCommand(CommandSender $sender, Command $cmd, string $label, array $args) : bool {
  if($sender->hasPermission("test.cmd")){ 
    if($cmd->getName() == "test") {
      if(!$sender instanceof Player){
        $sender->sendMessage("This Command Only Works for players! Please perform this command IN GAME!");
      } else {
        if(!isset($args[0]) or (is_int($args[0]) and $args[0] > 0)) { 
          $args[0] = 4; 
        }
        $sender->getInventory()->addItem(Item::get(364,0,$args[0]));
        $sender->sendMessage("You have just recieved" .count($args[0]). " steak!");
      }
    }
  } else {
    $sender->sendMessage("You don't have permission to use this command");
  } 
  return true;
}
```
