// 单独修改标题
var obj = $('input[id^="videoTitle"]');
var zero = 0;
for (var i = 0; i < obj.length; i++) {
	// if (i < 9) {
	// 	obj[i].value = '第' + zero.toString() + (i + 1) + '课'
	// } else {
	// 	obj[i].value = '第' + (i + 1) + '课';
	// }
	obj[i].value = "第" + (i + 1) + "课";
}

// 单独修改标题，加后缀
var obj = $('input[id^="videoTitle"]');
for (var i = 0; i < obj.length; i++) {
	obj[i].value = obj[i].value + ".mp4";
}

// 单独修改链接
var obj = $('input[id^="videoUrl_"]');
var zero = 0;
text = "https://files.quant.la/quant.la/台湾大学公开课 - 统计与生活/";
for (var i = 0; i < obj.length; i++) {
	// if (i < 9) {
	// 	obj[i].value = text + '第' + zero.toString() + (i + 1) + '.mp4';
	// } else {
	// 	obj[i].value = text + '第' + (i + 1) + '.mp4';
	// }
	obj[i].value = text + "统计与生活：" + (i + 1) + ".mp4";
}

// 添加标题后，自动添加链接
var obj1 = $('input[id^="videoTitle"]');
var obj2 = $('input[id^="videoUrl_"]');
var text = "/quant.la/考研 - 431金融学综合";
var arr = ["第01集 比特币钱包BitPay使用教程.flv", "第02集 初识Bitcoin钱包.flv", "第03集 手把手教你申请ENS (Ethereum Name Service).flv", "第04集 玩转以太坊各种钱包.flv", "第05集 会说话的PPT，从开发者角度快速理解区块链.flv", "第06集 挖矿算法.flv", "第07集 以太坊（Ethereum）是什么？.flv", "第08集 什么是智能合约(Smart Contract).flv", "第09集 Atom编辑器编写智能合约（Smart Contract）插件安装配置.flv", "第10集 Solidity面向对象编程 - 类和对象.flv", "第11集 如何通过Solidity实现一个类(合约).flv", "第12集 Solidity 合约中属性和行为的访问权限（一）.flv", "第13集 Solidity 合约中属性和行为的访问权限（二）.flv", "第14集 Solidity 合约中属性和行为的访问权限（三）.flv", "第15集 Solidity合约单继承与多继承.flv", "第16集 Solidity合约函数的重写.flv", "第17集 Solidity值类型与引用类型.flv", "第18集 Solidity值传递.flv", "第19集 Solidity引用类型（storage／memory）.flv", "第20集 Solidity Types - 布尔(Booleans).flv", "第21集 Solidity Types - 整型(Integer) （一）.flv", "第22集 Solidity Types - 整型(Integer) - Var遇到的坑（二）.flv", "第23集 Solidity Types - 整型(Integer) - 比较运算符（三）.flv", "第24集 Solidity Types - 整型(Integer) - 与或非异或（四）.flv", "第25集 Solidity Types - 整型(Integer) - 加减乘除求余（五）.flv", "第26集 Solidity Types - 整型(Integer) - 求幂，左移，右移（六）.flv", "第27集 Solidity Types - 整型(Integer) - 字面量（七）.flv", "第28集 Solidity Types - 地址(Address) - 初识.flv", "第29集 Solidity Types - 地址(Address) - msg.sender.flv", "第30集 Solidity Types - 地址(Address) - 论合约地址与this指针.flv", "第31集 Solidity Types - 地址(Address) - 运算符.flv", "第32集 Solidity Types - 地址(Address) - balance查看余额.flv", "第33集 Solidity Types - 地址(Address) - transfer转账.flv", "第34集 Solidity Types - 地址(Address) - 通过send方法转账.flv", "第35集 Solidity Types - 字符串(String Literals).flv", "第36集 固定大小字节数组bytes1 ~ bytes32.flv", "第37集 Solidity Types - 固定大小字节数组 比较运算符.flv", "第38集 Solidity Types - 固定大小字节数组- 位操作符.flv", "第39集 Solidity Types - 固定大小字节数组 索引访问.flv", "第40集 Solidity Types - 固定大小字节数组- length.flv", "第41集 Solidity Types - 固定大小字节数组 不可变深度理解.flv", "第42集 Solidity Types - 动态大小字节数组.flv", "第43集 Solidity Types - 动态大小字节数组 - string to bytes.flv", "第44集 Solidity Types - 动态大小字节数组- 特殊字符对应的字节数.flv", "第45集 Solidity Types - 动态大小字节数组) - 汉字对应的字节数.flv", "第46集 Solidity Types - 动态大小字节数组 - 创建bytes字节数组.flv", "第47集 Solidity Types - 动态大小字节数组) - 可变字节数组和不可变字节数组深度对比.flv", "第48集 Solidity Types - 动态大小字节数组 - 可变字节数组中push方法的使用.flv", "第49集 Solidity Types - 动态大小字节数组 - 小结.flv", "第50集 Solidity Types - 动态大小字节数组、固定大小字节数组、string之间的转换关系.flv", "第51集 固定大小字节数组之间的转换.flv", "第52集 固定大小字节数组转动态大小字节数组.flv", "第53集 固定大小字节数组不能直接转换为string.flv", "第54集 动态大小字节数组(Dynamically-sized byte array)转string.flv", "第55集 固定大小字节数组转string问题深度分析.flv", "第56集 固定大小字节数组转string标准函数实现.flv", "第57集 Solidity Types - 玩转 Solidity 数组 （Arrays）.flv", "第58集 固定长度的数组（Arrays）系统讲解.flv", "第59集 可变长度的Arrays（上）.flv", "第60集 可变长度的Arrays（下）.flv", "第61集 Solidity 二维数组.flv", "第62集 创建 Memory Arrays.flv", "第63集 数组字面量 Array Literals  内联数组 Inline Arrays.flv", "第64集 创建固定大小字节数组／可变大小字节数组.flv", "第65集 Solidity Types - 枚举(Enums).flv", "第66集 Solidity Types - Solidity 结构体（Structs）.flv", "第67集 Solidity Types - Solidity 字典／映射（Mappings）.flv", "第68集 集资（CrowdFunding）智能合约（Smart Contract）综合案例.flv", "第69集 单位（Units） 和 全局变量（Globally Available Variables）.flv", "第70集 Solidity 元组（Tuples）- 什么是元组，元组能做什么.flv", "第71集 Solidity 元组（Tuples）的使用.flv", "第72集 truffle framework初体验 - 如何编写智能合约.flv", "第73集 建立简易的加密代币.flv", "第74集 通过zeppelin-solidity建立标准代币部落币「BLC」.flv", "第75集 以太坊私网建立 、合约编译、部署完全教程（1）.flv", "第76集 以太坊私网建立 (2) - 同一台电脑／不同电脑运行多个节点.flv", "第77集 以太坊私网建立 (3) - 通过创世区块来初始化区块链.flv", "第78集 如何搭建以太坊钱包联盟链.flv", "第79集 Parity钱包下载安装.flv", "第80集 demo-spec 配置文件.flv", "第81集 POA Node创建的两种方法.flv", "第82集 node0 & node1 配置以及账号创建.flv", "第83集 多节点连接、交易、互通.flv", "第84集 玩转truffle framework 、Web3.js 框架 内容介绍.flv", "第85集 truffle 安装.flv", "第86集 web3.js api的使用.flv", "第87集 truffle init创建项目、编写合约、编译合约、合约测试、部署合约、合约互动.flv", "第88集 truffle unbox项目案例介绍.flv", "第89集 truffle unbox react 项目改编、部署、Web端互动.flv", "第90集 从零构建和部署去中心化投票App-01.flv", "第91集 从零构建和部署去中心化投票App-02.flv", "第92集 从零构建和部署去中心化投票App-03.flv", "第93集 IPFS环境配置.flv", "第94集 IPFS+IPNS+个人博客搭建 - 如何在IPFS新增一个文件.flv", "第95集 IPFS+IPNS+个人博客搭建 - 通过ipfs创建目录存储文件.flv", "第96集 IPFS+IPNS+个人博客搭建 - 如何在IPFS新增一个目录.flv", "第97集 IPFS+IPNS+个人博客搭建 - 创建简易的网页发布到IPFS.flv", "第98集 IPFS+IPNS+个人博客搭建 - 搭建静态博客.flv", "第99集 IPFS + Ethereum （上篇）-js-ipfs-api - 内容介绍.flv", "第100集 IPFS + Ethereum （上篇）-js-ipfs-api - React项目初识.flv", "第101集 IPFS + Ethereum （上篇）-js-ipfs-api - ipfs-api的安装和卸载.flv", "第102集 IPFS + Ethereum （上篇）-js-ipfs-api - 完成UI逻辑.flv", "第103集 IPFS + Ethereum （上篇）-js-ipfs-api - 上传数据到IPFS.flv", "第104集 IPFS + Ethereum （上篇）-js-ipfs-api - 从IPFS读取数据.flv", "第105集 IPFS + Ethereum （中篇）- IPFS图片上传与下载.flv", "第106集 IPFS + Ethereum （中篇）- IPFS图片上传与下载 - 完成UI逻辑.flv", "第107集 IPFS + Ethereum （中篇）- IPFS图片上传与下载 - 完成图片上传下载逻辑.flv", "第108集 IPFS + Ethereum （下篇）-ipfs + Ethereum 大图片存储.flv", "第109集 Embark Framework 开发入门篇.flv", "第110集 Embark Framework 去中心化存储 (IPFS).flv"];
var re = /.mp4/gi;
for (var i = 0; i < obj1.length; i++) {
	obj2[i].value = "https://files.quant.la" + text + "/" + obj1[i].value;
	obj1[i].value = obj1[i].value.replace(re, "");
}

