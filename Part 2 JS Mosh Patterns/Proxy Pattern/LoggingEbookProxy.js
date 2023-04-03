class LoggingEbookProxy {
  constructor(fileName) {
    this.fileName = fileName;
    this.ebook = null;
  }

  show() {
    if (!this.ebook) {
      this.ebook = new RealEbook(this.fileName);
    }

    console.log("Logging");
    this.ebook.show();
  }

  getFileName() {
    return this.fileName;
  }
}
