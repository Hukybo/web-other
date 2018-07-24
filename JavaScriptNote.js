//《标识符》
var name = "hukybo"
var _age = 30
var $isMan = true
var loveer1 = null
var loveer2
var obj = { "like1": "eat", "like2": "sport" }
var say = function () { }


//《变量》
function test1() {
    var message1 = "hi2"
}
alert(message1); // 错误，不能直接获取局部变量
var test = 100
delete test // false 当用var声明一个变量时，创建的这个属性是不可配置的，不能删除
test5 = 100
delete test5 // true 全局变量是全局对象的属性，可以删除
// delete只能删除自有属性，不能删除原型上的属性

//《数据类型》
/*
Undefined
Null
Boolean
String
Number
Object
*/


//typeof 检测属性的类型
typeof ("hukybo") // "string"
typeof ("hukybo".toString) // "function" 检查字符串对象所继承原型链上的属性
typeof (100) // "number"
typeof true // "boolean"
typeof null // "object"
typeof (undefined) // "undefined"
typeof ({}) // "object"
typeof function () { } // "function"
typeof loveer3 // "undefined"

var a = 1
var b = void a
b // undefined
// void 运算符 对给定的表达式进行求值，然后返回 undefined。

// 《严格模式》
"use strict"

// 《检测类型》
obj1 instanceof Object // 变量obj1是Object吗
arr1 instanceof Array // 变量arr1是Array吗
reg1 instanceof RegExp // 变量reg1是RegExp吗

function Fn() { }
Fn.prototype.name = "google"
var obj = new Fn()
obj instanceof Fn // true如果obj继承自Fn.prototype，就返回true
Fn.prototype.isPrototypeOf(obj) // true 检测obj对象是否存在于Fn.prototype上
Object.prototype.toString.call(fn) // "[object Function]" 检测对象是不是真正的函数对象

var obj = {}
Object.prototype.toString.call(obj).slice(8, -1) // "Object" 返回对象的类型

// 利用鸭式辨型检测一个类型
// 如果obj实现了除第一个参数之外的所有参数所表示的方法，则返回true
// 不能检测内置类的方法，因为内置类的方法是不可枚举的
function quacks(obj/*各种方法*/) {
    for (var i = 1; i < arguments.length; i++) {
        var arg = arguments[i];
        switch (typeof arg) {
            case "string":
                if (typeof obj[arg] !== "function") {
                    return false
                }
                continue;
            case "function":
                arg = arg.prototype;
            case "object":
                for (var key in arg) {
                    if (typeof arg[key] !== "function") {
                        continue;
                    }
                    if (typeof obj[key] !== "function") {
                        return false
                    }
                }
        }
    }
    return true
}
function Fn() {
    this.name = "google"
    this.age = 15
}
Fn.prototype.say = function () {
    console.log("My name is " + this.name + "\nMy age is " + this.age)
}
var obj = new Fn()
quacks(obj, obj.say) // true

//《Undefined 类型》
var message2
alert(message2) // "undefined"
alert(typeof message3) // "undefined"


//《Null 类型》
//用来保存对象的变量，最好将该变量初始化为null


//《Boolean 类型》
Boolean("Hello world!") // true
Boolean("") // false
Boolean(100) // true
Boolean(0) // false
Boolean({}) // true
Boolean(null) // false
Boolean(undefined) // false


//《Number 类型》
var intNumber = 100 // 整数
var octalNumber1 = 070 // 八进制的56
// var octalNumber2 = 079 // 无效的八进制——解析为79，因为八进制数字序列时0～7
var hexNumber = 0xA // 十六进制的10
var floatNumber = 3.125e7 // 31250000

// 计算时，所有八进制和十六进制表示的数值最终都将被转换成十进制
isFinite(100) //检查参数是不是在最小值与最大值之间 true
NaN / 10 // NaN
NaN == NaN // false
isNaN(NaN) // true
isNaN("10") // false
isNaN(false) // false(可以被转换成0)

// >>> Number()字符串转换为数值，不合理，不常用
Number(false) // 0
Number(null) // 0
Number(undefined) // NaN
Number(011) // 11
// Number(0fx) // 15
Number("") // 0
Number("100") // 100
Number("Hello") // NaN
// >>> parseInt()、parseFloat()字符串转换为数值，为了准确，必须要第2个参数
parseInt("1a") // 1
parseInt("") // NaN
parseInt("AF") // NaN
parseInt("AF", 16) // 175
parseInt(1.5) // 1
parseInt(070, 8) // 46
parseInt(070, 10) // 56
parseInt(070, 16) // 86
parseInt(5.6e5) // 560000
parseInt(5.6e-5) // 5
parseFloat("01.5") // 1.5
parseFloat(5.6e-5) // 0.000056


// 《String 类型》
var str1 = "\tHello world!\n\\\\这是一个注释" + "\nMy name\'s \"Hukybo\" and you?"
var str = "Hu\
kybo"
str // "Hukybo" 用反斜杠可以换行
String(str1) // 转换为字符串
var value1 = 10
var value2 = true
var value3 = null
var value4
String(value1) // "10"
String(value2) // "true"
String(value3) // "null"
String(value4) // "undefined"

str.length // 51

var num1 = 10
num1.toString() // "10"
num1.toString(2) // "1010"
num1.toString(8) // "12"
num1.toString(10) // "8"
num1.toString(16) // "a"

var str = "google"
str.slice(1) // "oogle"
str.slice(1, 5) // "oogl"
str.slice(-1) // "e"

String.fromCharCode(67, 97, 116) // "Cat" 根据一串数字编码，返回一个字符串

// 字符串中的所有方法返回的是一个新值，原始字符串并未改变

// 全局对象
// 全局属性：undefined、NaN、Infinity
// 全局函数：isNan()、parseInt()、eval()
// 构造函数：Date()、RegExp()、String()、Number()、Array()、Object()
// 全局对象：Math、JSON

// 《Object 类型》
// 如果函数初始化（使用new操作符）一个新对象，称之为构造函数。每个构造函数定义了一类对象（由构造函数初始化的对象组成的集合）
// 对象可以创建、设置、查找、删除、检测、枚举
var o1 = new Object() // 创建对象
var o2 = {} // 创建对象
o2.toString() // "[object Object]" 对象转换为字符串
o1.name = "Hukybo" // 设置属性
o2["age"] = 29 // 设置属性
o1["name"] // 查询属性
o2.age // 29 查询属性
"name" in o1 // true 检测属性，包含继承的属性
o1.hasOwnProperty("name") // 检查“name”属性是否是对象的自有属性，对于继承属性它将返回false
o1.propertyIsEnumerable("name") // 检查“name”属性是否自有属性，并且是否可使用for-in枚举
o1.name !== undefined // 判断一个属性是否是undefined来检测属性是否存在
delete o1.name // 删除属性
delete o2["age"] // 删除属性

// for in 可以遍历对象所有的属性和方法，包括继承的属性和方法
o1.keys() // 返回对象可枚举自有属性名称的数组
o1.getOwnPropertyNames() // 返回对象所有属性名称的数组
o1.constructor // 返回创建当前对象的构造函数

// 使对象不可扩展1
var obj = { name: "google" }
Object.preventExtensions(obj) // 将对象转为不可扩展，只会影响到对象本身，不会影响对象的原型
obj.age = 10
obj.age // undefined 无法添加属性
delete obj.name
obj.name // undefined // 可以删除
obj.name = "alibaba"
obj.name // "alibaba" 可以修改
// 使对象不可扩展2
var obj = { name: "google" }
Object.seal(obj)
obj.age = 10
obj.age // undefined 无法添加属性
delete obj.name // false
obj.name // "google" 无法删除属性
obj.name = "alibaba"
obj.name // "alibaba" 但是可以修改

// 检测对象是否封闭式
var obj = {}
Object.isSealed(obj) // false

// 冻结对象
var obj = {}
Object.freeze(obj)
obj.name = "google" // "google"
obj.name // undefined
Object.isFrozen(obj) // true 检测对象是否冻结

// JSON
// JSON数字不用加双引号
// JSON字符串必须使用双引号
// JSON对象属性名必须使用双引号
var obj = { x: 1, y: { z: [false, null, ""] }, z: function () { console.log("Hello") }, age: undefined, name: "google" }
var test1 = JSON.stringify(obj) // 把对象序列化为字符串。不包含空格字符或缩进。
test1 // "{"x":1,"y":{"z":[false,null,""]},"name":"google"}"
// 在序列化为字符串后，所有函数以原型都会被有意忽略，值为undefined的属性也会被跳过。
var test5 = JSON.stringify(obj, ["x", "y"]) // 使用第2个参数数组过滤，只序列化数组中的属性
test5 // "{"x":1,"y":{}}"
var test8 = JSON.stringify(obj, function (key, value) { // 使用第2个参数函数过滤
    switch (key) {
        case "x":
            return 10
        case "y":
            return value.z.join(",")
        case "age":
            return 15
        case "name":
            return undefined
        default: // 一定要提供这一项
            return value
    }
})
test8 // "{"x":10,"y":"false,,","age":15}"
var test9 = JSON.stringify(obj, null, 4) // 带缩进
test9
/*
"{
    "x": 1,
    "y": {
        "z": [
            false,
            null,
            ""
        ]
    },
    "name": "google"
}"
*/
var obj1 = { x: 1, y: { z: [false, null, ""] }, z: function () { console.log("Hello") }, age: undefined, name: "google", toJSON: function () { return this.x } }
var test10 = JSON.stringify(obj1)
test10 // "1" 如果对象里面有toJSON(),就调用该方法。无视其他过滤。
var test2 = JSON.parse(test1) // 解析JSON
test2 // {x: 1, y: {…}, name: "google"}
var obj = {
    "name": "google",
    myDate: new Date(2018, 6, 1)
}
var test = JSON.stringify(obj)
var test1 = JSON.parse(test, function (key, value) { // 解析JSON，第2个参数是还原函数
    if (key == "myDate") {
        return new Date(value)
    } else {
        return value
    }
})
test2 // {name: "google", myDate: Sun Jul 01 2018 00:00:00 GMT+0800 (中国标准时间)}

