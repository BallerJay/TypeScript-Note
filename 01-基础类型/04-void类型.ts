// void 类型像是与any类型相反，表示没有任何类型。
// 当一个函数没有返回值时，你通常会见到其返回值类型是void

function warnUser(): void {
  console.log("This is a warning message!");
}

// 声明一个void类型的变量没有什么作用，因为它的值只能是 undefined 或 null。严格模式下只能赋值undefined
let unusable: void = null;
