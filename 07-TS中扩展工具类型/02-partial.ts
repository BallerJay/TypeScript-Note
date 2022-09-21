// Partial 可以快速把某个接口类型中定义的属性变成可选的
type PersonPartial = {
  name: string;
  sex: string;
};
type newPerson = Partial<PersonPartial>; // {name?:string;sex?:string}

// 实现代码
//  type Partial<T> = {
//    [P in keyof T]?: T[P];
//  };
