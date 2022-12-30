// {} 相当于 Object
const b1: {} = "11";
const b2: {} = 11;
const b3: {} = true;
const b4: {} = [];

// 使用{} 赋值完成以后，无法修改
let m2: {} = { name: 1 };
// m2.name = 2 无法修改
// m2.age = 2 无法增加
