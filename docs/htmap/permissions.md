---
id: permissions
title: Permissions
sidebar_label: Permissions
---
___
You just learned how to add commands but you want only certain group of players to use it.  

Well lets teach you how to add Permissions to your commands, it very simple
```php title="Main.php"
public function onCommand(CommandSender $sender, Command $cmd, string $label, array $args) : bool {
  switch($cmd->getName()) {
    case "test":
      if($player->hasPermission("test.cmd")) { // Use this to check whether the player have the permission or not (in this case we use the test.cmd permission)
        if(!$sender instanceof Player) {
          $sender->sendMessage("This Command Only Works for players! Please perform this command IN GAME!");
        } else {
          if(!isset($args[0]) or (is_int($args[0]) and $args[0] > 0)) { 
            $args[0] = 4; 
          }
          $sender->getInventory()->addItem(Item::get(364,0,$args[0]));
          $sender->sendMessage("You have just recieved" .count($args[0]). " steak!");
        }
      }
    break;
  }
  // Don't forget to add this for the command to work
  return true;
}
```
You can do this if you want to add a message to the player who doesn't have the permission to use the command:
```php title="Main.php"
public function onCommand(CommandSender $sender, Command $cmd, string $label, array $args) : bool {
   switch($cmd->getName()) {
     case "test":
       if($sender->hasPermission("test.cmd")) {
         if(!$sender instanceof Player) {
           $sender->sendMessage("This Command Only Works for players! Please perform this command IN GAME!");
         } else {
           if(!isset($args[0]) or (is_int($args[0]) and $args[0] > 0)) { 
            $args[0] = 4; 
           }
           $sender->getInventory()->addItem(Item::get(364,0,$args[0]));
           $sender->sendMessage("You have just recieved" .count($args[0]). " steak!");
         }
       } else {
         $sender->sendMessage("You don't have permission to use this command");
       }
     break;
  }
  return true;
}
```

Next the `plugin.yml` needs to be added to for the command to work.

```yml title="plugin.yml"
#This enrolls the command into the server to show in the /help menu
commands:
  test:
    description: Test command
    usage: "/test"
    aliases:
      - tt
      - tst
    permission: YourPluginName.YourName.command.test
    
#This is used to set permissions your command
permissions:
  testplugin.myxxmikeyxx.command.test:
    description: "Defualt only allow OP players to use test command"
    default: op
    # Default value options:
    # op: only op players have this permission by default
    # true: everyone has this permission by default
    # false: no one has this permission by default

```
