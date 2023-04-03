class ImageView {
  constructor(image) {
    this.image = image;
  }

  apply(filter) {
    filter.apply(this.image);
  }
}
