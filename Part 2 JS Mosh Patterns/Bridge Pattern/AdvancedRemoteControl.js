class AdvancedRemoteControl extends RemoteControl {
  constructor(device) {
    super(device);
  }

  setChannel(number) {
    this.device.setChannel(number);
  }
}
