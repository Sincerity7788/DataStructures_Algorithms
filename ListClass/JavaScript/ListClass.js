class ListClass{
  constructor() {
    // 列表元素的个数
    this.listSize = 0;
    // 列表的当前位置
    this.pos = 0;
  }
  // length 方法返回当前元素的个数
  length = () => this.listSize;

  // clear 清空整个列表
  clear = () => {}

  // toString 返回列表的字符串形式
  toString = () => {}

  // getElement 返回当前位置的元素
  getElement = () => {}

  // inset 在现有的元素位置后插入新元素
  inset = () => {}

  // append 在列表末尾添加新元素
  append = () => {}

  // remove 删除指定元素
  remove = () => {}

  // front 将列表当前位置移动到第一个元素
  front = () => {}

  // end 将列表当前位置移动到最后个元素
  end = () => {}

  // prev 将当前位置前移一位
  prev = () => {}

  // next 将当前位置后移一位
  next = () => {}

  // hasNext 判断是否还有后一位
  hasNext = () => {}

  // hasPrev 判断是否还有前一位
  hasPrev = () => {}

  // currPos 返回当前位置
  currPos = () => {}

  // moveTo 将当前位置移动到指定位置
  moveTo = () => {}
}
