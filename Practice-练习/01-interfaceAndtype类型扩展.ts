// 1. 接口和类型别名均可以扩展
interface PartialPointsX {
  x: number;
}

interface PointX extends PartialPointsX {
  y: number;
}

const a: PointX = { x: 1, y: 2 };

type PartialPointsY = {
  x: number;
};

type PointY = PartialPointsY & { y: number };

const b: PointY = {
  x: 1,
  y: 2,
};

// 2. 接口和类型别名并不互斥，也就是说，接口可以扩展类型别名，类型别名也可以扩展接口
type PartialPointsZ = {
  x: number;
};
interface PointZ extends PartialPointsZ {
  y: number;
}

const c: PointZ = {
  x: 1,
  y: 2,
};

interface PartialPointsW {
  x: number;
}

type PointW = PartialPointsW & { y: number };

const d: PointW = {
  x: 1,
  y: 2,
};
