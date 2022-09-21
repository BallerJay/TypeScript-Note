//Omit(a,b) 接收两个参数，第一个是要编辑的基本类型，第二个是你要删除的类型。
type Person = {
  name: string;
  sex: string;
};

type newPerson2 = Omit<Person, "name">; // {sex: string}

const demo2: newPerson2 = {
  sex: "男",
};

// 实现代码
// type Omit <T,K extends keyof any> = Pick<T,Exclude<keyof T,K>>;