isPrototypeOf() // 用于测试一个对象是否存在于另一个对象的原型链上
function Fun7() {
}
var obj1 = new Fun7()
Fun7.prototype.isPrototypeOf(obj1) // 检查obj1对象是否继承自Fun7.prototype

//四种转换字符串方法
o1.toLocaleString() // 返回对象的字符串，该字符串与执行环境的地区对应
o1.toString() // 返回对象的字符串
o1.valueOf() // 返回对象的具体字符串
// Object是所有对象的基础，因此所有对象都有上面的属性和方法
to.JSON()

// 《for-in 语句》
for (var i1 in o1) {
    alert(i1)
} // for-in 枚举对象的属性，在循环前要该对象的值不是null或undefined

if (1) {
    throw "您的输入有误"
} // Uncaught 错误 抛出一个错误

try {
    if (1) {
        throw "您的输入有误"
    }
} catch (test) {
    alert(test)
} finally {
    alert("下一题")
}

// try
try {
    log(1)
} catch (x) {
    console.log("语法错误：" + x.name)
} // 语法错误：ReferenceError

try {
    log(1)
} catch (x) {
    console.log("语法错误：" + x.message)
} // 语法错误：log is not defined


// 《理解参数》
function fun1() {
    alert(arguments.length) // 获取参数个数
    alert(arguments[1]) // arguments的值始终与参数的值同步，如果没有传递参数，arguments的值是undefined
}

// 所有函数的参数，是按值传递的
function setName(obj) {
    obj.name = "Hukybo"
    obj = new Object() // 这里是创建了一个全新的对象
    obj.name = "Donghuina"
}
var person1 = new Object()
setName(person1) // 对象作为参数传递给函数，传递的并不是对象的引用，而是值
alert(person1.name) // "Hukybo"

// 函数的参数也可以是对象
function fn(data) {
    console.log("My name is " + data.name + "\nMy age is " + data.age)
}
var obj = {
    name: "google",
    age: 15
}
fn(obj) // My name is google My age is 15

// 变量包含两种数据类型：基本类型值（Undefined、Null、Boolean、Number、String）和引用类型值（Object）
// 基本类型值保存在栈内存中，引用类型值保存在堆内存中
// 复制基本类型值是：创建完全独立的新值
// 复制引用类型值是：引用对象的指针，这个指针指向存储在堆中同一个对象
// 由于JavaScript没有块级作用域，for循环中的变量i，在循环结束后，i会存在循环外部的执行环境中
// 一旦数据不再有用，最好将其值设置为null，让数据脱离执行环境，以便垃圾收集器下次运行时将其回收
// 每次进入一个新的执行环境，都会创建一个用于搜索变量和函数的作用域链


// 《Object 类型》
// 创建Objec类型实例的方式有两种
var person2 = new Object(); // 创建Object类型实例
var person3 = {}; // 创建Objec类型实例
person2.name = "Hukybo" // 给对象赋值
person3["name"] = "Hukybo" // 给对象赋值

var personName = "name"
person3[personName] // 使用方括号的优点是，可以通过变量来访问对象的属性

// 如果对象的键值是数字，那么会自动转换成字符串


// Array 方法
var colors = ["red", "orange", "blue"];
alert(colors[0]); // 返回第一项
colors[1] = "black"; // 修改第二项
colors[3] = "brom"; // 新增第四项
alert(colors[4]); // undefined
colors.length = 2; // 保留前两项，剩下的移除
colors[colors.length] = "write"; // 向数组末尾添加
Array.isArray(colors); // true 判断是不是数组
colors.valueOf(); // 返回数组本身
colors.toSreing(); // "red,orange,blue" 返回数组中每个值以逗号分隔的字符串
alert(colors); // "red,orange,blue" alert在后台会自动调用toString()方法
Object.defineProperty(a, "length", { writable: false }) // 设置数组对象的length属性为只读

// 检测一个对象是否为数组
function is_array(value) {
    return value && typeof value === "object" && value.constructor === Array;
}
// 检测一个对象是否为数组，这个更可靠
function is_array(value) {
    return Object.prototype.toString.apply(value) === "[object Array]"
}
// tostring和tolocalestring方法的区别，主要在于处理data()上
var time1 = new Date()
time1.toString(); // Mon May 21 2018 20:02:19 GMT+0800 (CST) 在显示日期和时间上没价值
time1.toLocaleString(); // 2018/5/21 下午8:02:19 在显示日期和时间上没价值
time1.toLocaleDateString(); // 2018/5/21
time1.toLocaleTimeString(); // 下午8:02:19


// 把数组转换为字符串
var a = ['a', 'b', 'c'];
a.join() // "a,b,c"
a.join("|") // "a|b|c"
a.join("") // "abc"

var obj = { "0": "a", "1": "b", length: 2 }
Array.prototype.join.call(obj, "|") // "a|b"



colors.push("purple") // 4 数组末尾添加元素
colors.pop() // "purple" 弹出最后一个元素
colors.unshift("purple") // 4 数组前端添加元素
colors.shift() // "purple" 移除第一个元素
delete colors[0] // 删除索引为0的元素



// 数组反转顺序
var a = [0, 1, 5, 10, 15]
a.reverse() // [15, 10, 5, 1, 0]



numArr1.sort() // [0, 1, 10, 15, 5] sort()方法会调用每个数组项的toString()方法，比较的是字符串
function riseSort(a, b) {
    return a - b;
} // 升序
function dropSort(a, b) {
    return b - a;
} // 降序
numArr1.sort(riseSort) // [0, 1, 5, 10, 15]
numArr1.sort(dropSort) // [15, 10, 5, 1, 0]

// 数组连接
var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
a.concat(b, true); // ["a", "b", "c", "x", "y", "z", true]
a // ['a', 'b', 'c']


// 数组复制
var arr = ['a', 'b', 'c'];
arr.slice(1) // ["b", "c"]
arr.slice(0, 1) // ["a"]
arr.slice(-1) // ["c"]
arr.slice(5) // []
arr // ["a", "b", "c"]



numArr1.splice(0, 2) // [0, 1] 删除元素，改变原数组。参数1是起始位置，参数2是删除元素的数量
numArr1.splice(2, 0, "red") // 插入元素，改变原数组。参数1是起始位置，参数2是删除元素的数量，参数3是插入的项
numArr1 // [5, 10, "red", 15]
numArr1.splice(2, 1, "orange") // ["red"] 替换元素，改变原数组。参数1是起始位置，参数2是删除元素的数量，参数3是插入的项
numArr1 // [5, 10, "orange", 15]
numArr1.indexOf(10) // 1 从前往后查元素位置
numArr1.indexOf(1) // -1 没有找到元素就返回-1
numArr1.indexOf(10, 1) // 参数2是从哪开始查
numArr1.lastIndexOf("orange") // 2 从后往前查找元素位置

// every()方法：数组中每一项都运行指定函数，如果该函数对每一项都返回true，则返回true
numArr2 = [5, 10, 15]
numArr1.every(function (a) {
    return a > 5
}) // false 

// some()方法：数组中每一项都运行指定函数，如果该函数对任意一项返回true，则返回true
numArr2.some(function (a) {
    return a > 1
}) // true

// filter()方法：数组中每一项都运行指定函数，返回时true组成的数组
numArr2.filter(function (a) {
    return a > 5
}) // [10, 15]

// map()方法：数组中每一项都运行指定函数，返回计算结果
numArr2.map(function (a) {
    return a + 1
}) // [6, 11, 16]

// map()方法
function fn1(a) {
    return function (b) {
        return b.map(a)
    }
}
function fn2(a) {
    return a + 1
}
fn1(fn2)([1, 2, 3, 4, 5]) // [2, 3, 4, 5, 6]

// forEach()方法：本质上与使用for循环迭代数组一样
numArr2.forEach(function (a) {
    console.log(a + 1)
}) // 6 11 16

// reduce()方法：从前往后求和
numArr2.reduce(function (a, b, c, d) {
    return a + b
}) // 30

// reduce()方法：从后往前求和
numArr2.reduceRight(function (a, b, c, d) {
    return a + b
}) // 30

Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
    return this;
} // 给 Function 类型扩充方法
Array.method("reduce", function(func, value) {
    for (var i = 0; i < this.length; i++) {
        value = func(this[i], value);
    }
    return value;
}) // 给 Array 扩充方法
var data = [4, 8, 15, 16, 23, 42];
var add = function (a, b) {
    return a + b;
}
var mult = function (a, b) {
    return a * b;
}
data.reduce(add, 0); // 108
data.reduce(mult, 1); // 7418880
data.total = function () {
    return this.reduce(add, 0)
} // 因为数组也是对象，可以给一个单独的数组添加一个方法
data.total(); // 108

