// define the Group class and implement the Component interface
class Group {
  constructor() {
    this.components = [];
  }

  add(component) {
    this.components.push(component);
  }

  render() {
    for (const component of this.components) {
      component.render();
    }
  }

  move() {
    for (const component of this.components) {
      component.move();
    }
  }
}
