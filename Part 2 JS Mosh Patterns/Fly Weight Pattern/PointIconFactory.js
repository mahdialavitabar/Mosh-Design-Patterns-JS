class PointIconFactory {
  constructor() {
    this.icons = new Map();
  }

  getPointIcon(type) {
    if (!this.icons.has(type)) {
      const icon = new PointIcon(type, null);
      this.icons.set(type, icon);
    }

    return this.icons.get(type);
  }
}
