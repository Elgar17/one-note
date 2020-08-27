## 案例——击鼓传花

#### 💭解题思路：
JvaScript中数组可以代替队列所以这里就用数组代替了，思路是将数组的最后一个元素取出来(shift: 删除并返回最后一个元素)，然后把它添加到数组的最前面。一直循环{2}，循环次数为传入的次数。这时候淘汰一个人{4}并显示出来。一直到只剩最后一个人。

```js

var list = ["elgar", "jeck", "Tom", "goog"];    // {1}

function sendFlower(nameList, num){
    var arr = nameList;
    var eliminated = "";
    while(arr.length > 1){
        for(var i = 0; i < num; i++){           // {2}
            arr.push(arr.shift())               // {3}
        }
        eliminated = arr.shift();               // {4}
        console.log(eliminated + '被淘汰');
    }
    console.log(arr[0]);
    return arr[0];
}
sendFlower(list, 86)
// 打印结果
// Tom被淘汰
// jeck被淘汰
// goog被淘汰
// elgar
```