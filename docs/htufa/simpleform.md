---
id: simpleform
title: SimpleForm
sidebar_label: SimpleForm
---
___
To make a Simple Form we need to first add this "use" statement.  
```
use jojoe77777\FormAPI\SimpleForm;
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
    $form = new SimpleForm(function (Player $player, $data) {
        if($data === null) {
            //The form has been closed by the player
            return true;
        }
        switch($data) {
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
        
    $form->setTitle("Title of the form"); //This sets the title of the form
    $form->addButton("First Button"); //This adds a button
    $form->addButton("Second Button");
    $player->sendForm($form); //This sends it to the player
}
```  
And thats it you just made your first Simple Form.  
Want to know how to send it go to [How To Send](howtosend).