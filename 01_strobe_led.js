var j5      = require('johnny-five'),
    arduino = new j5.Board();

arduino.on('ready', function(){
    var led = new j5.Led({
        // the pin to apply a voltage.
        pin: 13
    });
    // on/off LED in 200ms cycle.
    led.strobe(200);
});
