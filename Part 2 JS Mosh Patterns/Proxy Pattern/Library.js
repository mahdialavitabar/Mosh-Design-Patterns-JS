class Library {
  constructor() {
    this.ebooks = new Map();
  }

  add(ebook) {
    this.ebooks.set(ebook.getFileName(), ebook);
  }

  openEbook(fileName) {
    this.ebooks.get(fileName).show();
  }
}
