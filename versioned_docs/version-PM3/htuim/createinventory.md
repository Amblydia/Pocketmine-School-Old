---
id: createinventory
title: Create Inventory
sidebar_label: Create Inventory
---
___
first, we need to add "use" statement to get the InvMenu and Item we want to use
```PHP
use muqsit\invmenu\InvMenu;
use pocketmine\item\Item;
```
Next, we create an Inventory according to its Type (which is available in InvMenu: TYPE_CHEST, TYPE_DOUBLE_CHEST, TYPE_HOPPER)
```PHP
$menu = InvMenu::create(InvMenu::TYPE_CHEST); //example Using TYPE_CHEST
```
You can name your Inventory (Name at the top of the GUI)
```PHP
$menu->setName("My Inventory");
```
To access the Inventory you can use the following, You can access the Inventory below (InvMenu Inventory extends
Pocketmine Inventory class, so you can use all the methods in the Pocketmine Inventory)
```PHP
$inv = $menu->getInventory();

$inv->setContents([
    6 => Item::get(Item::IRON_BARS),
    12 => Item::get(Item::END_ROD)
]);
$inv->setItem(3, Item::get(Item::CHEST_MINECART));
$inv->addItem(Item::get(Item::HOPPER_MINECART));
$inv->removeItem(Item::get(Item::VINES));
```
To Send the Inventory to the player, you can use this:
```PHP
$menu->send($player); //$player is the player that Inventory wants to send, and not using $inv to send it but $menu
```
You can also make it readonly (cannot be changed or moved items in your inventory)
```PHP
$menu->readonly();
```
