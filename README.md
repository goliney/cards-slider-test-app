![Slider mockup](slider-mockup.jpg?raw=true "Slider mockup")

#Task description
-----------------

Create an independent UI component(card) that can be injected in others components or required by other module.

 
#Card description
-----------------

(4) Image

(5) Shadow

(6) Title

(7) Description

As for sizes and animations: solution must be as closest to mockup as you can. One requirement – card must be
positioned in center of the screen(vertically and horizontally).

 
 
# Test flow
-----------

Create a page with:

- prev(1)
- play(2)
- next(3)
- card component in center


By clicking on “PREV” and “NEXT” elements user will be able to slide with animation card-components from previous to next
index. Loop is circular and should contain only 10 elements.

By clicking on “PLAY” user starts auto-sliding with animation (each 5 second card is changed to next state). User needs
to click one more time to stop playing.

 
Card slide animation must be implemented in the next way:

- for “PREV” – card slides out of left view port edge and other card(updated state) slides in from right desktop edge (simple slider)
- for “NEXT” – revers PREV action

 
You can grab all needed data for card from:

http://ec2-52-25-151-129.us-west-2.compute.amazonaws.com:8888/

Here is only one GET method: “card/_id”, where _id is number from 0 to 499.

Example: 

http://ec2-52-25-151-129.us-west-2.compute.amazonaws.com:8888/card/1


You can use any framework, libraries or native JS. You are not allowed to use jQuery. 

Keep in mind, that solution will be used in big application, so your part must be fully independent. 

Setup of any environment is a plus.