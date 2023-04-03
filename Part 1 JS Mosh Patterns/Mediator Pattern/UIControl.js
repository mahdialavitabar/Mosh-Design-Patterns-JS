class UIControl {
  constructor() {
    this.eventHandlers = [];
  }

  addEventHandler(observer) {
    this.eventHandlers.push(observer);
  }

  notifyEventHandlers() {
    for (let observer of this.eventHandlers) {
      observer.handle();
    }
  }
}
