// 1. 判断是否为原始值或原始值 typeof()  == "object"
// 2. 判断数组还是对象
// 3. 建立对应的数组或对象


// 第一种方法要判断数组和对象
function deepClone1(origin, target) {
    var target = target || {},
        isArr = Object.prototype.toString,
        arrStr = "[object Array]";

    for (var pr in origin) {
        if (origin.hasOwnProperty(pr)) {
            if (origin[pr] !== null && typeof (origin[pr]) == "object") {
                target[pr] = (isArr.call(origin[pr]) == arrStr) ? [] : {};
                deepClone1(origin[pr], target[pr])
            } else {
                target[pr] = origin[pr]
            }
        }
    }
    return target
}

// 不用判断数组对象
function deepClone(obj) {
    if (obj === null) return obj;
    // if (obj instanceof Date) return new Data(obj);
    // if (obj instanceof RegExp) return new RegExp(obj);
    if (typeof obj !== "object") return obj;
    var cloneObj = new obj.constructor();
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            cloneObj[i] = deepClone(obj[i]); // 递归
        }
    }
    return cloneObj;
}



var obj = {
    name: "car",
    arr: [1, 3, 4, 6],
    color: {
        one: "red"
    },
    say: function () {
        console.log(this)
    }
}

console.log("lod", obj) // new { name: 'car', arr: [ 1, 3, 4, 6 ], color: { one: 'red' } }
var newObj = deep(obj)
console.log("new", newObj) // new { name: 'car', arr: [ 1, 3, 4, 6 ], color: { one: 'red' } }

