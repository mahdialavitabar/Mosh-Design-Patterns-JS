class Chart {
  constructor(dataSource) {
    this.dataSource = dataSource;
  }

  update() {
    console.log(`Chart got updated: ${this.dataSource.getValue()}`);
  }
}
