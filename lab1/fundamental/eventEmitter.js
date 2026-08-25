// event emitter
// import the events module
// on, off and once

import { EventEmitter } from 'events';

const emitter = new EventEmitter();

const sayHi = (name) => {
    console.log(`Logged in ${name}`)
};

emitter.on('greet', sayHi);

emitter.on('greet', (name) => {console.log(`Logged out ${name}`);});

emitter.once('greet', (name) => {console.log(`System started... ${name}`);});

emitter.on('exit', (name) => {console.log(`System exited... ${name}`);});


emitter.emit('greet', 'Ashwani');
emitter.emit('greet', 'Mohit');
emitter.emit('exit', 'manager'); 