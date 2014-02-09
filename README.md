arduino-test
============

arduino test codes

## setup
1. Download Arduino IDE from [here](http://arduino.cc/en/Main/Software#toc1).
2. Maufacture a circuit.
3. Connect the Arduino board to your computer using the USB cable.
4. Launch IDE
   1. [menu bar] Tools > Serial Port > /dev/tty.usbmodemNNN
   2. [menu bar] File > Examples > Firmata > StandardFirmata
   3. [sketch window] Upload the StandardFirmata program by clicking :arrow_right: icon
5. Launch terminal and have a fun :)

```
git clone https://github.com/iwanaga/arduino-test.git
cd arduino-test.git

npm install
node 01_strobe_led.js
# and so on...
```

## circuits

### 01_strobe_led.js
resistor: 1 [kΩ]
![alt 01](https://raw.github.com/iwanaga/arduino-test/master/images/01_LED.png "01")

### 02_get_switch_event.js
resistor: 10 [kΩ]
![alt 02](https://raw.github.com/iwanaga/arduino-test/master/images/02_SW.png "02")

### 03_led_with_switch.js, 04_switch_with_twitter
![alt 03](https://raw.github.com/iwanaga/arduino-test/master/images/03_LED_SW.png "03")