// Object.create 方法用在数组是没有意义的，因为它返回的是一个对象，而不是数组。
// 虽然这个对象继承了这个数组的值和方法，但它没有那个特殊 length 属性。

[...Array(5).keys()] // [0, 1, 2, 3, 4]


// 《Date 类型》
var now1 = new Date() // 创建日期对象
var now2 = new Date(Date.parse("May 25 2001")) // 创建指定日期
var now3 = new Date("May 25 2001") // 创建指定日期
var now4 = new Date(Date.UTC(2005, 4, 5, 17, 55, 55)) // 创准指定日期
var now5 = new Date(2005, 6, 5, 17, 55, 55) // 创准指定日期
Date.now() // 返回调用整个方法时的毫秒数
now4 < now5 // true
now1.toDateString() // "Mon May 21 2018"
now1.toTimeString() // "22:05:08 GMT+0800 (CST)"
now1.toUTCString() // "Mon, 21 May 2018 14:05:08 GMT"


// 《RegExp》
var re1 = /hu/ig;
re1.test("Hukybo") // true 匹配是否成功，不要对test方法使用 g 标识
re1.exec("Donghuinahukybo") // ["hu", index: 4, input: "Donghuinahukybo", groups: undefined]
var re2 = /hu(ky)?/gi;
re2.exec("hukybo") // ["huky", "ky", index: 0, input: "hukybo", groups: undefined]
//exec()方法：不设置g，始终返回第一个匹配项；设置g只返回一个匹配项，下次调用exec()继续从上次位置查找新的匹配项
var re3 = new RegExp("hu", "gi")
re3.toString() // "/hu/gi"
var text2 = "this has been a short summer"
var re4 = /(.)hort/g
if (re4.test(text2)) {
    alert(RegExp.input) // "this has been a short summer"
    alert(RegExp.leftContext) // "this has been a "
    alert(RegExp.rightContext) // " summer"
    alert(RegExp.lastMatch) // "short"
    alert(RegExp.lastParen) // "s"
}


// 《Function》
// 函数也是对象，也有它自身的属性和方法，函数名是一个指向函数对象的指针
// 不带函数名是访问函数的指针，而非调用函数
function sum1(num1, num2) {
    return num1 + num2;
} // 以函数声明的方式定义函数，会提升。只能在全局作用域或在其他函数作用域中定义，不能在if、for、trywith中定义

var sum1 = function (num1, num2) {
    return num1 * num2;
}; // 以函数表达式的方式定义函数，不会被提升。与上面的定义函数几乎没有区别。可以在任何地方定义。

sum1(5, 10) // 50 后面的函数会覆盖前面的函数

var sum3 = new Function("num1", "num2", "return num1 + num2"); // 定义函数，不推荐

// 可以将函数作为值，传递给另一个函数
function addFunction(a, b) {
    return a(b)
}
function say1(a) {
    return "Hello " + a;
}
addFunction(say1, "Hukybo") // "Hello Hukybo"

// 变量作用域链在函数定义的时候就已经产生了，而不是在函数调用的时候才产生
// 每个嵌套函数都有各自的作用域链
// 函数可以返回另一个函数，形成闭包
function comparisonFunction(a) {
    return function (b, c) {
        var value1 = b[a];
        var value2 = c[a];
        return value1 - value2;
    }
}
var fn = (function () {
    var a = 0
    return function fn1() {
        return a++
    }
})()
fn() // 0
fn() // 1 形成闭包

// 利用闭包实现私有属性存取
function fn(obj, name, type) {
    var value
    obj["get" + name] = function () { return value }
    obj["set" + name] = function (v) {
        if (type && !type(v)) {
            throw Error("输入类型有误")
        } else {
            value = v
        }
    }
}
function type(data) {
    return typeof data == "string"
}
var obj = {}
fn(obj, "name", type)
obj.setname("google")
obj.getname() // "google"

var data1 = [{ name: "bo", age: 30 }, { name: "na", age: 29 }]
data1.sort(comparisonFunction("name"))
data1[0] // {name: "bo", age: 30}
data1.sort(comparisonFunction("age"))
data1[0] // {name: "na", age: 29}

// 函数的arguments属性是函数的所有参数
function multiplicative(a, b) {
    var c;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] == 0) {
            c = 0;
        }
    }
    if (c == 0) {
        alert("只能输入非0值");
    } else {
        return a * b;
    }
}

// arguments.callee 指向找个arguments对象的函数
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }
} // 阶乘函数

// this 是一个关键字，不是变量，也不是属性，不允许给this赋值。
// this没有作用域限制，嵌套的函数不会从调用它的函数继承this。
var obj = { name: "google" }
obj.fn1 = function () {
    console.log(this.name)
}
obj.fn1() // "google" 如果嵌套函数作为方法调用，其this的值指向调用它的对象。

function fn1() {
    function fn2() {
        console.log(this)
    }
    return fn2()
} // 返回window 如果嵌套函数作为函数调用，其this的值window(非严格模式)/undefined(严格模式)

// 测试 arguments 和 callee
function fun1(a, b) {
    console.log(arguments[0]); // 返回第一个实参
    console.log(arguments.length); // 返回实参量
    console.log(arguments.callee); // 返回函数本身
    console.log(fun1.length); // 返回函数行参量
}

// 如果一个函数f是在全局作用域内被调用的,则f.caller为null
// 相反，如果一个函数是在另外一个函数作用域内被调用的，则f.caller指向调用它的那个函数
// 该特性是非标准的，请尽量不要在生产环境中使用它
function f(name) {
    console.log(arguments.callee.caller)
    function b(age) {
        console.log(arguments.callee.caller)
    }
    b(1)
}


function fun2() {
    console.log(this); // 全局作用域中，返回window对象
}

window.color = "red"
var obj2 = { color: "blue" };
function fun3() {
    return this.color;
}
fun3(); // "red"
obj2.sayColor = fun3;
obj2.sayColor(); // "blue"
fun3(); // "red"

// f和apply可以改变函数的执行环境，即设置函数体内this对象的值
fun3.call(this); // "red" 设置fun3函数的this对象指向window对象
fun3.call(obj2); // "blue" 设置fun3函数的this对象指向obj2对象
fun3.apply(this); // "red" 设置fun3函数的this对象指向window对象
fun3.apply(obj2); // "blue" 设置fun3函数的this对象指向obj2对象

// call
function fn() {
    this.name = "google"
    this.say = function () {
        console.log("Hello " + this.name)
    }
}
var obj = {}
fn.call(obj)
obj.name // "google"
obj.say() // "Hello google"

// call apply
function fn(a, b) {
    return function () {
        console.log(arguments) // [1,8]
        console.log(b.apply(this, arguments)) // 9
        return a.call(this, b.apply(this, arguments))
    }
}
var fn1 = function (a) {
    return a * a
}
var fn2 = function (a, b) {
    return a + b
}
var test = fn(fn1, fn2)
test(1, 8) // 81

// call
var obj = {
    name1: "alibaba",
    name2: "taobao"
}
function fn(v) {
    console.log("My name is " + v)
}
for (i in obj) {
    fn.call(undefined, obj[i])
}
// My name is alibaba
// My name is taobao

// call
function Func1(name) {
    this.name = name;
}
Func1.prototype.say = function() {
    console.log("My name is " + this.name);
}
var obj1 = new Func1("google");
function Func2(name) {
    this.name = name;
}
var obj2 = new Func2("alibaba");
obj1.say.call(obj2);

// apply
function add(a, b) {
    return a + b
}
var arr = [7, 8]
add.apply(null, arr) // 15

// 函数的bind()方法会创建一个函数的实例，其this值会被绑定到bind(obj)obj对象上
var fun4 = fun3.bind(obj2); // fun3函数调用bind()方法，并传入一个obj2对象，创建了fun4函数
fun4(); // "blue"

// 函数的bind()方法
function fn(y) {
    console.log(this.x + y)
}
var obj = {
    x: 1
}
var fn1 = fn.bind(obj)
fn1(2) // 3

// bind
function fn(x, y) {
    return x + y + this.z
}
var fn1 = fn.bind({ z: 7 }, 1) // 绑定x和z
fn1(2) // 10 传入实参y
// 由bind()方法创建的函数没有prototype属性
// 由bind()方法创建的函数，用作构造函数时，传入的实参会原封不动的传入原始函数

// 函数的caller属性，哪个函数调用我，我就有哪个函数的引用，严格模式下不能为其赋值
function outer() {
    inner();
}
function inner() {
    alert(inner.caller) // 返回调用inner()的函数
    alert(inner.arguments.caller) // 在非严格模式下这个属性始终是undefined
}
outer() // 返回outer函数的引用


// 《基本包装类型》
// 基本包装类型与引用类型的主要区别是：对象的生存期。
var str2 = "25"
var obj3 = new Object(str2) // 构造函数，根据传入的值，返回一个相应基本包装类型实例，字符串对象
typeof obj3 // "object" 对基本包装类型实例调用typeof，会返回"object"
if (obj3) {
    alert(1) // 1
} // 基本包装类型在转换为布尔值时都是true，因为在条件判断中，对象就是true
obj3 instanceof String // true 
obj3 instanceof Object // true
var num1 = Number(str2) // 转型函数
typeof num1 // "number"

