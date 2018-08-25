var eventEmitter = require('events').EventEmitter;

var count = 0;

var em = new eventEmitter();


setInterval (() =>{
    em.emit('timed', count++)
}, 3000);

em.on('timed', (data) =>{
    console.log('timed ' + data);
})