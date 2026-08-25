import { EventEmitter } from 'events';

const task = new EventEmitter();

const sayHi = (name) => {
    console.log(`${name} logged in`);
}

task.once('greet', () => {
    console.log("System Started!");
});

task.on('greet', sayHi);
task.on('greet', (name) => {console.log(`${name} starts working`);});
task.on('greet', (name) => {console.log(`${name} stops working`);});

task.once('exit', () => {console.log("System exited!");});

task.emit('greet', 'Ashwani');
console.log();
task.off('greet', sayHi); // must have function name
task.emit('greet', 'Virat');
console.log();
task.emit('exit'); // executed only once nothing after this line will be executed

console.log("Total listener", task.listenerCount('greet')); // count of listeners for greet event
task.removeAllListeners('greet'); // remove all listeners for greet event
console.log("Total listener after removal", task.listenerCount('greet')); // count of listeners for greet event