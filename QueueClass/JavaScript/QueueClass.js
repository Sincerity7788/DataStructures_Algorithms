class QueueClass{
  constructor(){
    // 初始化一个容器
    this.dataStore = [];
  }
  // 尾部添加元素的方法
  enqueue = (element) => {
    this.dataStore.push(element);
  };

  // 头部删除元素的方法
  dequeue = () => {
    this.dataStore.shift();
  };

  // 获取头部元素
  front = () => this.dataStore[0];

  // 获取尾部元素
  back = () => this.dataStore[this.dataStore.length - 1];

  // 逗号拼接队列中的元素
  toString = () => {
    // 定义返回值
    let res = '';
    // 循环获取容器内的数据
    for (let i = 0, len = this.dataStore.length; i < len; i++) {
      res += this.dataStore[i];
      res += i === len - 1 ? '' : ','
    }
    return res;
  };

  // 验证队列是否为空
  empty = () => this.dataStore.length === 0;
}
