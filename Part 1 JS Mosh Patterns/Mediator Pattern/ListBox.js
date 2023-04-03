class ListBox extends UIControl {
  constructor() {
    super();
    this.selection = null;
  }

  getSelection() {
    return this.selection;
  }

  setSelection(selection) {
    this.selection = selection;
    this.notifyEventHandlers();
  }
}
