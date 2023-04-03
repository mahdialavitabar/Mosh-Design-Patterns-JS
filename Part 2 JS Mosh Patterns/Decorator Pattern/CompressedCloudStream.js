class CompressedCloudStream {
  constructor(stream) {
    this.stream = stream;
  }

  write(data) {
    const compressed = this.compress(data);
    this.stream.write(compressed);
  }

  compress(data) {
    return data.substring(0, 5);
  }
}
