// 1. 判断是否为原始值或原始值 typeof()  == "object"
// 2. 判断数组还是对象
// 3. 建立对应的数组或对象

function deepClone(origin, target) {
    var target = target || {},
        toStr = Object.prototype.toString,
        arrStr = "[object Array]";

    for (var prop in origin) {
        if (origin.hasOwnProperty(prop)) {
            if (tyeof[prop] !== "null" &&  typeof (origin[prop] == 'object')) {
                // 判断数组
                // if (toStr.call(origin[prop] == arrStr)) {
                //     target[prop] = []
                // } else {
                //     target[prop] = {}
                // }
                target[prop] = (toStr.call(origin[prop] == arrStr))
                ? [] : {}

                deepClone(origin[prop], target[prpo])
            } else {
                target[prop] = origin[prop]
            }
        }
    }
    return target;
}