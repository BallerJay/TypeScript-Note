// Exclude用于删除类型集合中的指定类型
type a = string | number;
type newPersonExclude = Exclude<a, string>; //number

// 实现代码
// type Exclude<T, U> = T extends U ? never : T
