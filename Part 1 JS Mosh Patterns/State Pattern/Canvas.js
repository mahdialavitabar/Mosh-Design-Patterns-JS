class Canvas {
  constructor() {
    this.currentTool = null;
  }

  mouseDown() {
    this.currentTool.mouseDown();
  }

  mouseUp() {
    this.currentTool.mouseUp();
  }

  getCurrentTool() {
    return this.currentTool;
  }

  setCurrentTool(currentTool) {
    this.currentTool = currentTool;
  }
}
