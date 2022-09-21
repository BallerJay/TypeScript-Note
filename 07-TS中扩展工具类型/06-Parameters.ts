// Parameters 的作用是用于获取函数 T 的函数类型
// 官方文档 https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype
type getuserInfo = (arg: { a: number; b: string }) => void;
// Parameters<T>的作用是用于获取函数 T 的参数类型。
type ParametersUserInfo = Parameters<getuserInfo>;

const demoParameters: ParametersUserInfo = [
  {
    a: 1,
    b: "a",
  },
];
