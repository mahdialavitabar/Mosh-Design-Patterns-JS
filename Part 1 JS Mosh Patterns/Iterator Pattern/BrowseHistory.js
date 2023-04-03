class BrowseHistory {
  constructor() {
    this.urls = new Array(10);
    this.count = 0;
  }

  push(url) {
    this.urls[this.count++] = url;
  }

  pop() {
    return this.urls[--this.count];
  }

  createIterator() {
    return new ArrayIterator(this);
  }
}

class ArrayIterator {
  constructor(history) {
    this.history = history;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.history.count;
  }

  current() {
    return this.history.urls[this.index];
  }

  next() {
    this.index++;
  }
}
