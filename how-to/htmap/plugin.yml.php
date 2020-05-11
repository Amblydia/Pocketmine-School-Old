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

<?php $currentPage = 'plugin.yml'; ?>
<?php include('sidebar.php'); ?>

<div id="plugin.yml" class="sidemain">
  <h3>plugin.yml</h3>
  <hr>
  <p>First create a folder and name it whatever you want because this folder will be your plugin.</p>
  <p>In the folder create a file and name it plugin.yml </p>
  <p>In this file you will add:</p>
    <pre>
      <code class="yaml">

name: Name of Your Plugin
author: Your Name
api: 3.11.7
version: 1.0  #This is where you put the version of the plugin
main: ExampleName/Main
# "ExampleName" will be a folder in the src folder and "Main" will be the file in the "ExampleName" folder
 
# Commands If ur plugin has commands do this:
command:
	test:  #"test" this is the name of the command
		description: Put any description
		usage: /test
	test2:  #Second command
		description: Put any Description
		usage: /test2
 
# Permissions 
permissions:
	test.command:
		default: true
	test2.command:
    default: true
    
      </code>
    </pre>
  <p>So after you add your plugin.yml make a folder and name it src, in this folder you will add a new folder called "ExampleName" (were nameing it "ExampleName" because that is what we named it in the plugin.yml).</p>
  <p>Now in the "ExampleName" folder we add a new file and name it "Main.php" (were nameing it "Main.php" because that is what we named it in the plugin.yml and the .php is the extension).</p>
  <p>Now your file structure should look like this:</p>
    <pre>
        <code>
PluginName 
    ├── plugin.yml 
    └── src
         └── ExampleName
                  └── Main.php
        </code>
    </pre>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="../../js/custom.js"></script>
<script src="../../js/highlight.pack.js"></script>
<script>hljs.initHighlightingOnLoad();</script>

</body>
</html>