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

Lets set the title of the simple form.

```php
public function testForm($player)
{
    $form = new SimpleForm(function(Player $player, $data) {
        if($data === null){
            return true;
        }
    });

    //This sets the title of the form
    $form->setTitle("Title of the form"); 

    $player->sendForm($form);
}
```

The Title can also have the player name in it.  
Example:

```php
    $name = $player->getName();
    $form->setTitle("Hello" $name); 
```
