class WebServer {
  constructor(handler) {
    this.handler = handler;
  }

  handle(request) {
    this.handler.handle(request);
  }
}
