import { Circle } from "./circle";

let circleList: Circle[] = [];

circleList.push(new Circle("Yellow", 10));
circleList.push(new Circle("Green", 15));
circleList.push(new Circle("Blue", 20));

function showCircle(circle: Circle) {
  console.log(
    `Hình tròn này có màu ${circle._color} và bán kính là ${circle._radius}`
  );
}

circleList.forEach(showCircle);
