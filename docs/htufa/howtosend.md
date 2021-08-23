---
id: howtosend
title: How To Send
sidebar_label: How To Send
---
___
After made your own form, send it.
```php
$player->sendForm($form);
```

Lets have a full example
```php
public function testForm($player) {
    $form = new CustomForm(function (Player $player, $data) {
        var_dump($data); 
    });
    $form->setTitle("Form Title");
    $form->addLabel("Text"); 
    $form->addToggle("Toggle");
    $form->addSlider("Slider", 1, 100); 
    $form->addStepSlider("Step Slider", ["5", "10", "15"]); 
    $form->addDropdown("Dropdown", ["1", "2", "3"]); 
    $form->addInput("Input", "Ghost Text", "Text");
    $player->sendForm($form);
```
And thats it you just send your first form.  