// 自动填充视频
var arr = [];
var text = "";

function autoFills(arr, text) {
	document.getElementById("Title").value = text; // 标题
	var addButton = document.getElementById("AddMoreFileBox"); // 添加地址栏
	var i;
	for (var i = 0; i < arr.length - 1; i++) {
		addButton.click();
	}
	var obj1 = $('input[id^="videoTitle"]'); // 标题
	var obj2 = $('input[id^="videoUrl_"]'); // 视频地址
	var re = /.mp4/gi;
	for (i = 0; i < obj1.length; i++) {
		var data = arr[i].replace(re, "");
		obj1[i].value = data; // 添加标题
		obj2[i].value = "https://files.quant.la/quant.la/" + text + "/" + data + ".mp4"; // 添加视频地址
	}
}
autoFills(arr, text);

// 正则表达式修改标题
var re = /\[/gi;
var obj1 = $('input[id^="videoTitle"]');
for (var i = 0; i < obj1.length; i++) {
	obj1[i].value = obj1[i].value.replace(re, "");
}

// 正则表达式修改链接
var re = /期货投资分析/gi;
var obj2 = $('input[id^="videoUrl_"]');
for (var i = 0; i < obj2.length; i++) {
	obj2[i].value = obj2[i].value.replace(re, "期货从业资格考试 - 期货投资分析");
}

// 修改双标题
var obj = $('input[id^="videoTitle"]');
for (var i = 0; i < obj.length; i++) {
	if (i < 7) {
		obj[i].value = "第一章 ";
	} else if (i < 7 * 2) {
		obj[i].value = "第二章 ";
	} else if (i < 7 * 3) {
		obj[i].value = "第三章 ";
	} else if (i < 7 * 4) {
		obj[i].value = "第四章 ";
	} else if (i < 7 * 5) {
		obj[i].value = "第五章 ";
	} else if (i < 7 * 6) {
		obj[i].value = "第六章 ";
	} else if (i < 7 * 7) {
		obj[i].value = "第七章 ";
	} else {
		obj[i].value = "第八章 ";
	}
}

// 硕鼠批量链接
var num = 100;
var str0 = "https://www.bilibili.com/video/";
var str1 = "\n";
for (var i = 1; i < num + 1; i++) {
	str1 += str0 + i + "\n";
}
console.log(str1);