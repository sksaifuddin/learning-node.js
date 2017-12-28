var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEvent = function(){
    console.log("Hi ! my name is saif");
}

eventEmitter.on('event',myEvent);

eventEmitter.emit('event');