var falseObj = new Boolean(false) // 创建一个基本包装类型，布尔对象
var falseValue = false // 创建一个基本类型
typeof falseObj // "object" 对引用类型的布尔值返回"object"
typeof falseValue // "boolean" typeof对基本类型的布尔值返回"boolean"
falseObj instanceof Boolean // true
falseValue instanceof Boolean // false

var num = 10
var numObj = new Number(num) // 创建一个number对象
numObj.valueOf() // 10 返回这个对象的基本类型值
numObj.toString() // "10" 返回字符串形式的，可选参数控制基数
numObj.toFixed(2) // "10.00" // 转换成十进制字符串，可选参数控制小数点位
numObj.toExponential(2) // "1.00e+1"
numObj.toPrecision(1) // "1e+1" 转换十进制字符串，可选参数控制数字精度
numObj.toPrecision(2) // "10"
numObj.toPrecision(7) // "10.00000"

var strObj = new String("H") // 创建一个基本包装类型，字符串对象
var str5 = "Hukybo"

str5.length // 6
str5[0] // "H"

str5.charAt(0) // "H" 根据下标返回一个索引值
str5.charCodeAt(0) // 72 返回字符编码
str5.indexOf("H")  // 0 返回字符的位置
str5.indexOf("H", 5) // -1 没有找到字符串返回-1，参数2搜索的起始位置
str5.lastIndexOf("H") // 0 从后往前搜索

str5.substr(2) // "kybo" 获取字符串，介于两个指定下标之间的字符
str5.substr(2, 3) // "k" 获取字符串，介于两个指定下标之间的字符。与slice()方法不同的是，substring() 不接受负的参数。
str5.substr(-2) // "bo"

str5.substring(2) // "kybo" 获取部分字符串，参数1起始下标，参数2数量，建议使用slice
str5.substring(-2) // "Hukybo"

str5.toLocaleLowerCase() // "hukybo"
str5.toLocaleUpperCase() // "HUKYBO"

var str6 = "     Hello world     "
str6.trim() // "Hello world" 删除字符串前面和后面的空格，不改变原始字符串

var text5 = "cat, bat, sat, fat"
var pattern = /.at/
text5.match(/.at/) // ["cat", index: 0, input: "cat, bat, sat, fat", groups: undefined] 所有匹配组成的数组
text5.search(/at/) // 1 如果没有匹配到返回-1 首次匹配成功的位置
text5.replace(/at/g, "ond") // "cond, bond, sond, fond"
text5.replace(/(.at)/g, "word($1)") // "word(cat), word(bat), word(sat), word(fat)"
text5.replace(/(.at)/g, "word($`)") // "word(), word(cat, ), word(cat, bat, ), word(cat, bat, sat, )"
text5.replace(/(.at)/g, "word($')") // "word(, bat, sat, fat), word(, sat, fat), word(, fat), word()"

text5.split(",") // (4) ["cat", " bat", " sat", " fat"]
text5.split(",", 2) // (2) ["cat", " bat"]
text5.split(/at,/) // (4) ["c", " b", " s", " fat"]
text5.split(/, /) // (4) ["cat", "bat", "sat", "fat"]
"google, alibaba ,qq".split(/\s*(,)\s*/) // ["google", ",", "alibaba", ",", "qq"] 来自分组捕获的文本会被包含在数组中

var str7 = "yellow"
str7.localeCompare("blue") // 1 比较两个字符串，如果参数在前，返回1
str7.localeCompare("yellow") // 0 比较两个字符串，如果等于参数，返回0
str7.localeCompare("zoo") // -1 比较两个字符串，如果参数在后，返回-1
String.fromCharCode(104, 101, 108, 108, 111) // "hello" 讲字符编码转换为字符串


// 《单体内置对象》
// isNaN()、parseInt()、parseFloat()都是Global对象的方法
var uri = "http://www.wrox.com/illegal value.html#start"
encodeURI(uri) // "http://www.wrox.com/illegal%20value.html#start" 对URI进行编码，以便发送给浏览器。不会对属于URI特殊字符进行编码
encodeURIComponent(uri) // "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.html%23start" 对任何非标准字符进行编码
decodeURI("http://www.wrox.com/illegal%20value.html#start") // "http://www.wrox.com/illegal value.html#start" 解码
decodeURIComponent("http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.html%23start") // "http://www.wrox.com/illegal value.html#start" 解码
// 上面四种方法不会对#进行编码和解码因为#不是使用上面四种方法替换的

eval("function sayHi() {alert('Hi');}") // 就像是一个完整的ECMAScript解析器，只有一个参数，即要执行代码的字符串
// 在eval()中创建的任何变量和函数都不会被提升。严格模式下，在外部访问不到eval()中创建的任何变量和函数。

var global = function () {
    return this;
}
global() // 取得global对象的方法

Math.PI // 3.141592653589793
Math.pow(2, 10) // 1024 2的10次幂
Math.round(0.6) // 1 四舍五入
Math.ceil(0.6) // 1 向上取整
Math.floor(0.6) // 0 向下取整
isFinite(NaN) // false 参数在不是Null、Infinity、-Infinity时返回true
    - 0 == 0 // true
0.3 - 0.2 == 0.2 - 0.1 // false 二进制问题
var numArr1 = [0, 1, 5, 10, 15]
Math.max.apply(Math, numArr1) // 15

// Object是一个基础类型，其他所有类型都从Object继承了基本行为。
// 函数实际上是Function类型的实例，因此函数也是对象。所以函数也有方法，可以用来增强其行为。
// 基本包装类型可以让基本类型值当作对象来访问，它们分别是Boolean、Number、String。
// 每个包装类型都映射到同名的基本类型。
// 在读取模式下访问基本类型值时，就会创建对应的基本包装类型的一个对象，从而方便了数据的操作。
// 操作基本类型值的语句一旦执行完毕，就会立即销毁创建的包装对象。
// 在所有代码执行之前，作用域中就已经存在两个内置对象：Global和Math
// 全局变量和函数都是Global对象的属性。


// 《面向对象的程序设计》
var obj1 = new Object() // 创建对象1
var obj2 = { name: "Hukybo" } // 创建对象2

// ECMAScript有两种属性：数据属性和访问器属性

// 数据属性
// 数据属性包含一个数据值的位置。在这个位置可以读取和写入值。数据属性有4个特性
Object.defineProperty(obj1, "name", {
    value: "Hukybo", // 特性1定义属性的数据值
    configurable: false, // 特性2定义不能删除这个属性
    enumerable: false, // 特性3定义不能通过for-in循环遍历此属性
    writable: false, // 特性4定义不能修改属性的值
})
// 用Object.defineProperty()方法为对象添加属性时，如果不指定特性，后面3个特性的默认都是false
obj1.name // "Hukybo"

Object.defineProperty(obj2, "name", {
    configurable: false
})
Object.defineProperty(obj2, "name", {
    configurable: true
}) // 报错，一旦把属性定义为不可配置的，那么就再也不能把属性定义回可配置的了。


// 创建访问器属性（访问器属性仅包含 getter 和 setter函数，当然这两个也不是必须的）
var book = {
    _year: 2004, // _year前面下划线是常用的记号，表示只能通过对象方法访问的属性
    edition: 1
};
Object.defineProperty(book, "year", {
    get: function () {
        return this._year;
    },
    set: function (newValue) {
        if (newValue > 2004) {
            this._year = newValue;
            this.edition += newValue - 2004;
        }
    }
});
// year是book对象的访问器属性。
book.year // 调用book.year就是调用这个访问器属性中定义的get方法。
book.year = 2005 // 给book.year赋值就是调用这个访问器属性中定义的set方法。
// 数据属性不仅可以直接访问，也可以通过定义的访问器来专门访问。

var data = {
    year: 2018,
    birth: "请先输入您的年龄",
    get dateOfBirth() {
        return this.birth
    },
    set inputAge(yourAge) {
        this.birth = this.year - yourAge
    }
}
data.birth // "请先输入您的年龄"
data.inputAge = 31
data.birth // 1987
data.dateOfBirth // 1987
Object.getOwnPropertyDescriptor(data, "inputAge") // {get: undefined, set: ƒ, enumerable: true, configurable: true}
/*
javascript一共用三种属性

普通属性：这种属性是用户赋给它们，它们就返回什么，不会做额外的事情
var person = { name : "Nicholas" } alert(person.name) // "Nicholas"

内部属性：比如数组的length属性，函数的prototype属性， DOM节点的innerHTML属性。
用户对它们进行赋值后，再取值时，它不一定按我们的预期做事，此外还会做一些格外的事情。
另外，我们也很难改变它们的行为。
比如
某一数组，它的长度为10, 当我们设置它为11时，它就会增加一个undefined元素，再设置为9时，就会从后面删掉两个元素。
函数的prototype如果被改变，相当于将其父类改变了，会new不同类型的实例。
DOM的innerHTML，我们赋值时是一个字符串，再取出时，这字符串可能会与原来的不一样，并且在原元素上生成了不一样的子节点。

访问器属性，允许用户在赋值或取值都经过预先设定的函数，从而实现内部属性的那一种特殊效果。
*/

