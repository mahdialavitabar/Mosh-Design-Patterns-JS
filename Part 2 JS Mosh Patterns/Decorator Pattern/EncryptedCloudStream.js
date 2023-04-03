class EncryptedCloudStream {
  constructor(stream) {
    this.stream = stream;
  }

  write(data) {
    const encrypted = this.encrypt(data);
    this.stream.write(encrypted);
  }

  encrypt(data) {
    return "!@#$(!@#*()*)(*!@#";
  }
}
