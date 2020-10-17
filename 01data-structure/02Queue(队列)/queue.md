## Queue(队列)
### 1 是什么？
应用：打印队列，如打印五分文档每一个文档都会发送到打印队列。从第一个文档开始排队，先进来的先打印。

实现(基于类)

```js
function Queue() {
            // 创建
            this.items = {};
            this.count = 0;         // 队列大小
            this.lowestCount = 0;   // 第一个元素的位置
            // 方法
            // 1. 添加(enQueue)
            Queue.prototype.enQueue = function(elment) {
                //注意一下， this.items[this.count]相当于this.items.0 现在的items = {0: elment}
                this.items[this.count] = elment;
                this.count++;  
            }
            // 2. 移除(deQueue)
            Queue.prototype.deQueue = function() {
                if((this.count - this.lowestCount) === 0){
                    return undefined;
                }
                var result = this.items[this.lowestCount];
                delete this.items[this.lowestCount];
                this.lowestCount++;
                return result;
            }
        }
```

### 2 如何让使用？


### 双端队列（double-ended-queue）
