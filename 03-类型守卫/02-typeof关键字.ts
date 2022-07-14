// typeof 类型保护只支持两种形式：typeof v === "typename" 和 typeof v !== "typename"
// typename 必须是 number、string、boolean、symbol

function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}
