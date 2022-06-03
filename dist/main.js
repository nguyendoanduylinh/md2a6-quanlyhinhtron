"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./circle");
let circleList = [];
circleList.push(new circle_1.Circle("Yellow", 10));
circleList.push(new circle_1.Circle("Green", 15));
circleList.push(new circle_1.Circle("Blue", 20));
function showCircle(circle) {
    console.log(`Hình tròn này có màu ${circle._color} và bán kính là ${circle._radius}`);
}
circleList.forEach(showCircle);