var obj5 = {}
Object.defineProperties(obj5, {
    _year: {
        writable: true,
        value: 2004
    },
    edition: {
        writable: true,
        value: 1
    },
    year: {
        get: function () {
            return this._year
        },
        set: function (newValue) {
            if (newValue > 2004) {
                this._year = newValue;
                this.edition = newValue - 2004
            }
        }
    }
}) // 可以一次性定义多个属性
var descriptor = Object.getOwnPropertyDescriptors(obj5, "_year") // 获取自有属性描述符
descriptor._year.value // 2004
var descriptor1 = Object.getOwnPropertyDescriptors(obj5, "year") // 获取自有属性描述符
descriptor1.year.get // 返回get()函数
Object.getOwnPropertyDescriptor({ x: 1 }, "x") // {value: 1, writable: true, enumerable: true, configurable: true}
Object.getOwnPropertyDescriptor({ x: 1 }, "toString") // undefined 对于继承属性返回undefined
Object.getOwnPropertyDescriptor({}, "x") // undefined 对于不存在的属性返回undefined

// 《工厂模式》创建对象，不常用
function person1(name, age, job) {
    var o = {}
    o.name = name
    o.age = age
    o.job = job
    o.sayName = function () {
        console.log(this.name)
    }
    return o
}
var personTest1 = person1("Hukybo", 29, "Coder")
personTest1.age // 29
personTest1.sayName() // "Hukybo"

if (typeof Object.beget !== "function") {
    Object.create = function (o) {
        var F = function () { }
        F.prototype = o
        return new F()
    }
}
var obj = {
    name: "google",
    say: function () {
        console.log("Hello ", this.name)
    }
}
var test = Object.create(obj)
test.say() // "Hello  google"
obj.age = 15 // 在test所继承的原型对象中添加一个属性
test.age // 15 该属性会立即对所有基于该原型创建的对象可见
test.age = 17 // 修改对象的属性
test.age // 17 会自动屏蔽该对象所继承原型上但属性
obj.age // 15 并且不会修改原型上但属性

// 《构造函数模式》创建对象，不常用
// 像Object、Array这样的原生构造函数，在运行时会自动出现在执行环境中
function Person2(name, age, job) {
    this.name = name
    this.age = age
    this.job = job
    this.sayName = function () {
        console.log(this.name)
    }
}
var personTest2 = new Person2("Hukybo", 29, "Coder")
personTest2.age // 29
personTest2.sayName() // "Hukybo"
personTest2.constructor == Person2 // personTest2的constructor属性指向构造函数Person2
// 对象的constructor属性是用来识别对象类型的，但检测对象类型还是instanceof更可靠
personTest2 instanceof Person2 // true
personTest2 instanceof Object // true 之所以是Object的实例，是因为所有的对象均继承自Object

// 任何函数，只要是通过new操作符调用，那它就可以作为构造函数；任何函数，如果不通过new操作符调用，那它跟普通函数没什么区别。
// 在全局环境下，调用函数时，this对象总是指向Global对象（在浏览器中就是window对象）
var obj6 = {}
Person2.call(obj6, "Donghui", 29, "Snacks") // 在obj6对象作用域中调用构造函数，构造函数this指向了obj6实例，obj6实例就有了构造函数的所有属性和方法
obj6.name // "Donghui"

var personTest3 = new Person2("Hukybo", 29, "Coder")
personTest2.sayName == personTest3.sayName // false 这宗构造函数的缺点时，一摸一样的方法，确都是独立的函数，函数不能复用

// 《纯原型模式》创建对象，不常用
function Person5() { } // 创建一个函数(构造函数)
Person5.prototype // {constructor: ƒ} // 每个函数都有一个prototype(原型)属性
Person5.prototype.constructor // Person6() {} // prototype属性自动获得一个constructor属性，constructor属性指向prototype属性所在的函数
Person5.prototype.name = "persont5" // 给原型对象添加属性
Person5.prototype.sayHello = function () {
    console.log("Hello " + this.name)
} // 给原型对象添加方法
Person5.prototype // {name: "persont5", sayHello: ƒ, constructor: ƒ}
var personTest5 = new Person5 // 创建实例
var personTest6 = new Person5 // 创建实例
personTest5.sayHello() // "Hello persont5" // 共享原型对象的方法
personTest6.sayHello() // "Hello persont5" // 共享原型对象的方法
personTest5.sayHello == personTest6.sayHello // true
personTest5.constructor // Person5() {} 实例的constructor属性指向构造函数
personTest5.constructor.prototype // {name: "persont5", sayHello: ƒ, constructor: ƒ}
personTest5.__proto__ // {name: "persont5", sayHello: ƒ, constructor: ƒ} 实例的__proto__属性指向原型对象
Person5.prototype.isPrototypeOf(personTest5) // 如果[[prototype]]指向了Person5的原型，返回true
Object.getPrototypeOf(personTest5) // {name: "persont5", sayHello: ƒ, constructor: ƒ} 返回这个对象的原型
personTest5.name = "google"
personTest5.name // "google" 来自实例 如果实例中的属性方法名与原型对象一样，则会覆盖原型对象上的属性方法
personTest6.name // "persont5" 来自原型
personTest5.hasOwnProperty("name") // true 如果name属性来自实例返回true
personTest6.hasOwnProperty("name") // false 如果name属性来自原型返回false
"name" in personTest5 // true 属性在实例中
"name" in personTest6 // true 属性在原型中
personTest5.name = null
personTest5.name // null
delete personTest5.name //true 删除实例中的name属性
personTest5.name // "persont5" 来自原型
Object.getOwnPropertyDescriptor(personTest6.__proto__, "name") // {value: "persont5", writable: true, enumerable: true, configurable: true} 返回原型对象的属性操作符
Object.keys(personTest5.__proto__) // ["name", "sayHello"] 遍历原型对象上的key
Object.keys(personTest5) // ["name"] 遍历实例上的key
Object.getOwnPropertyNames(personTest5.__proto__) // ["constructor", "name", "sayHello"]
Object.getOwnPropertyNames(personTest5) // ["name"] 遍历所有key，无论是否可枚举

// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
function Fn1() { }
Fn1.prototype.name = "google"
obj = Object.create(Fn1.prototype)
obj.name // "google"

// 创建一个函数，通过原型继承，创建一个新对象
function inherit(p) {
    if (p == null) {
        throw TypeError()
    } // p是一个对象，但不能是null
    if (Object.create) {
        return Object.create(p)
    } // 如果Object.create()方法存在，直接使用它
    var t = typeof p
    if (t !== "object" && t !== "function") {
        throw TypeError()
    } // 如果p不是对象也不是函数，就报错
    function F() { } // 定义一个空的构造函数
    F.prototype = p // 把构造函数p赋值给构造函数F的原型对象
    return F() // 返回这个构造函数
}
function Fn() { } // 创建一个构造函数
Fn.age = 10 // 给构造函数的属性赋值
Fn.prototype.len = 15 // 给构造函数的原型赋值
var Obj = inherit(Fn) // 调用inherit方法，返回一个新对象Obj，Obj原型对象继承了Fn的原型对象
Obj.age // 10
Obj.prototype.len // 15

// 《更简单的原型模式》创建对象，不常用
function Person7() { } // 创建一个构造函数
Person7.prototype = {
    name: "google",
    sayName: function () {
        alert("hello " + this.name)
    }
} // 给原型对象添加属性和方法
Object.defineProperty(Person7.prototype, "constructor", {
    enumerable: false,
    value: Person7
}) // 设置constructor指向构造函数，并设置为不可枚举
// 重写原型对象会切断现有原型对象与任何值钱已经存在的对象实例之间的联系

// 《组合使用构造函数模式和原型模式》创建对象，常用
function Person8(name, age) {
    this.name = name // 基本类型
    this.age = age
    this.friends = ["google", "apple"] // 引用类型
} // 构造函数模式定义不共享的实例属性
Person8.prototype = {
    constructor: Person8,
    sayName: function () {
        alert("hello " + this.name)
    }
} // 原型mowing定义共享的属性和方法
if (typeof sayAge != "function") {
    Person8.protoytpe = function () {
        alert(this.age)
    }
} // 动态原型模式。这段代码只会在初次调用构造函数的时候执行。
var personTest8 = new Person8("yahoo") // 创建实例对象
var personTest9 = new Person8("facebook") // 创建实例对象
personTest8.friends.push("alibaba") // 实例对象修改自己引用类型
personTest8.friends // ["google", "apple", "alibaba"]
personTest9.friends // ["google", "apple"]
personTest8.friends == personTest9.friends // false
personTest8.sayName == personTest9.sayName // true

// 原型链
function Person9() {
    this.name = "googlo"
} // 构造函数
Person9.prototype.sayName9 = function () {
    console.log(this.name)
} // 原型对象
function Person10() {
    this.age = 10
} // 构造函数
Person9.prototype.sayName9 = function () {
    console.log("yahoo")
} // 重写超类型中的方法
Person10.prototype.sayAge10 = function () {
    console.log(this.age)
} // 原型对象，即将失效
Person10.prototype = new Person9() // Person10的原型继承了Person9函数，它自己之前定义的原型就失效(除非把new放到760行前面)
var personTest10 = new Person10()
personTest10.sayName9() // 返回原型链中的sayName9()方法          console.log(this.name)

// 动态原型模式，不能用字面量重写原型
function Person(name) {
    this.name = name
    if (typeof this.sayName != "function") {
        Person.prototype = {
            constructor: Person,
            sayName: function () {
                console.log(this.name)
            }
        }
    }
}
var personTest1 = new Person("google")
var personTest2 = new Person("apple")
personTest1.sayName() // 报错
personTest2.sayName() // "apple"
// new 关键字开始
// 首先创建一个空对象personTest1 = {}
// 在空对象上调用构造函数Person，this指向了空对象 Person.apply(personTest1, arguments)
// 把对象personTest1的内部属性__proto__指向了构造函数的原型Person.prototype，此时的原型是：{constructor: ƒ}
// 返回对象persontTest1
// new 关键字结束
// 这时候对象personTest1已经把内部属性__proto__指向了构造函数的原型Person.prototype，此时的原型是：{constructor: ƒ}
// 然后进入了if语句，以字面量方式直接覆盖了构造函数的原型，并不会更改实例中原型的值，实例personTest1依然指向以前的原型，以前的原型是{constructor: ƒ}
// 所以会报错

