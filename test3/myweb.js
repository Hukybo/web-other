wwwAll();



function savewww() {
	var a = document.getElementById("wname").value;
	var b = document.getElementById("wangzhi").value;
	if (a == '' || b == '') {
		alert('您没有添加网址');
	} else {
		localStorage.setItem(a, b);
		alert(a + '网址已经添加成功');
	}
}



function find(){
	var a = document.getElementById("wwwshuru").value;
	if (a == '') {
		alert('请输入您的网址')
	} else {
		var b = localStorage.getItem(a);
		var c = document.getElementById("wwwIsOk");
		c.innerHTML = a + "的网址是：" + b;
	}
}



function wwwAll() {
	var a = document.getElementById("wwwlist");
	if(localStorage.length > 0) {
		var b = "<table border='1'>";
		b += "<tr><td>网址名称</td><td>网址</td></tr>";
		for (var i = 0; i < localStorage.length; i++) {
			var c = localStorage.key(i);
			var d = localStorage.getItem(c);
			b += "<tr><td>" + c + "</td><td>" + d +"</td></tr>"; 
		}
		b += "</table>";
		a.innerHTML = b;
	} else {
		a.innerHTML = "当前没有数据";
	}
}


//js输出
window.alert("你好，欢迎您来到我的网站");
document.getElementById("js_print1").innerHTML = "这是一种输出方式"
document.write(Date())
console.log("我出现在控制台")

//js正则表达式
alert("js正则表达式")
var str = "Hello re 100"
var n = str.search(/RE/i)
document.getElementById("js_re1").innerHTML = "search检索与正则表达式相匹配的子字符串，并返回子串的起始位置：" + n

alert(str.replace("Hello", "welcome"))
alert(/^\w+$/.test("Hk1_")) //判断输入字符串是否为数字、字母、下划线组成
alert(/^[A-z]+$/.test("js")) //判断输入字符串是否全部为字母
alert(/^[0-9]+$/.exec("1226")) //判断输入字符串是否全部为数字
alert(/[^abcdef]/.test("h")) //是否不包含
alert(/(red|blue|green)/.test("orange")) //查找任何指定的选项
alert(/./g.exec(" "))
alert(/\s/g.test(" "))
alert(/....../.exec("Hukybo"))
alert(/[A-z]{5}/.exec("hello"))
alert(/^[\u4e00-\u9fa5]+$/.test("正则表达式")) ///[\u4e00-\u9fa5]/用于匹配单个汉字

var re1 = /.*bbb/g;//贪婪
var re2 = /.*?bbb/g;//惰性
var text = "abbbaabbbaaabbbb1234"
alert(re1.test(text) +"");
alert(re1.test(text) +"");
alert(text)
alert(text.match(re1));
alert("abbbaabbbaaabbbb1234".match(re2)+"");

alert(/(kid){3}/.exec("kidkidkid"))
alert(/I love (she|her)/.exec("I love she"))
alert("12.21/2012".replace(/(\d{2}).(\d{2})\/(\d{4})/, '$3-$1-$2'))

var reg = /(kid|doubi)/g
var str = 'kid is a doubi'

str = str.replace(reg, function(word){
	console.log(word)
    return word.replace(/./g, '*')
})


var reg = /(\w{3}) is \1/ //反向引用，但是\1不能越界
reg.test('kid is kid')  // true
var num = "1234 5678";
var newNum = num.replace(/(\d{4}) (\d{4})/,"$2 $1");
alert(newNum)

var reg = /kid is a (?=doubi)/ //向前瞻型分组 - 你前方是什么东西吗？
reg.test('kid is a doubi')  // true
reg.test('kid is a shabi')  // false

//分组+量词
alert(/(dog){2}/.test("dogdog"))//true
//分组+范围
alert("baddad".match(/([bd]ad?)*/))//baddad,dad
//分组+分组
alert("mon and dad".match(/(mon( and dad)?)/))//mon and dad,mon and dad, and dad

