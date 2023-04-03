class TextBox extends UIControl {
  constructor() {
    super();
    this.content = null;
  }

  get content() {
    return this._content;
  }

  set content(value) {
    this._content = value;
    this.notifyEventHandlers();
  }
}
