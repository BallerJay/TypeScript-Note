// let value: unknown;

// value = true; // OK
// value = 42; // OK
// value = "Hello World"; // OK
// value = []; // OK
// value = {}; // OK
// value = Math.random; // OK
// value = null; // OK
// value = undefined; // OK
// value = new TypeError(); // OK
// value = Symbol("type"); // OK

let value: unknown;

let value1: unknown = value; // OK
let value2: any = value; // OK
// let value3: boolean = value; // Error
// let value4: number = value; // Error
// let value5: string = value; // Error
// let value6: object = value; // Error
// let value7: any[] = value; // Error
// let value8: Function = value; // Error

// 将 value 变量类型设置为 unknown 后，这些操作都不再被认为是类型正确的
// value.foo.bar; // Error
// value.trim(); // Error
// value(); // Error
// new value(); // Error
// value[0][1]; // Error

// ----------------------------------------
// unknown 类型只能被赋值给any类型和unknow类型本身。
