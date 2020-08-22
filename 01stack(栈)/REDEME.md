### Stack(栈)

实现（基于数组）：

```js
function Stack() {
            //栈属性
            this.items = []
            // 栈操作
            // 1.添加
            Stack.prototype.push = function (elment) {
                this.items[this.items.length] = elment;
            }
            // 2.删除
            Stack.prototype.pop = function () {
                this.items.pop();
            }
            // 3.栈顶元素
            Stack.prototype.topElment = function () {
                return this.items[this.items.length - 1];
            }
            // 4.判断是否空
            Stack.prototype.isEmpty = function () {
                return this.items.length === 0;
            }
            // 5.大小
            Stack.prototype.length = function () {
                return this.items.length;
            }
            // 6.将栈结构以字符串返回
            Stack.prototype.toString = function () {
                return  this.items.join("")
                
            }
        }
```



