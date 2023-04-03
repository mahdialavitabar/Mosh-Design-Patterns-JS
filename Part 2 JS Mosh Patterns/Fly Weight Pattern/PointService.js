class PointService {
  constructor(iconFactory) {
    this.iconFactory = iconFactory;
  }

  getPoints() {
    const points = [];
    const point = new Point(
      1,
      2,
      this.iconFactory.getPointIcon(PointType.CAFE)
    );
    points.push(point);

    return points;
  }
}
