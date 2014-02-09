var j5      = require('johnny-five'),
    arduino = new j5.Board();

arduino.on('ready', function(){
    var strobeEnabled = false;
    var led = new j5.Led({
        // the pin to apply a voltage.
        pin: 13
    });
    var button = new j5.Button({
        // input pin
        pin: 2,
        // minimum time to emit 'hold' event.
        holdtime: 500
    });

    button.on('up', function(){
        console.log('button - released');
        if (strobeEnabled) {
            led.stop();
            led.off();
            strobeEnabled = false;
        } else {
            led.toggle();
        }
    });

    button.on('hold', function(){
        console.log('button - hold');
        strobeEnabled = true;
        led.strobe(100);
    });
});