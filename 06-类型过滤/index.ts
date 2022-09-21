//https://juejin.cn/post/7052949415350239246   参考文章
interface Example {
  a: string;
  b: number;
  c: number;
  d: string;
}
// 一个Example接口，我们相对这个接口做一些处理，只希望留下类型为string的属性

type newExample = FilterType<Example, string>;

// pick 方法的实现
// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };

type FilterType<Source, Types> = Pick<
  Source,
  {
    [K in keyof Source]: Source[K] extends Types ? K : never;
  }[keyof Source]
>;

const demo: FilterType<Example, string> = {
  a: "1",
  d: "1",
};
