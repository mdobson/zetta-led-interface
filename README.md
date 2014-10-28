# Composable LED driver for Zetta.

This is a first take of a composable driver for Zetta. The goal is to essentially allow drivers to be more distributable by allowing people to pull out the section of code that does io on the device. 

`led_driver.js` contains the state machine implementation of an LED. This is the representation zetta cares about most. Inside of it there is an `_io` property that ships any logic off to another module.

`j5_io.js` is the io hook for johnny-five. It has an LED representation in it, and would actually perform the io against an arduino board. 

`index.js` is the scout that would find the LEDs. We wait for Johnny-Five to connect to the board, and then we create things as normal. The only difference is that we also create an led io along with discovering the device.


