class SpreadSheet {
  constructor(dataSource) {
    this.dataSource = dataSource;
  }

  update() {
    console.log(`SpreadSheet got notified: ${this.dataSource.getValue()}`);
  }
}