// 复习
function Person() {
    this.name = "googlo"
} // 创建构造函数
Person.prototype // {constructor: ƒ} 每个函数都有一个原型对象
Person.prototype.constructor // 原型对象的constructor属性指向构造函数
var test = new Person() // 创建实例
test.__proto__ // {constructor: ƒ} 实例的__proto__指向原型对象
test.__proto__.constructor // Person() {} 实例的__proto__属性的constructor属性指向了构造函数

// 《原型链》
function Person9() {
    this.name = "googlo"
} // 创建一个构造函数，并添加一个属性
Person9.prototype.sayName9 = function () {
    console.log(this.name)
} // 给构造函数的原型对象添加一个方法
function Person10() {
    this.age = 10
} // 创建一个构造函数，并添加一个属性
var personTest9 = new Person9() // 创建一个实例
Person10.prototype = personTest9 // 让原型对象指向另一个实例，Person10的原型继承了Person9函数
Person10.prototype.sayAge10 = function () {
    console.log(this.age)
} // 给构造函数的原型对象添加一个方法
var personTest10 = new Person10() // 创建一个实例
personTest9.__proto__.constructor // Person9() {} 指向了构造函数
personTest10.__proto__.constructor // Person9() {} 指向了继承的构造函数。由Person10函数创建的实例继承了Person9函数
personTest9.name // "googlo" 返回自身属性
personTest9.sayName9() // "googlo" 返回自身方法
personTest9.age // undefined personTest9实例并没有继承Person10函数
personTest9.sayAge10() // undefined personTest9实例并没有继承Person10函数
personTest10.name // "googlo" 返回继承的属性
personTest10.sayName9() // "googlo" 返回继承的方法
personTest10.age // 10 返回自身属性
personTest10.sayAge10() // 10 返回自身方法

function Person9() {
    this.name = "googlo"
}
Person9.prototype.sayName9 = function () {
    console.log(this.name)
}
function Person10() {
    this.age = 10
}
Person10.prototype.sayAge10 = function () {
    console.log(this.age)
} // 原型对象，即将失效
Person10.prototype = new Person9() // 在这里重写了Person10的原型对象它自己之前定义的原型就失效
var personTest10 = new Person10()
personTest10.sayAge10() // 报错。给原型添加方法一定要放在替换原型的语句之后，否则所添加的方法就会失效

function Person9() {
    this.name = "googlo"
} // 创建一个构造函数，并添加一个属性
Person9.prototype.sayName9 = function () {
    console.log(this.name)
} // 给构造函数的原型对象添加一个方法
function Person10() {
    this.age = 10
} // 创建一个构造函数，并添加一个属性
var personTest9 = new Person9() // 创建一个实例
Person10.prototype = personTest9 // 让原型对象指向另一个实例，Person10的原型继承了Person9函数。必须替换原型之后，在添加方法
Person10.prototype.sayAge10 = function () {
    console.log(this.age)
} // 给构造函数的原型对象添加一个方法
Person9.prototype.sayName9 = function () {
    console.log("hello " + this.name)
} // 重写超类型中的方法，会屏蔽之前的方法
var personTest10 = new Person10() // 创建一个实例
personTest10.sayName9() // "hello googlo"

// 《组合继承》实现继承，最常用的继承模式
function Person1(name) {
    this.name = "hello " + name // 自己的基本属性
    this.colors = ["red", "blue"] // 自己的引用属性
} // 构造函数
Person1.prototype.sayName = function () {
    alert(this.name)
} // 原型上添加方法
function Person2(name, age) {
    Person1.call(this, name) // 继承属性。Person1函数运行，这里的this获取了Person1中的所有属性和方法
    this.age = age // 自己的属性
} // 构造函数
Person2.prototype = new Person1() // Person2的原型继承了Person1实例
Person2.prototype.sayAge = function () {
    alert(this.age)
} // 在新的原型添加方法
var test1 = new Person2("google", 10) // 创建实例
test1.colors.push("black") // 由Person2创建的实例继承了Person1中的属性，这个属性是引用类型数组，并在数组中添加了一个元素
console.log(test1.colors) // ["red", "blue", "black"] 
console.log(test1.sayName()) // "hello google"
console.log(test1.sayAge()) // 10
var test2 = new Person2("orange", 15)
console.log(test2.colors) // ["red", "blue"]
console.log(test2.sayName()) // "hello orange"
console.log(test2.sayAge()) // 15

test2.hasOwnProperty("colors") // true colors属性来自于test5实例
test2.name // "hello google"
test2.hasOwnProperty("name") // true name属性来自于test5实例

// 《原型式继承》实现继承，适用于让一个对象是种与另一个对象同步
var person = {
    name: "google",
    arr: ["red", "blue"]
}
var test1 = Object.create(person)
test1.name = "alibaba"
test1.arr.push("orange")
var test2 = Object.create(person)
test2.name = "apple"
test2.arr.push("black")
person.arr // ["red", "blue", "orange", "black"] 让一个对象与另一个对象保持一样
test2 = Object.create(person, {
    name: {
        value: "jd"
    }
})
test2.name // "jd" 覆盖原型对象上的同名属性

// 《寄生组合式继承》实现继承，常用
function inheritPrototype(fn1, fn2) {
    var prototype = Object(fn1.prototype)
    prototype.constructor = fn2
    fn2.prototype = prototype
}
function fn1(name) {
    this.name = name
    this.colors = ["red", "blue"]
}
fn1.prototype.sayName = function () {
    alert(this.name)
}
function fn2(name, age) {
    fn1.call(this, name)
    this.age = age
}
inheritPrototype(fn1, fn2)
fn2.prototype.sayAge = function () {
    alert(this.age)
}
var test1 = new fn2("google", 10)
test1.name // "google"
test1.age // 10
test.sayName() // "google"
test.sayAge() // 10
test1.colors.push("orange")
test1.colors // ["red", "blue", "orange"]
var test2 = new fn2("alibaba", 15)
test2.colors // ["red", "blue"]

// 《函数表达式》
// 《闭包》
function fn1() {
    var arr = new Array()
    for (var i = 0; i < 10; i++) {
        arr[i] = function () {
            return i
        }()
    }
    return arr
}
fn1() // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 闭包
var arr = []
function fn(i) {
    return function () {
        return i
    }
}
for (var i = 0; i < 10; i++) {
    arr[i] = fn(i)
}
arr[7]() // 7

// 闭包
var myObject = (function () {
    var myName = "google";
    var age = 15;
    return {
        say: "hello " + myName
    }
}())
myObject.say // "hello google"

// this对象是在运行时基于函数的执行环境绑定的。在全局函数中，this等于window。
// 当函数作为某个对象的方法调用时，this等于那个对象。
var name = "google"
var obj = {
    name: "alibaba",
    fn: function () {
        return function () {
            return this.name
        }
    }
}
obj.fn()() // "google"
// 每个函数在被调用时都会自动获得两个特殊变量：this，argument
var name = "google"
var obj = {
    name: "alibaba",
    fn: function () {
        var that = this
        return function () {
            return that.name
        }
    }
}
obj.fn()() // "alibaba"

var obj = {
    name: "alibaba",
    getName: function () {
        return this.name
    }
}
obj.getName() // "alibaba"
    (obj.getName()) // "alibaba"
    (obj.getName = obj.getName)() // "google"

    // 《模仿块级作用域》
    (function () {
        // 这里是块级作用域
    })()

// 私有变量
function Fn() {
    var name = "google"
    function sayName() {
        return "alibaba"
    }
    this.publicMethod = function () {
        return sayName()
    }
}
var test = new Fn()
test.publicMethod() // "alibaba" 访问函数Fn的私有变量和私有方法只能通过构造函数的属性或方法

    // 《静态私有变量》
    (function () {
        var name = "google"
        function sayName() {
            return "alibaba"
        }
        Person = function () { }
        Person.prototype.publicMethod = function () {
            return sayName()
        }
    })()
Person.prototype.publicMethod() // "alibaba"

// 模块模式
var fn = function () {
    var name = "google"
    function sayName() {
        return "alibaba"
    }
    return {
        lens: name.length,
        say: sayName()
    }
}()
fn.lens // 6
fn.say // "alibaba"

// 增强模块模式
var fn = function () {
    var arr = []
    arr.push(new BaseComponent()) // 这里先不用管BaseComponent
    var app = new BaseComponent()
    app.get1 = function () {
        return arr.length
    }
    app.get2 = function (a) {
        if (typeof a == "object") {
            arr.push(a)
        }
    }
    return app
}()

