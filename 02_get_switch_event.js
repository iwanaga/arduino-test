var j5      = require('johnny-five'),
    arduino = new j5.Board();

arduino.on('ready', function(){
    var button = new j5.Button({
        // input pin
        pin: 2,
        // minimum time to emit 'hold' event.
        holdtime: 2000
    });

    button.on('down', function(){
        console.log('button - on');
    });
    button.on('up', function(){
        console.log('button - released');
    });
    button.on('hold', function(){
        console.log('button - hold');
    });
});