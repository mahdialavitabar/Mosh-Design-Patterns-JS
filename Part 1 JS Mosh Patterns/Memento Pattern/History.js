class History {
  constructor() {
    this.states = [];
  }

  push(state) {
    this.states.push(state);
  }

  pop() {
    const lastIndex = this.states.length - 1;
    const lastState = this.states[lastIndex];
    this.states.splice(lastIndex, 1);

    return lastState;
  }
}
