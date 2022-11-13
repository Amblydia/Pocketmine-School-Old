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
    $form->setTitle("Your Title"); 

    $player->sendForm($form);
}
```

![modalform-title](/img/form-api/modalform-title.png)

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

    $form->setTitle("Your Title"); 
    //This adds a description to the form
    $form->setContent("Your description");
    $player->sendForm($form);
}
```

![modalform-description](/img/form-api/modalform-description.png)

## Button

Let us set the buttons to the form.

```php
public function testForm($player)
{
    $form = new ModalForm(function(Player $player, $data){
        if($data === true){
            
            return true;
        }
        return;
    });

    $form->setTitle("Your Title"); 
    $form->setContent("Your description");
    //This sets the buttons 
    $form->setButton1("First choice");
    $form->setButton2("Second choice"); 
    $player->sendForm($form);
}
```

![modalform-buttons](/img/form-api/modalform-buttons.png)
