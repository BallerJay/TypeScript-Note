// ReturnType 的作用是用于获取函数T的返回类型
type T0 = ReturnType<() => string>; // string
type T1 = ReturnType<(s: string) => void>; // void
// type T2 = ReturnType<() => T>; // {}
// type T3 = ReturnType<() => T>; // number[]
// type T4 = ReturnType; // any
// type T5 = ReturnType; // any
// type T6 = ReturnType; // Error
// type T7 = ReturnType; // Error

// 代码实现
// type ReturnType any> = T extends (...args: any) => infer R ? R : any;