// 集合
function Set() { // 构造函数
    this.values = {}; //集合数据保存在对象属性里
    this.n = 0; // 集合中值的个数
    this.add.apply(this, arguments) // 把所有参数都添加到集合里
}
// 这是一个内部函数，用于将任意JavaScript值和唯一的字符串对应起来
Set._v2s = function (val) {
    switch (val) {
        case undefined: {
            return "u";
        };
        case null: {
            return "n";
        };
        case true: {
            return "t";
        };
        case false: {
            return "f";
        };
        default: switch (typeof val) { // 如果没有匹配则执行
            case "number": {
                return '#' + val;
            };
            case "string": {
                return '"' + val;
            };
            default: {
                return '@' + objectId(val);
            }
        }
            function objectId(o) {
                var prop = "|**objectid**|"; // 私有属性，用以存放ID
                if (!o.hasOwnProperty(prop)) { // 如果prop不是o的自有属性
                    o[prop] = Set._v2s.next++; // 将下一个值赋给它
                }
                return o[prop]; // 返回这个ID
            }
    }
}
// 将每个参数都添加至集合中
Set.prototype.add = function () {
    for (var i = 0; i < arguments.length; i++) { // 遍历每个参数
        var val = arguments[i]; // 待添加到集合中的值
        var str = Set._v2s(val) // 把它转换为字符串
        if (!this.values.hasOwnProperty(str)) { // 如果this.values中的自有属性中没有str
            this.values[str] = val; // 添加属性
            this.n++; // 集合中值的计数加一
        }
    }
    return this; // 支持链式方法调用
}
// 从集合中删除元素
Set.prototype.remove = function () {
    for (var i = 0; i < arguments.length; i++) { // 遍历每个参数
        var str = Set._v2s(arguments[i]); // 把它转换为字符串
        if (this.values.hasOwnProperty(str)) { // 如果它在集合中
            delete this.values[str]; // 删除它
            this.n-- // 集合中值的计数减一
        }
    }
    return this; // 支持链式方法调用
}
// 如果集合中包含这个值，则返回true，否则返回false
Set.prototype.contains = function (value) {
    return this.values.hasOwnProperty(Set._v2s(value));
}
// 返回集合大小
Set.prototype.size = function () {
    return this.n;
}
// 遍历集合中的所有元素，在指定上下文调用f
Set.prototype.foreach = function (f, context) {
    for (i in this.values) { // 遍历集合中的所有属性
        if (this.values.hasOwnProperty(i)) { // 忽略继承的属性
            f.call(context, this.values[i]); // 调用f，传入value
        }
    }
}
// 将集合转换为字符串
Set.prototype.toString = function () {
    var s = "{";
    var i = 0;
    this.foreach(function (v) {
        s += (i++ > 0 ? "," : "") + v;
    });
    return s + "}";
}
// 将集合转换为字符串
Set.prototype.toLocaleString = function () {
    var s = "{";
    var i = 0;
    this.foreach(function (v) {
        if (i++ > 0) {
            s += ",";
        }
        if (v == null) {
            s += v;
        } else {
            s += v.toLocaleString();
        }
    })
    return s + "}";
}
// 将集合转换为字符串
Set.prototype.toArray = function () {
    var a = [];
    this.foreach(function (v) {
        a.push(v);
    })
    return a;
}
// 比较
Set.prototype.equals = function (that) {
    if (this === that) {
        return true;
    } // 一些次要情况的快捷处理
    if (!(that instanceof Set)) {
        return false;
    } // 如果that不是继承自Set.prototype返回false
    if (this.size() != that.size()) {
        return false;
    } // 如果这两个集合大小不相等，则返回false
    try {
        this.foreach(function (v) {
            if (!that.contains(v)) {
                throw false;
            }
        })
        return true;
    } catch (x) {
        if (x === false) {
            return false
        }
        throw x;
    }
}
Set._v2s.next = 0;
var test = new Set()
test.add(1, "google", { "name": "alibaba" }, true, undefined, 1, false, true)
for (i in test.values) {
    console.log(i)
} // #1 "google @0 t u f
test.size() // 6
test.remove(false)
test.size() // 5
for (i in test.values) {
    console.log(i)
} // #1 "google @0 t u
function say(a) {
    console.log("this is " + a)
}
test.foreach(say)
/*
this is 1
this is google
this is [object Object]
this is true
this is undefined
this is false
*/
test.toString() // "{1,google,[object Object],true,undefined}"
test.toLocaleString() // "{1,google,[object Object],true,undefined}"
test.toArray() // [1, "google", {…}, true, undefined]
var test1 = test
test.equals(test1) // true
// 比较
// 相等运算符比较对象时，比较的是引用而不是值

// 正则表达式
/* 
可处理正则表达式的方法有：
regexp.exec
regexp.test
string.match
string.replace
string.search
string.split
*/
var text = "Hello world! My name is google. My age is 15"
text.match(/[ab]/g) // ["a", "a"]
text.match(/[^a-z]/g) // ["H", " ", "!", " ", "M", " ", " ", " ", ".", " ", "M", " ", " ", " ", "1", "5"]
text.match(/He(llo)?/) // ["Hello", "llo", index: 0, input: "Hello world! My name is google. My age is 15", groups: undefined]
text.match(/\s+(\d){2}/) // [" 15", "5", index: 41, input: "Hello world! My name is google. My age is 15", groups: undefined]
text.match(/\s\d+/) // [" 15", index: 41, input: "Hello world! My name is google. My age is 15", groups: undefined]
text.match(/\s(\d+)/) // [" 15", "15", index: 41, input: "Hello world! My name is google. My age is 15", groups: undefined]
text.match(/[a-z]\s+(\d+)/) // ["s 15", "15", index: 40, input: "Hello world! My name is google. My age is 15", groups: undefined]
text.match(/\bworld\b/) // ["world", index: 6, input: "Hello world! My name is google. My age is 15", groups: undefined]
text.match(/\bell\b/) // null
text.match(/[hH]ello\s(?=w)/) // ["Hello ", index: 0, input: "Hello world! My name is google. My age is 15", groups: undefined]
text.match(/[hH]ello\s(?!o)/) // ["Hello ", index: 0, input: "Hello world! My name is google. My age is 15", groups: undefined]
text.match(/[hH]ello\s(?=o)/) // null

var text = "aaaaa"
text.match(/a+/) // ["aaaaa", index: 0, input: "aaaaa", groups: undefined]
text.match(/a+?/) // ["a", index: 0, input: "aaaaa", groups: undefined] 非贪婪匹配，尽可能少的匹配

var text = "abbcccdddd"
text.match(/(\w)\1*/g) // ["a", "bb", "ccc", "dddd"]

var reg = /(\d{4})-(\d{2})-(\d{2})/
var date = '2010-04-12'
reg.test(date)

RegExp.$1 // 2010
RegExp.$2 // 04
RegExp.$3 // 12

var reg = /(\d{2}).(\d{2})\/(\d{4})/
var date = '12.21/2012'
date.replace(reg, '$3-$1-$2') // 2012-12-21

var re = /\((\d{3})\)/g
var str = "(555)666-1212"
str.replace(re, '$1-') // "555-666-1212" 替换为分组捕获文本

var reg = /(kid|doubi)/g
var str = 'kid is a doubi'

str = str.replace(reg, function (word) {
    return word.replace(/./g, '*')
}) // "*** is a *****"

var reg = /((kid) is (a (doubi)))/
reg.test("kid is a doubi") // true
RegExp.$1 // kid is a doubi
RegExp.$2 // kid
RegExp.$3 // a doubi
RegExp.$4 // doubi

var reg = /(\w{3}) is \1/
reg.test('kid is kid')  // true
reg.test('dik is dik')  // true
reg.test('kid is dik')  // false
reg.test('dik is kid')  // false

/*
分组有四种类型：
捕获型　　　-　()
非捕获型　　-　(?:)
正向前瞻型　-　(?=)
反向前瞻型　-　(?!)
*/

var reg = /(?:\d{4})-(\d{2})-(\d{2})/
var date = '2012-12-21'
reg.test(date)
RegExp.$1  // 12
RegExp.$2  // 21

var reg = /kid is a (?=doubi)/
reg.test('kid is a doubi')  // true
reg.test('kid is a shabi')  // false

// String 支持4种正则表达式方法
var str = "JavaScript"
str.search(/script/i) // 4 返回匹配字符串的起始位置，不支持全局检索
str.replace(/script/i, '') // "Java"
str.match(/[A-Z]/g) // ["J", "S"]
str.split(/a/) // ["J", "v", "Script"]

// RegExp 对象
var re = new RegExp("\\d{5}", "g")
re.source // "d{5}"
re.global // true 是否带有修饰符"g"
re.ignoreCase // 是否带有修饰符"i"
re.multiline // 是否带有修饰符"m"
re.lastIndex // 0 检索开始位置
re.exec("123456789") // ["12345", index: 0, input: "123456789", groups: undefined]
re.test("123456789") // true

str = "My name is 'google'"
str.replace(/'([^']*)'/i, '"$1"') // "My name is "google""

var re = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
var url = "http://www.ora.com:80/goodparts?q#fragment"
var result = re.exec(url);




// 尽量减少过多但全局变量，方法是在程序中只创建一个唯一但全局变量
// 所谓编程，就是将一组需求分解成一组函数与数据结构的技能
// 如果函数在调用时前面加了new，且返回值不是一个对象，则返回this（该新对象）

/* 函数有4种调用方式：方法、函数、构造器、apply
方法调用时，this指向当前对象
函数调用时，this指向全局对象。这是一个语言设计错误，倘若语言设计正确，name当内部函数调用时，this应该指向外部函数作用域。解决方法是：在外部函数中 that = this ，然后在内部函数中用that
构造函数调用时，this指向新的对象
函数的apply方法调用时，可以指定this
*/

Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
    return this;
} // 给Function类型扩充方法
Number.method('integer', function () {
    return Math[this < 0 ? 'ceil' : 'floor'](this)
}) // 调用Function所扩充的方法，给Number添加一个方法，根据数字的正负来判断使用Math.ceiling还是使用Math.floor的方法
    (-10 / 3).inteegr() // -3
