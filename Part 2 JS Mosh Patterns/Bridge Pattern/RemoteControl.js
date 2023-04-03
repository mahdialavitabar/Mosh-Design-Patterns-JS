class RemoteControl {
  constructor(device) {
    this.device = device;
  }

  turnOn() {
    this.device.turnOn();
  }

  turnOff() {
    this.device.turnOff();
  }
}
