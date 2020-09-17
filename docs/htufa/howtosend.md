---
id: howtosend
title: How To Send
sidebar_label: How To Send
---
First we will get the command setup
```
public function onCommand(CommandSender $sender, Command $command, string $label, array $args) : bool{
		if($command->getName() === "example"){
			if(!$sender instanceof Player){
      }
```
Then we will use this code to send form
```
public function onCommand(CommandSender $sender, Command $command, string $label, array $args) : bool{
		if($command->getName() === "example"){
			if(!$sender instanceof Player){
      ExampleForm($sender)
      }
```

