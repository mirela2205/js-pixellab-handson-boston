const Car = {
  make: '',
  color: '',
  wheels: 0,
  speed: 0,
  test: 'hello boston',
  topSpeed: 0,
  topReverseSpeed: 0,
  areLightsOn: false,
  displaySpeed: function () {
    console.log(`Viteza curenta este: ${this.speed}.`);
  },

  accelerate: function () {
    // this.speed++;
    // this.displaySpeed();
    this.setSpeed(this.speed + 1);
  },

  decelerate: function () {
    // this.speed--;
    // this.displaySpeed();
    this.setSpeed(this.speed - 1);
  },

  setSpeed: function (speed = 0) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }
    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed = speed;
    this.displaySpeed();
  },

  turnLightsOn: function () {
    this.areLightsOn = true;
  },

  turnLightsOff: function () {
    this.areLightsOn = false;
  },

  flashLights() {
    this.turnLightsOn();

    setTimeout(() => {
      this.turnLightsOff();
    }, 5 * 1000);
  },
};

const audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;
audi.topSpeed = 140;
audi.topReverseSpeed = -50;

audi.setSpeed(140);
// audi.setSpeed(100);
audi.accelerate();
