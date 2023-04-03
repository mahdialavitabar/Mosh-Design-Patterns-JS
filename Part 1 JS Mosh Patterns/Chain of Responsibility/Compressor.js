class Compressor extends Handler {
  constructor(next) {
    super(next);
  }

  doHandle(request) {
    console.log("Compress");
    return false;
  }
}
