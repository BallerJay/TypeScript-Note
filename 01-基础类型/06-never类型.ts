// never 类型表示那些永不存在的值的类型。
// 例如：never 类型是那些总是会抛出异常或根本不会有返回值的函数表达式或箭头函数表达式的返回值类型

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
