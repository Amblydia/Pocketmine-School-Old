---
id: createcustominventory
title: Create Custom Inventory
sidebar_label: Create Custom Inventory
---
___
So let's say you'd like to send players a dispenser inventory. Sadly, InvMenu doesn't ship with a ```InvMenu::TYPE_DISPENSER```. You can still create a dispenser InvMenu by registering a ```MenuMetadata``` object with the information about what a dispenser inventory looks like.

Actually, Don't Forget to add "use" statement:
```PHP
use muqsit\invmenu\metadata\SingleBlockMenuMetadata;
use muqsit\invmenu\InvMenuHandler;
use muqsit\invmenu\InvMenu;
use pocketmine\network\mcpe\protocol\types\WindowTypes;
use pocketmine\block\BlockFactory;
use pocketmine\block\Block;
```
follow the method below:
```PHP
public const TYPE_DISPENSER = "myplugin:dispenser";

public function registerCustomMenuTypes() : void{
	$type = new SingleBlockMenuMetadata(
		self::TYPE_DISPENSER, // identifier
		9, // number of slots
		WindowTypes::DISPENSER, // mcpe window type id
		BlockFactory::get(Block::DISPENSER), // Block
		"Dispenser" // block entity identifier
	);
	InvMenuHandler::registerMenuType($type);
}
```
and put this in function section ``onEnable()``
```PHP
public function onEnable(){
    $this->registerCustomMenuTypes();
}
```
So yeah, you can make this inventory using:
```PHP
$menu = InvMenu::create(self::TYPE_DISPENSER);
```
