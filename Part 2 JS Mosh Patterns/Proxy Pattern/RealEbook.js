class RealEbook {
  constructor(fileName) {
    this.fileName = fileName;
    this.load();
  }

  load() {
    console.log(`Loading the ebook ${this.fileName}`);
  }

  show() {
    console.log(`Showing the ebook ${this.fileName}`);
  }

  getFileName() {
    return this.fileName;
  }
}
