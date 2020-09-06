---
id: modalform
title: ModalForm
sidebar_label: ModalForm
---
___
Now time to learn how to make a Modal Form, first we need to add the modal form "use" statement.  
```
use jojoe77777\FormAPI\ModalForm;
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
    $form = new ModalForm(function (Player $player, $data) {
        if($data === true) {
            //Button 1
            //Here is where you add the code to what Button 1 will do
            return true;
        }
        return;
    });
    $form->setTitle("Title of the form"); //This sets the title of the form
    $form->setContent("Text inside the form"); //This sets the content inside the form
    $form->setButton1("Button 1"); //This sets the button 
    $form->setButton2("Button 2"); 
    $player->sendForm($form); //This sends it to the player
}
```  
And thats it you just made your first Modal Form.  
Want to know how to send it go to [How To Send](howtosend).