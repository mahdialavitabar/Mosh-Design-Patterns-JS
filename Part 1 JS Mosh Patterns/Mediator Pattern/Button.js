class Button extends UIControl {
  #isEnabled;

  constructor() {
    super();
    this.#isEnabled = false;
  }

  get isEnabled() {
    return this.#isEnabled;
  }

  setEnabled(enabled) {
    this.#isEnabled = enabled;
    this.notifyEventHandlers();
  }
}
