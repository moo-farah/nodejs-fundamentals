import  { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function sayHello(name) {
    console.log(`Hello, ${name}!`);
}

function sayGoodbye(name) {
    console.log(`Goodbye, ${name}!`);
}

// Register event listeners
myEmitter.on('sayHello', sayHello);
myEmitter.on('sayGoodbye', sayGoodbye);

// Emit events
myEmitter.emit('sayHello', 'John');
myEmitter.emit('sayGoodbye', 'John');

// Error handling
myEmitter.on('error', (err) => {
    console.error('An error occurred:', err);
});

// Simulate an error event
myEmiiter.on('error', new Error('This is a test error'))