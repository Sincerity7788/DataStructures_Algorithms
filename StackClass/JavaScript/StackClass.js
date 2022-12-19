class StackClass {
  constructor() {
    // 用数组作为容器
    this.dataStore = [];
    // 记录栈内数量
    this.top = 0;
  }
  // 压栈/入栈 方法
  push = (element) => this.dataStore[this.top++] = element;

  // 弹栈/出栈 方法
  pop = () => {
    const res =  this.dataStore[--this.top];
    // 将容器最后一位去掉
    this.dataStore.length = this.dataStore.length - 1;
    // 返回栈顶数据，同时将栈内数量减1
    return res;
  }

  // 返回当前栈定的数据
  peek = () => this.dataStore[this.top - 1]

  // 清空栈
  clear = () => {
    // 清空栈内数据
    this.dataStore.length = 0;
    // 清空记录栈内元素个数
    this.top = 0;
  }

  // 获取栈内元素数量
  length = () => this.top;

  // 返回逗号拼接元素的字符串
  toString = () => {
    // 定义返回值
    let res = '';
    // 循环获取容器内的数据
    for (let i = 0; i < this.top; i++) {
      res += this.dataStore[i];
      res += i === this.top - 1 ? '' : ','
    }
    return res;
  }
}
