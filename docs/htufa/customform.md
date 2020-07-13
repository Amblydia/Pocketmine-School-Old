---
id: customform
title: CustomForm
sidebar_label: CustomForm
---
___
Now the last one how to make a Custom Form, first we need to add the custom form "use" statement.  
```
use jojoe77777\FormAPI\CustomForm;
```

Now lets make a function to add our form in it.  
```
public function testForm($player) {
    //This is where we will add our form.
}
```

In the function we will add our form
```
public function testForm($player) {
    $form = new CustomForm(function (Player $player, $data) {
        var_dump($data); // Sends all data to console
    });
    $form->setTitle("Form Title"); //This sets the title of the form
    $form->addLabel("Text"); //This adds a Label to the form
    $form->addToggle("Toggle"); //This adds a Toggle to the form
    $form->addSlider("Slider", 1, 100); // This adds a Slider, Min 1, Max 100
    $form->addStepSlider("Step Slider", ["5", "10", "15"]); //This adds a Step Slider, 5, 10 & 15
    $form->addDropdown("Dropdown", ["1", "2", "3"]); //This adds a Dropdowm, Options 1, 2 & 3
    $form->addInput("Input", "Ghost Text", "Text"); //This adds a Input, Text already entered
    $player->sendForm($form); //This sends it to the player
}
```  
And thats it you just made your first Custom Form.  
Want to know how to send it go to [How To Send](howtosend).