String.method('trim', function () {
    return this.replace(/^\s+|\s+$/g, '')
}) // 调用Function所扩充的方法，给String添加一个方法，去掉字符串首尾空白的方法
    ("   hello ").trim() // "hello"

// 定义一个函数，它设置DOM节点为黄色，然后渐变为白色
var fade = function (node) {
    var level = 1; // 定义一个变量
    var step = function () {
        var hex = level.toString(16);
        node.style.backgroundColor = "#FFFF" + hex + hex;
        if (level < 15) {
            level++;
            setTimeout(step, 100)
        }
    } // 定义一个函数
    setTimeout(step, 100); // 函数执行
}
var name = document.getElementById("name")
fade(document.body);

// 逢七跳过的游戏
var fade = function () {
    var test = 0;
    var step = function () {
        var str = test.toString();
        if (str[str.length - 1] == "7" || test % 7 == 0 && test != 0) {
            console.log(test + " 跳过")
        }
        if (test < 1000) {
            test++;
            setTimeout(step, 100)
        }
    }
    setTimeout(step, 100);
}
fade();

// 回调函数
function test(begin, end, type, say) {
    for (var i = 0; i < end; i++) {
        var str = begin.toString();
        if (str[str.length - 1] == type.toString() || begin % type == 0 && begin != 0) {
            say(begin);
        }
        begin++;
    }
}
test(0, 100, 7, function (num) {
    console.log(num + " 跳过")
})

// 模块
Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
    return this;
} // 给Function类型扩充方法
String.method('deentityify', function () {
    var entity = {
        quot: '"',
        lt: '<',
        gt: '>'
    };
    return function () {
        return this.replace(/&([^&;]+);/g, function (a, b) {
            var r = entity[b];
            return typeof r === 'string' ? r : a;
        })
    }
}())
'&lt;&quot;&gt;'.deentityify() // "<">"

// 柯里化
Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
    return this;
} // 给Function类型扩充方法
// 连接两个参数数组
Function.method('curry', function () {
    var slice = Array.prototype.slice; // 复制数组方法
    var args = slice.apply(arguments); // 复制参数
    var that = this;
    return function () {
        return that.apply(null, args.concat(slice.apply(arguments)))
    }
})
function add(a, b) {
    return a + b
}
var add1 = add.curry(1);
add1(7) // 8

// 记忆
var fibonacci = function () {
    var memo = [0, 1]; // 闭包中的数组保存着每次fib计算的结果
    var fib = function (n) {
        var result = memo[n]; // 获取数组中指定的索引值
        if (typeof result !== "number") { // 如果数组中没有这个值
            result = fib(n - 1) + fib(n - 2); // 递归
            memo[n] = result; // 给数组赋值
        }
        return result; // 如果数组中有这个值，就直接返回
    }
    return fib;
}(); // 斐波那契数列函数立即执行，返回fib函数
// 闭包中的数组记忆了斐波那契数列
fibonacci(15) // 610

var memoizer = function (memo, formula) {
    var recur = function (n) {
        var result = memo[n];
        if (typeof result !== "number") {
            result = formula (recur, n);
            memo[n] = result;
        }
        return result;
    }
    return recur;
}
var fibonacci = memoizer ([0, 1], function (recur, n) {
    return recur (n - 1) + recur (n - 2);
}) // 斐波那契数列
fibonacci(15) // 610
var factorial = memoizer([1, 1], function (recur, n) {
    return n * recur (n - 1);
}) // 阶乘
factorial(10) // 3628800
var accumulate = memoizer([1, 1], function (recur, n) {
    return n + recur (n - 1);
}) // 累加
accumulate(100) // 5050

// 伪类
// js的继承不是对象继承对象，反而插入了中间多余的中间层：通过构造器产生对象
Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
    return this;
} // 给Function类型扩充方法
// 当使用new调用函数时，函数的执行方式会被修改，如下：
Function.method("new", function () {
    // 创建一个新对象，使用现有的对象来提供新创建的对象的__proto__，它继承自构造函数的原型对象
    var that = Object.create(this.prototype);
    var other = this.apply(that, arguments); // 调用构造器函数，绑定this到新对象上
    return (typeof other === "object" && other) || that; // 如果它的返回值不是一个对象，就返回该新对象
})

/*
每个函数都有一个 prototype 属性，
prototype 属性是一个对象，
这个对象有一个 constructor 属性，
constructor 属性的值是该函数的引用。
*/

// 差异化继承
function Func() {}; // 创建一个构造函数
Func.prototype.say = function () {
	console.log("google");
} // 给 Func 的原型中添加方法
var obj1 = new Func(); // 创建一个对象 obj1
// 创建一个对象 obj2，并且 obj2 的 __proto__ 指向了对象 obj1
var obj2 = Object.create(obj1);
obj2.__proto__ == obj1 // true
obj2.say(); // google

// 伪类继承
function Func1() {}; // 创建一个构造函数 Func1
Func1.prototype.say = function () {
	console.log("google");
} // 给 Func1 的原型添加方法
function Func2() {}; // 创建一个构造函数 Func2
Func2.prototype = new Func1(); // 替换 Func2.prototype 为 Func1 的实例对象
var obj = new Func2(); // 创建 Func2 的实例
obj.say(); // google

/*
创建对象的方法
1、对象字面量
2、用 new 调用构造函数
3、Object.create()
4、调用能返回对象的函数
*/

// 函数化
var classmate = function (obj) {
	var name = "google" // 定义私有变量
	var that = {}; // 创建一个新对象
	that.get_name = function() {
		return name;
	} // 给新对象扩充方法，该方法有权访问私有变量
	that.get_age = function() {
		return obj.age;
	} // 给新对象扩充方法，该方法有权访问参数
	that.get_say = function() {
		return "My name is " + name + " and My age is " + obj.age;
	} // 给新对象扩充方法，该方法有权访问私有变量和参数
	return that; // 返回新对象
}
var test = classmate({age: 15});
test.get_say(); // "My name is google and My age is 15"

// 正则表达式
// 匹配数字
var re = /^-?[0-9]+(?:\.[0-9]+)?(?:e[+\-]?[0-9]+)?$/i
re.test("-0.9E10") // true

// 匹配字符串
var re = /"(?:\\.|[^\\\"])*"/g

// RegExp 对象的属性
re.global // 如果标识 g 被使用，返回 true
re.ignoreCase // 如果标识 i 被使用，返回 true
re.lastIndex // 下一次 exec 匹配开始的索引。初始值为 0
re.multiline // 如果标识 m 被使用，返回 true
re.source // 正则表达式源码文本

// 正则表达式也是引用值

// 正则表达式分支
"into".match(/in|int/g) // in 会匹配 in 但不会匹配 int 因为 in 已经被成功匹配了

// 正则表达式中的控制字符和特殊字符
" \ / [ ] ( ) { } ? + * | . ^ $ " // 如果想匹配这些字符，则需要转义。也可以给任何特殊字符转义。

// 正则表达式转义
/* 
\d 等同于 [0-9]
\D 等同于 [^0-9]
\s 空白字符
\S 非空白字符
\w 等同于 [0-9A-Za-z]
\W 等同于 [^0-9A-Za-z]
\b 单词边界
\1 指向分组 1 所捕获到的文本，它能再次被匹配
*/

/*
正则表达式 4 种分组
1、捕获型 ( )
2、非捕获型 (?: )
3、向前正向匹配 (?= )
4、向前负向匹配 (?! )
*/

// 正则表达式字符集
var re = /[ab]/

// 正则表达式量词
var re = /a{2}/ // 匹配 2 个 a
/* 
{0,1} 等同于 ?
{0,} 等同于 *
{1,} 等同于 +
如果只有一个量词，表示趋向于贪婪匹配，最好坚持使用贪婪匹配
*/


// BitMEX例子
function Bit() {
    
}
var test1 = new Bit();
var fade = function (obj, data) {
	var step = function () {
		var str = "rgb(" + obj.r + "," + obj.g + "," + obj.b + ")"
		document.getElementById(data).style.background = str;
		if (obj.r < 255 || obj.g < 255 || obj.b < 255) {
			obj.r = obj.r + obj.addr;
			obj.g = obj.g + obj.addg;
			obj.b = obj.b + obj.addb;
			setTimeout(step, 1);
		}
	} // 定义一个函数
	setTimeout(step, 1); // 函数执行
}

function ran() {
	var obj = {}
	obj.r = Math.random() * 255 + 1;
	obj.g = Math.random() * 255 + 1;
	obj.b = Math.random() * 255 + 1;
	obj.addr = (255 - obj.r + 1) / 60;
	obj.addg = (255 - obj.g + 1) / 60;
	obj.addb = (255 - obj.b + 1) / 60;
	return obj;
}

function test() {
    var test = document.getElementsByClassName("test");
    for (var i = 0; i < test.length; i++) {
        fade(ran(), test[i].id);
    }
	setTimeout("test()", Math.random() * 10000);
}
test()


var newValue = oldValue; // 报错，因为oldValue未声明
var newVlaue = window.oldValue; // 不报错，因为这是属性查询