class EbookProxy {
  constructor(fileName) {
    this.fileName = fileName;
    this.ebook = null;
  }

  show() {
    if (this.ebook === null) {
      this.ebook = new RealEbook(this.fileName);
    }

    this.ebook.show();
  }

  getFileName() {
    return this.fileName;
  }
}
