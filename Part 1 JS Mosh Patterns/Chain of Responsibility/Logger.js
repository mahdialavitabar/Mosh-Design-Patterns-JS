class Logger extends Handler {
  constructor(next) {
    super(next);
  }

  doHandle(request) {
    console.log("Log");

    return false;
  }
}
