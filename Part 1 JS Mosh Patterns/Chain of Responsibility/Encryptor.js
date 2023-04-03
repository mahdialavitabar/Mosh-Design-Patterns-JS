class Encryptor extends Handler {
  constructor(next) {
    super(next);
  }

  doHandle(request) {
    console.log("Encryption");
    return false;
  }
}
