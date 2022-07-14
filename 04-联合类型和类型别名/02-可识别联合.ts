/**
 * TypeScript 可辨识联合类型,也称为代数数据类型或标签联合类型。
 * 包含三个要点：可辨别、联合类型和类型守卫。
 *
 * 这种类型的本质就是结合联合类型和字面量类型的一种类型保护方法。
 * 如果一个类型是多个类型的联合类型，且多个类型含有一个公共属性，那么就可以利用这个公共属性，来创建不同的类型保护区块。
 */

// 1. 可辨识
// 可辨识要求联合类型中的每个元素都含有一个单例类型属性
enum CarTransmission {
  Automatic = 200,
  Manual = 300,
}

interface Motorcycle {
  vType: "motorcycle"; // discriminant
  make: number; // year
}

interface Car {
  vType: "car"; // discriminant
  transmission: CarTransmission;
}

interface Truck {
  vType: "truck"; // discriminant
  capacity: number; // in tons
}

// 在上述代码中，我们分别定义了 Motorcycle、 Car 和 Truck 三个接口，
// 在这些接口中都包含一个 vType 属性，该属性被称为可辨识的属性，而其它的属性只跟特性的接口相关。

// 2. 联合类型
// 基于前面定义了三个接口，我们可以创建一个 Vehicle 联合类型：
type Vehicle = Motorcycle | Car | Truck;

// 3. 类型守卫
const EVALUATION_FACTOR = Math.PI;
// function evaluatePrice(vehicle: Vehicle) {
//     return vehicle.capacity * EVALUATION_FACTOR;
//   }
// error: Property 'capacity' does not exist on type 'Motorcycle'.
// 原因是在 Motorcycle 接口中，并不存在 capacity 属性，而对于 Car 接口来说，它也不存在 capacity 属性。
// 那么，现在我们应该如何解决以上问题呢？这时，我们可以使用类型守卫。

function evaluatePrice(vehicle: Vehicle) {
  switch (vehicle.vType) {
    case "car":
      return vehicle.transmission * EVALUATION_FACTOR;
    case "truck":
      return vehicle.capacity * EVALUATION_FACTOR;
    case "motorcycle":
      return vehicle.make * EVALUATION_FACTOR;
  }
}

// 在以上代码中，我们使用 switch 和 case 运算符来实现类型守卫，从而确保在 evaluatePrice 方法中，
// 我们可以安全地访问 vehicle 对象中的所包含的属性，来正确的计算该车辆类型所对应的价格。

const myTruck: Truck = { vType: "truck", capacity: 9.5 };
evaluatePrice(myTruck);
