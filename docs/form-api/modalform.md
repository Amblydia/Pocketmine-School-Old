---
sidebar_position: 3
---

# Modal Form

To make a Modal Form we need to add the "use" statement.

```yml
use jojoe77777\FormAPI\ModalForm;
```

Now lets make a function to add our form in it.

```php
public function testForm($player) 
{
    //This is where we will add our form.
}
```

In the function we will add our form:

```php
public function testForm($player)
{
    $form = new ModalForm(function(Player $player, $data){
        if($data === true){
            
            return true;
        }
        return;
    });

    $player->sendForm($form); //This sends it to the player
}
```

## Title

Let us set the title of the form.

```php
public function testForm($player)
{
    $form = new ModalForm(function(Player $player, $data){
        if($data === true){
            
            return true;
        }
        return;
    });

    //This sets the title of the form
    $form->setTitle("Choose Your Title"); 

    $player->sendForm($form);
}
```

## Description

Let us add a description to the form.

```php
public function testForm($player)
{
    $form = new ModalForm(function(Player $player, $data){
        if($data === true){
            
            return true;
        }
        return;
    });

    $form->setTitle("Choose Your Title"); 
    //This adds a description to the form
    $form->setContent("Choose Your Description");
    $player->sendForm($form);
}
```

## Button

Let us add a button to the form.

```php
public function testForm($player)
{
    $form = new ModalForm(function(Player $player, $data){
        if($data === true){
            
            return true;
        }
        return;
    });

    $form->setTitle("Choose Your Title"); 
    $form->setContent("Choose Your Description");
    //This sets the button 
    $form->setButton1("Button 1"); 
    $player->sendForm($form);
}
```
