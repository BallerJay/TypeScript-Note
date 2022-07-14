// 联合类型通常与 null 和 undefined 一起使用
const sayHello = (name: string | undefined) => {
  /* ... */
};
sayHello("Semlinker");
sayHello(undefined);
