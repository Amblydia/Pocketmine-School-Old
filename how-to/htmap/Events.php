<!DOCTYPE html>
<html lang="en">
 
<head>
  <meta charset="utf-8" />
  <link rel="icon" type="image/png" href="">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pocketmine Plugin School</title>
  <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
 
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
  <script src="https://kit.fontawesome.com/25239cedf1.js" crossorigin="anonymous"></script>

  <link href="../css/custom.css" rel="stylesheet" type="text/css">
  <link href="../../css/ultra.css" rel="stylesheet" type="text/css">
  <link href="../../css/tomorrow-night-eighties.css" rel="stylesheet" type="text/css">

  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-148602502-2"></script>
  <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-148602502-2');
  </script>
</head>

<body>

<nav>
  <a class="mobile-nav"><i class="fas fa-bars"></i></a>
  <div class="navtitle">Pocketmine School</div>
  <a href="../../index.html">Home</a>
</nav>

<?php $currentPage = 'Events'; ?>
<?php include('sidebar.php'); ?>

<div id="Events" class="sidemain">
  <h3>Events</h3>
  <hr>
  <p>Now we are going to learn about something that makes plugins how they are! EVENTS.</p>
  <p>Before we start were going to add some new "use" statements and changed the "class" statement a bit and add a new line to the onEnable() function because we are using events.</p>
    <pre>
        <code>
&lt;?php

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

class Main extends PluginBase implements Listener { //Added "implements Listener" because of the Listener event

    public function onEnable() {
        $this->getServer()->getPluginManager()->registerEvents($this,$this); // This is the new line 
        $this->getLogger()->info("Plugin Enabled");
    }

}
        </code>
    </pre>
  <h4>PlayerJoinEvent</h4>
  <p>PlayerJoinEvent is the event of a player joining.</p>
  <p>So were going to broadcast a message saying someone joined in a fancy way and give that someone an item.</p>
    <pre>
        <code>
public function onJoin(PlayerJoinEvent $event) {
    $player = $event->getPlayer();  //This gets the player
    $name = $player->getName();  //Gets the Name of the player
    $inv = $player->getInventory();  //Gets the player Inventory

    $this->getServer()->broadcastMessage("Welcome $name to my server");  //This broadcast a Message to the whole server  
    $item = Item::get(345, 0, 1); //The item that you want to give
    $inv->setItem(0, $item);  //This gives the item to the player, '0' means the first slot of the players hotbar so you can change to any slot
}             
        </code>
    </pre>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="../../js/custom.js"></script>
<script src="../../js/highlight.pack.js"></script>
<script>hljs.initHighlightingOnLoad();</script>

</body>
</html>