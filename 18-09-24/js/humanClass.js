class Human {
  constructor(name, surname, speed, state) {
    this.name = name;
    this.surname = surname;
    this.speed = speed;
    this.state = state;
  }

  run(speed) {
    this.speed = speed;
    alert(`${this.name} run at speed ${this.speed} KM/H`);
  }

  stop() {
    this.speed = 0;
    alert(`${this.name} is stopped`)
  }

  changeState(state) {
    this.state = state
    alert(`state is ${this.state}`)
  }
}
