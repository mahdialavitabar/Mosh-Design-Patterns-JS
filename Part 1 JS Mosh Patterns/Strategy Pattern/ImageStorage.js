class ImageStorage {
  store(fileName, compressor, filter) {
    compressor.compress(fileName);
    filter.apply(fileName);
  }
}
