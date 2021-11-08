---
id: handletransaction
title: Handling Transaction
sidebar_label: Handling Transaction
---
___
of course, we have to add the "use" statement first
```PHP
use muqsit\invmenu\transaction\InvMenuTransaction;
use muqsit\invmenu\transaction\InvMenuTransactionResult;
use pocketmine\item\Item;
```
To handle item transactions happening to and from the menu's inventory, you may specify a Closure handler that gets triggered by 
InvMenu every time a transaction occurs. You may allow, cancel and do other things within this handler. 
To register a transaction handler to a menu, use:
```PHP
$menu->setListener(function(InvMenuTransaction $transaction) : InvMenuTransactionResult{
	$player = $transaction->getPlayer(); // returns the "Player" that triggered the transaction
  
	$itemClicked = $transaction->getItemClicked(); // returns the "Item" the player clicked in the menu.
  
	$itemClickedWith = $transaction->getItemClickedWith(); // returns the "Item" the player had in their hand when clicking an item.
  
	$action = $transaction->getAction(); // returns a "SlotChangeAction" instance, to get the slot index of the item clicked from the menu's inventory.
  
	$inv_transaction = $transaction->getTransaction(); // returns the complete "InventoryTransaction" instance.
  
	return $transaction->continue(); //To Continue the Transaction
});

//Example!

$menu->setListener(function(InvMenuTransaction $transaction) : InvMenuTransactionResult{
  $itemClicked = $transaction->getItemClicked();
  $player = $transaction->getPlayer();
  if($itemClicked->getId() === Item::DIAMOND){
    $player->getInventory()->addItem(Item::get(Item::DIAMOND));
    $player->sendMessage("Yeah, You Got Diamond");
    return $transaction->discard(); //To Cancel The Transaction
  }
  return $transaction->continue(); //To Continue The Transaction
});
```
The example above shows that if the player moves his diamond, the player will get a diamond and send a message "Yeah, You Got Diamond"

To forcefully close or remove the menu from a player, you can use
```PHP
$transaction->getPlayer()->removeWindow($transaction->getAction()->getInventory());
```
