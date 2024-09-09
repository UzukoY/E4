class Electronics {
  constructor(name) {
    this.work = 'properly';
    this.name = name;
  }
}

class Watt extends Electronics {
  constructor(name, watt) {
    super(name);
    this.watt = watt;
  }

  getSwitch(str) {
    console.log(`Switch is ${str}`);
  }
}

const lamp = new Watt('lamp', '60');
const computer = new Watt('computer', '199');

lamp.getSwitch('on');
console.log(lamp);
console.log(computer);