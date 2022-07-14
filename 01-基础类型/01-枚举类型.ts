// 数字Enum类型
enum Direction {
  NORTH = 3,
  SOUTH,
  EAST,
  WEST,
}

let dir: Direction = Direction.EAST;
console.log(dir);

// 字符串枚举 ----- 字符串枚举成员进行初始化
enum DirectionStr {
  NORTH = "NORTH",
  SOUTH = "1",
}

// 异构枚举
enum Enum {
  A,
  B,
  C = "C",
  D = "D",
  E = 8,
  F,
}
/**
 * ES5的实现
 * "use strict";
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
    Enum[Enum["B"] = 1] = "B";
    Enum["C"] = "C";
    Enum["D"] = "D";
    Enum[Enum["E"] = 8] = "E";
    Enum[Enum["F"] = 9] = "F";
})(Enum || (Enum = {}));
 */
