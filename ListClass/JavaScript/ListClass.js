class ListClass {
  constructor() {
    // 当前存储容器
    this.list = [];
    // 列表元素的个数
    this.listSize = 0;
    // 列表的当前位置
    this.pos = 0;
  }

  // length 方法返回当前元素的个数
  length = () => this.listSize;

  // clear 清空整个列表
  clear = () => {
    // 清空列表
    this.list.length = 0;
    // 将列表数量重置
    this.listSize = 0;
  }

  // toString 返回列表的字符串形式
  toString = () => {
    // 定义返回值
    let res = '';
    // 循环获取容器内的数据
    for (let i = 0; i < this.listSize; i++) {
      res += this.list[i];
      res += i === this.listSize - 1 ? '' : ','
    }
    return res;
  }

  // getElement 返回当前位置的元素
  getElement = () => this.list[this.pos];

  // inset 在现有的元素位置后插入新元素
  inset = (element, after) => {
    // 查找到需要插入到位置
    let index = this.findIndex(after);
    // 判断是否找到了
    if (index === -1) {
      return false;
    }
    // 将 index 位置往后到都单独存一份
    const list = [];
    for (let i = ++index; i < this.listSize; i++) {
      list.push(this.list[i]);
    }
    // 插入元素
    this.list[index++] = element;
    // 增加容器数量
    this.listSize++;
    // 恢复之前都数据
    for (; index < this.listSize; index++) {
      this.list[index] = list.shift()
    }
  }

  // findIndex 查询指定元素到下标
  findIndex = (element) => {
    for (let i = 0; i < this.listSize; i++) {
      if (this.list[i] === element) {
        return i;
      }
    }
    return -1;
  }

  // find 在列表中查找指定元素
  find = (element) => {
    for (let i = 0; i < this.listSize; i++) {
      if (this.list[i] === element) {
        return true;
      }
    }
    return false;
  }

  // append 在列表末尾添加新元素
  append = (element) => this.list[this.listSize++] = element;

  // remove 删除指定元素
  remove = (element) => {
    // 查找到需要删除到位置
    let index = this.findIndex(element);
    // 判断是否找到了
    if (index === -1) {
      return false;
    }
    // 减少列表数量
    this.listSize--;

    // 将 index 位置往后都前移一位
    for (let i = index; i < this.listSize; i++) {
      this.list[i] = this.list[i + 1]
    }
  }

  // front 将列表当前位置移动到第一个元素
  front = () => this.pos = 0;

  // end 将列表当前位置移动到最后个元素
  end = () => this.pos = this.listSize - 1;

  // prev 将当前位置前移一位
  prev = () => {
    if (this.pos > 0) {
      this.pos--;
    }
  }

  // next 将当前位置后移一位
  next = () => {
    if (this.pos < this.listSize) {
      this.pos++;
    }
  }

  // hasNext 判断是否还有后一位
  hasNext = () => this.pos < this.listSize;

  // hasPrev 判断是否还有前一位
  hasPrev = () => this.pos > 0;

  // currPos 返回当前位置
  currPos = () => this.pos;

  // moveTo 将当前位置移动到指定位置
  moveTo = (index) => this.pos = index;
}

