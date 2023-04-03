class HtmlDocument {
  constructor() {
    this.nodes = [];
  }

  add(node) {
    this.nodes.push(node);
  }

  execute(operation) {
    for (let node of this.nodes) {
      node.execute(operation);
    }
  }
}
