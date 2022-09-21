// Readonly 将接口所有属性变为只读的
type PersonReadonly = {
  name: string;
  sex: string;
};
type newPersonReadonly = Readonly<Person>;
// type newPerson = {readonly name: string;readonly sex: string;}

// 实现代码
// type Readonly<T> = { readonly [P in keyof T]: T[P]; }
