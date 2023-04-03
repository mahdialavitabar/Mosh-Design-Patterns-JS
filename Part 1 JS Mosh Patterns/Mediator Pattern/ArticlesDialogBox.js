class ArticlesDialogBox {
  constructor() {
    this.articlesListBox = new ListBox();
    this.titleTextBox = new TextBox();
    this.saveButton = new Button();
    this.articlesListBox.addEventHandler(this.articleSelected.bind(this));
    this.titleTextBox.addEventHandler(this.titleChanged.bind(this));
  }

  simulateUserInteraction() {
    this.articlesListBox.setSelection("Article 1");
    this.titleTextBox.setContent("");
    this.titleTextBox.setContent("Article 2");
    console.log("TextBox: " + this.titleTextBox.getContent());
    console.log("Button: " + this.saveButton.isEnabled());
  }

  titleChanged() {
    const content = this.titleTextBox.getContent();
    const isEmpty = !content || content.trim().length === 0;
    this.saveButton.setEnabled(!isEmpty);
  }

  articleSelected() {
    this.titleTextBox.setContent(this.articlesListBox.getSelection());
    this.saveButton.setEnabled(true);
  }
}
