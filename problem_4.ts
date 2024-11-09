{
  type Circle = {
    shape: 'circle';
    radius: number;
  };

  type Rectangle = {
    shape: 'rectangle';
    width: number;
    height: number;
  };

  type Shape = Circle | Rectangle;

  function calculateShapeArea(shape: Shape): number {
    let area: number;

    if (shape.shape === 'circle') {
      const area = Math.PI * shape.radius * shape.radius;
      return parseFloat(area.toFixed(2));
    } else if (shape.shape === 'rectangle') {
      const area = shape.width * shape.height;
      return parseFloat(area.toFixed(2));
    }
  }
}
