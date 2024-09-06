function Electronics(name) {
  this.work = 'properly',
  this.name = name
  }

Electronics.prototype.getSwitch = function(str) {
 console.log(`Switch is ${str}`) 
}

function Watt(name, watt) {
  this.name = name,
  this.watt = watt
}

Watt.prototype = new Electronics()

Watt.prototype.getSwitch = function(str) {
 console.log(`Switch is ${str}`) 
}

const lamp = new Watt('lamp', '60');
const computer = new Watt('computer', '199');


lamp.getSwitch('on')
console.log(lamp)
console.log(computer)
