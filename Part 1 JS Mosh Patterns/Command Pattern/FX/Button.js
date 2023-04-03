class Button {
  constructor(command) {
    this.label = "";
    this.command = command;
  }

  click() {
    this.command.execute();
  }

  getLabel() {
    return this.label;
  }

  setLabel(label) {
    this.label = label;
  }
}
