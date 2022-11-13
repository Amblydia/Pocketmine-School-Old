---
sidebar_position: 4
---

# Custom Form

To make a Custom Form we need to add the "use" statement.

```yml
use jojoe77777\FormAPI\CustomForm;
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
    $form = new CustomForm(function(Player $player, $data){
        var_dump($data); // Sends all data to console
    });

    $player->sendForm($form); //This sends it to the player
}
```

## Title

Let us set the title of the form.

```php
public function testForm($player)
{
    $form = new CustomForm(function(Player $player, $data){
        var_dump($data);
    });

    //This sets the title of the form
    $form->setTitle("Choose Your Title");

    $player->sendForm($form);
}
```

![customform-title](/img/form-api/customform-title.png)

## Dropdown

Lets add a Dropdown to the form

```php
public function testForm($player)
{
    $form = new CustomForm(function(Player $player, $data){
        var_dump($data);
    });

    $form->setTitle("Choose Your Title");

    //This adds a Dropdowm, Options 1 & 2
    $form->addDropdown("DropDown", ["Dropdown 1", "Dropdown 2"]);

    $player->sendForm($form);
}
```

![customform-dropdown](/img/form-api/customform-dropdown.png)
![customform-dropdown](/img/form-api/customform-dropdown2.png)

## Input

Lets add a Input to the form

```php
public function testForm($player)
{
    $form = new CustomForm(function(Player $player, $data){
        var_dump($data);
    });

    $form->setTitle("Choose Your Title");
    $form->addDropdown("DropDown", ["Dropdown 1", "Dropdown 2"]);

    //This adds a Input
    $form->addInput("Enter Text", "Enter some text here"); 

    $player->sendForm($form);
}
```

![customform-input](/img/form-api/customform-input.png)

## Slider

Lets add a Slider to the form

```php
public function testForm($player)
{
    $form = new CustomForm(function(Player $player, $data){
        var_dump($data);
    });

    $form->setTitle("Choose Your Title");
    $form->addDropdown("DropDown", ["Dropdown 1", "Dropdown 2"]);
    $form->addInput("Enter Text", "Enter some text here"); 

    // This adds a Slider, Min 1, Max 10
    $form->addSlider("Choose a value", 1, 10);

    $player->sendForm($form);
}
```

![customform-slider](/img/form-api/customform-slider.png)

## Step Slider

Lets add a Step Slider to the form

```php
public function testForm($player)
{
    $form = new CustomForm(function(Player $player, $data){
        var_dump($data);
    });

    $form->setTitle("Choose Your Title");
    $form->addDropdown("DropDown", ["Dropdown 1", "Dropdown 2"]);
    $form->addInput("Enter Text", "Enter some text here"); 
    $form->addSlider("Choose a value", 1, 10);

    //This adds a Step Slider, Hi!, Hello!, Sup!
    $form->addStepSlider("Choose a word from", ["Hi!", "Hello!", "Sup!"]);

    $player->sendForm($form);
}
```

![customform-stepslider](/img/form-api/customform-stepslider.png)

## Label

Lets add a Label to the form

```php
public function testForm($player)
{
    $form = new CustomForm(function(Player $player, $data){
        var_dump($data);
    });

    $form->setTitle("Choose Your Title");
    $form->addDropdown("DropDown", ["Dropdown 1", "Dropdown 2"]);
    $form->addInput("Enter Text", "Enter some text here"); 
    $form->addSlider("Choose a value", 1, 10);
    $form->addStepSlider("Choose a word from", ["Hi!", "Hello!", "Sup!"]);

    //This adds a Label to the form
    $form->addLabel("Text from your label");

    $player->sendForm($form);
}
```

![customform-label](/img/form-api/customform-label.png)

## Toggle

Lets add a Toggle to the form

```php
public function testForm($player)
{
    $form = new CustomForm(function(Player $player, $data){
        var_dump($data);
    });

    $form->setTitle("Choose Your Title");
    $form->addDropdown("DropDown", ["Dropdown 1", "Dropdown 2"]);
    $form->addInput("Enter Text", "Enter some text here"); 
    $form->addSlider("Choose a value", 1, 10);
    $form->addStepSlider("Choose a word from", ["Hi!", "Hello!", "Sup!"]);
    $form->addLabel("Text from your label");

    //This adds a Toggle to the form
    $form->addToggle("Enable or disable");

    $player->sendForm($form);
}
```

![customform-toggle](/img/form-api/customform-toggle.png)
