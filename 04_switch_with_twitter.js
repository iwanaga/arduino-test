var j5      = require('johnny-five'),
    Twitter = require('ntwitter'),
    arduino = new j5.Board();

var texts = ['｜ω・)チカッ',
             'ピコーン',
             '／^o^＼フッジッサーン'];

var client = new Twitter({
    consumer_key       : 'API key',
    consumer_secret    : 'API secret',
    access_token_key   : 'Access token',
    access_token_secret: 'Access token secret'
});

arduino.on('ready', function(){
    var i = 0;
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
        led.toggle();
        if (led.isOn) {
            tweet();
        }
    });

    /**
     *  utility functions
     */
    function tweet(){
        client.updateStatus(generateText(), function(err, res){
            if (err) {
                console.log(err);
                return;
            }
        });
        updateIndex();
    }
    function generateText(){
        // add Datetime to avoid error code 187, 'Status is a duplicate'
        return (texts[i] + '\n' + (new Date()).toString());
    }
    function updateIndex(){
        i = (i + 1) % texts.length;
    }
});
