class DataSource extends Subject {
  constructor() {
    super();
    this.value = 0;
  }

  getValue() {
    return this.value;
  }

  setValue(value) {
    this.value = value;
    this.notifyObservers();
  }
}
