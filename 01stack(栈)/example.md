## 应用 十进制转二进制
### 1， 什么是二进制？
这么说吧，假如让我们只能用1和0表示很大的数，怎么表示？ 1可以用1表示到表示2的时候只能用10表示了那么3呢？估计已经猜出来了是11。
| 十进制 | 二进制 |
|--------|--------|
| 0      | 0      |
| 1      | 1      |
| 2      | 10     |
| 3      | 11     |
| 4      | 100    |
| 5      | 101    |
| ...    | ...    |


### 2. 如何实现？
🏷这里我们利用栈实现十进制转换成二进制的程序。
№：将输入的十进制数除以二将余数保存到栈中，知道十进制数为0位置。然后拼接栈中的数据。


```js
function decimalToBinary(decNum) {
    var remStack = new Stack();     // 创建一个栈
    var num = decNum;
    var rem = 0;                    // 存放余数
    var bStr = '';                  // 存放要返回的数
    while(num > 0){                 
        rem = Math.floor(num%2);    // 将十进制数除2取余
        remStack.push(rem);
        num = Math.floor(num/2);
    }
    while(!remStack.isEmpty()){
        bStr =  bStr + remStack.pop();
    }
    return bStr;
}
console.log(decimalToBinary(10))    // 1010
```