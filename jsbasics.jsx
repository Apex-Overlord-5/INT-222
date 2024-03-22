// function changeColor(event) {
//   if (event.detail === 1) {
//       // Single click
//       document.body.style.backgroundColor = 'green';
//   } else if (event.detail === 2) {
//       // Double click
//       document.body.style.backgroundColor = 'red';
//   }
// }
// document.body.addEventListener('click', changeColor);

// document.body.addEventListener('dblclick', changeColor);


// const EventEmitter= require("events");
// const event = new EventEmitter();
// event.on('save',()=>{
//   console.log('A saved event occured');
// });
// event.emit('save');

// event.on('update', () => {
//   console.log('An update event occurred');
// });
// event.on('delete', () => {
//   console.log('A delete event occurred');
// });
// event.emit('save');
// event.emit('update');
// event.emit('delete');

// const EventEmitter = require("events");
// const event = new EventEmitter();
// event.on('save', () => {
//   console.log('First saved event listener');
// });
// event.off('save', () => {
//   console.log('Second saved event listener');
// });

// event.emit('save');

const EventEmitter = require("events");
const event = new EventEmitter();

const immediateHandler = () => {
  console.log('Immediate event occurred');
};

const immediateTimer = setImmediate(immediateHandler);
event.off('immediate', immediateHandler);

const timeoutHandler = () => {
  console.log('Timeout event occurred');
};

const timeoutTimer = setTimeout(timeoutHandler, 1000);
event.off('timeout', timeoutHandler);

const intervalHandler = () => {
  console.log('Interval event occurred');
};

const intervalTimer = setInterval(intervalHandler, 1000);
event.off('interval', intervalHandler);

timeoutTimer.unref();
intervalTimer.unref();

event.emit('immediate');
event.emit('timeout');
event.emit('interval');

