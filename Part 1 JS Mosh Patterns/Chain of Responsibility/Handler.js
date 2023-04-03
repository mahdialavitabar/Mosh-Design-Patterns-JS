class Handler {
  constructor(next) {
    this.next = next;
  }

  handle(request) {
    if (this.doHandle(request)) {
      return;
    }

    if (this.next) {
      this.next.handle(request);
    }
  }

  doHandle(request) {
    throw new Error("doHandle must be implemented");
  }
}
