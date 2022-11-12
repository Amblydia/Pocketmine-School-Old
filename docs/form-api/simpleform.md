---
sidebar_position: 2
---

# Simple Form

To make a Simple Form we need to add the "use" statement.

```yml
use jojoe77777\FormAPI\SimpleForm;
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
    $form = new SimpleForm(function(Player $player, $data) {
        if($data === null){
            //The form has been closed by the player
            return true;
        }
    });

    $player->sendForm($form); //This sends it to the player
}
```

## Title

Let us set the title of the form.

```php
public function testForm($player)
{
    $form = new SimpleForm(function(Player $player, $data) {
        if($data === null){
            return true;
        }
    });

    //This sets the title of the form
    $form->setTitle("Choose Your Title"); 

    $player->sendForm($form);
}
```

![form-title](/img/form-api/simpleform-title.png)

The Title can also have the player name in it.  
Example:

```php
    $name = $player->getName();
    $form->setTitle("Hello" $name); 
```

## Description

Let us add a description to the form.

```php
public function testForm($player)
{
    $form = new SimpleForm(function(Player $player, $data) {
        if($data === null){
            return true;
        }
    });

    $form->setTitle("Choose Your Title"); 
    //This adds a description to the form
    $form->setContent("Choose Your Description");
    $player->sendForm($form);
}
```

![form-description](/img/form-api/simpleform-description.png)

## Button

Let us add a button to the form.

```php
public function testForm($player)
{
    $form = new SimpleForm(function(Player $player, $data) {
        if($data === null){
            return true;
        }
    });

    $form->setTitle("Choose Your Title"); 
    $form->setContent("Choose Your Description");
    //This adds a button to the form
    $form->addButton("My First Button"); 

    $player->sendForm($form);
}
```

![form-button](/img/form-api/simpleform-button.png)

### Multiple Buttons

What about adding multiple buttons? Well you can.

```php
public function testForm($player)
{
    $form = new SimpleForm(function(Player $player, $data) {
        if($data === null){
            return true;
        }
        switch($data){
            case 0:
                //First Button
                //Here is where you add the code to what this button will do.
            break;

            case 1:
                //Second Button
                //Here is where you add the code to what this button will do.
            break;
        }
    });

    $form->setTitle("Choose Your Title"); 
    $form->addButton("My First Button");
    $form->addButton("My Second Button");
    $player->sendForm($form); 
}
```

### Button with Image

Want to add a Image next to your button here's how:

```php
public function testForm($player)
{
    $form = new SimpleForm(function(Player $player, $data) {
        if($data === null){
            return true;
        }
    });

    $form->setTitle("Choose Your title");
    $form->addButton("My First Button", 0, "textures/items/chainmail_helmet");
    $sender->sendForm($form);
}
```

![form-button-with-image](/img/form-api/simpleform-button-with-image.png)

Here's another example of multiple buttons with a image:

```php
public function testForm($player)
{
    $form = new SimpleForm(function(Player $player, $data) {
        if($data === null){
            return true;
        }
    });

    $form->setTitle("Choose Your title");
    $form->addButton("My First Button", 0, "textures/items/chainmail_helmet");
    $form->addButton("My Second Button", 0, "textures/items/chainmail_chestplate");
    $sender->sendForm($form);
}
```

![form-multiple-buttons-with-image](/img/form-api/simpleform-multiple-buttons-with-image.png)

:::caution
More info on the simple form is to be written
:::
