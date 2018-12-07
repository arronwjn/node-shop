# 前端开发规范总结


[1 前言](#1)

[2 项目命名规则和文件命名规范](#2)

[3 HTML编码规范](#3)

[4 CSS编码规范](#4)

[5 JavaScript 编码规范](#5)

[6 单页应用开发规范](#6)









<span id="1"></span>
## 1 前言


坚持制定好的代码规范。

无论团队人数多少，代码应该同出一门
            
             转自：腾讯alloyteam团队


<span id="2"></span>
## 2 命名规则和项目目录规范



### 2.1 项目命名

全部采用小写方式， 以下划线分隔.

例：
```
my_project_name
```

### 2.2 目录命名

参照项目命名规则；

有复数结构时，要采用复数命名法。

```
node_modules
styles
images
```

### 2.3 js文件命名

参照项目命名规则。

例：
```
citys.js
account_model.js
```

### 2.4 CSS, SCSS,less文件命名

参照项目命名规则。

例：
```
index.css
retina_sprites.css
```

### 2.5 HTML文件命名

参照项目命名规则。

例：
```
error_report.html
```

### 2.6 基于React,vue开发，组件文件名，使用大驼峰方式命名

例：
```
AccuntModal
```


<span id="3"></span>
## 3 HTML编码规范

### 3.1 语法
- 缩进使用（4个空格）；
- 嵌套的节点应该缩进；
- 在属性上，使用双引号，不要使用单引号；
- 属性名全小写，用中划线做分隔符；
- 不要在自动闭合标签结尾处使用斜线（HTML5 规范 指出他们是可选的）；
- 不要忽略可选的关闭标签，例：</li> 和 </body>。
- [建议]每行不得超过 120 个字符。

解释：

过长的代码不容易阅读与维护。但是考虑到 HTML 的特殊性，不做硬性要求。

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page title</title>
    </head>
    <body>
        <img src="images/company_logo.png" alt="Company">

        <h1 class="hello-world">Hello, world!</h1>
    </body>
</html>
```
- [强制] 对于无需自闭合的标签，不允许自闭合。

解释：

常见无需自闭合标签有input、br、img、hr等。

```html
<!-- good -->
<input type="text" name="title">

<!-- bad -->
<input type="text" name="title" />
```

- [强制] 对 HTML5 中规定允许省略的闭合标签，不允许省略闭合标签。

解释：

对代码体积要求非常严苛的场景，可以例外。比如：第三方页面使用的投放系统。

```html
<!-- good -->
<ul>
    <li>first</li>
    <li>second</li>
</ul>

<!-- bad -->
<ul>
    <li>first
    <li>second
</ul>
```

- [强制] 标签使用必须符合标签嵌套规则。

解释：

比如 div 不得置于 p 中，tbody 必须置于 table 中。

详细的标签嵌套规则参见HTML DTD中的 Elements 定义部分。

- [建议] HTML 标签的使用应该遵循标签的语义。

解释：

下面是常见标签语义

p - 段落
h1,h2,h3,h4,h5,h6 - 层级标题
strong,em - 强调
ins - 插入
del - 删除
abbr - 缩写
code - 代码标识
cite - 引述来源作品的标题
q - 引用
blockquote - 一段或长篇引用
ul - 无序列表
ol - 有序列表
dl,dt,dd - 定义列表

```html
<!-- good -->
<p>Esprima serves as an important <strong>building block</strong> for some JavaScript language tools.</p>

<!-- bad -->
<div>Esprima serves as an important <span class="strong">building block</span> for some JavaScript language tools.</div>
```

- [建议] 在 CSS 可以实现相同需求的情况下不得使用表格进行布局。

解释：

在兼容性允许的情况下应尽量保持语义正确性。对网格对齐和拉伸性有严格要求的场景允许例外，如多列复杂表单。

- [建议] 标签的使用应尽量简洁，减少不必要的标签。

```html
<!-- good -->
<img class="avatar" src="image.png">

<!-- bad -->
<span class="avatar">
    <img src="image.png">
</span>
```

### 3.2 HTML5 doctype

- 在页面开头使用这个简单地doctype来启用标准模式，使其在每个浏览器中尽可能一致的展现；
- 虽然doctype不区分大小写，但是按照惯例，doctype大写 ([关于html属性，大写还是小写](https://stackoverflow.com/questions/15594877/is-there-any-benefits-to-use-uppercase-or-lowercase-letters-with-html5-tagname))。

```html
<!DOCTYPE html>
<html>
	...
</html>
```



### 3.3 lang属性

- 根据HTML5规范：

##### [注意] 应在html标签上加上lang属性。这会给语音工具和翻译工具帮助，告诉它们应当怎么去发音和翻译。

- 更多关于 lang 属性的说明在 [这里](http://w3c.github.io/html/semantics.html#the-html-element)

- 在sitepoint上可以查到 [语言列表](https://www.sitepoint.com/iso-2-letter-language-codes/)

##### 但 sitepoint 只是给出了语言的大类，例如中文只给出了zh，但是没有区分香港，台湾，大陆。而微软给出了一份更加详细的语言列表，其中细分了 zh-cn, zh-hk, zh-tw。

```html
<!DOCTYPE html>
<html lang="en-us">
    ...
</html>
```


### 3.4 字符编码

通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式，通常指定为'UTF-8'。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
    </head>
    ...
</html>
```

### 3.5 IE兼容模式

用 <meta> 标签可以指定页面应该用什么版本的IE来渲染；

如果你想要了解更多，请点击 [这里](https://stackoverflow.com/questions/6771258/what-does-meta-http-equiv-x-ua-compatible-content-ie-edge-do)；


```html
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    </head>
    ...
</html>
```

### 3.6 属性顺序及属性

属性应该按照特定的顺序出现以保证易读性：

- class
- id
- name
- data-*
- src,for,type,href,value,max-length, max, min, pattern
- placeholder, title, alt
- aria-*, role
- required, readonly, disabled

##### class是为高可复用组件设计的，所以应处在第一位；
##### id更加具体且应该尽量少使用，所以将它放在第二位。


```html
<a class="..." id="..." data-modal="toggle" href="#">Example link</a>

<input class="form-control" type="text">

<img src="..." alt="...">
```

- [强制] 属性名必须使用小写字母。

```html
<!-- good -->
<table cellspacing="0">...</table>

<!-- bad -->
<table cellSpacing="0">...</table>
```

- [强制] 属性值必须用双引号包围。

解释：

不允许使用单引号，不允许不使用引号。

```html
<!-- good -->
<script src="esl.js"></script>

<!-- bad -->
<script src='esl.js'></script>
<script src=esl.js></script>
```

- [建议] 布尔类型的属性，建议不添加属性值。 

```html
<input type="text" disabled>
<input type="checkbox" value="1" checked>
```

- [建议] 自定义属性建议以 xxx- 为前缀，推荐使用 data-。

解释：

使用前缀有助于区分自定义属性和标准定义的属性。

```html
<ol data-ui-type="Select"></ol>
```

### 3.7 JS生成标签


在JS文件中生成标签让内容变得更难查找，更难编辑，性能更差。应该尽量避免这种情况的出现。

减少标签数量

在编写HTML代码时，需要尽量避免多余的父节点；

很多时候，需要通过迭代和重构来使HTML变得更少。

```html
<!-- Not well -->
<span class="avatar">
    <img src="...">
</span>

<!-- Better -->
<img class="avatar" src="...">
```

实用高于完美

尽量遵循HTML标准和语义，但是不应该以浪费实用性作为代价；

任何时候都要用尽量小的复杂度和尽量少的标签来解决问题。


### 3.8  CSS和JavaScript引入

- [强制] 引入 CSS 时必须指明 rel="stylesheet"

```html
<link rel="stylesheet" src="page.css">
```

- [建议] 引入 CSS 和 JavaScript 时无须指明 type 属性。

解释：

text/css 和 text/javascript 是 type 的默认值。

- [建议] 展现定义放置于外部 CSS 中，行为定义放置于外部 JavaScript 中。

解释：

结构-样式-行为的代码分离，对于提高代码的可阅读性和维护性都有好处。

- [建议] 在 head 中引入页面需要的所有 CSS 资源。

解释：

在页面渲染的过程中，新的CSS可能导致元素的样式重新计算和绘制，页面闪烁。

- [建议] JavaScript 应当放在页面末尾，或采用异步加载。

解释：

将 script 放在页面中间将阻断页面的渲染。出于性能方面的考虑，如非必要，请遵守此条建议

```html
<body>
    <!-- a lot of elements -->
    <script src="init-behavior.js"></script>
</body>
```

<span id="4"></span>
## 4 CSS编码规范


### 4.1 代码风格

- 代码应该符合 CSS 语法有效性，可以使用 [W3C CSS validator](http://jigsaw.w3.org/css-validator/validator.html.zh-cn) 工具来验证。

- ID 和 Class 应该按照元素功能命名，不应该按照元素表现命名，命名应该含义清晰。

```css
/* bad: 含义不清 */
#yee-1901 {}

/* bad: 表现化 */
.button-green {}
.clear {}

/* good: 功能化 */
#gallery {}
#login {}
.video {}
```

- ID 和 Class 命名应该在保持含义清晰的前提下尽可能简短。

```css
/* bad */
#navigation {}
.atr {}

/* good */
#nav {}
.author {}
```

- 不能「MUST NOT」把 ID 和 Class 选择符作为类型选择符的限定符，这样做没必要，反而还影响性能。

```css
/* bad */
ul#example {}
div.error {}

/* good */
#example {}
.error {}
```

- 属性应该尽可能使用简化方式书写，需注意简写时默认值的副作用，详细参考 [Shorthand properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)。

- CSS 属性中的 0 值不应该带单位。

```css
/* bad */
margin: 0px;
padding: 0px;

/* good */
margin: 0;
padding: 0;
```

- CSS 属性中数值介于-1到1之间的小数应该忽略开头的 0.

```css
/* bad */
font-size: 0.8rem;

/* good */
font-size: .8rem;
```

- CSS 的色值应该尽可能使用简化写法。

```css
/* bad */
color: #eebbcc;

/* good */
color: #ebc;
```

### 4.2 组织格式

- 必须采用 4 个空格为一次缩进。

- CSS 每个代码块相对于父代码库必须有缩进。

```css
/*good*/
@media screen, projection {

  html {
    background: #fff;
    color: #444;
  }

}
```

- CSS 属性声明必须以分号结尾。

- CSS 属性名冒号后必须有一个空格。

```css
/* bad */
color:#eebbcc;

/* good */
color: #ebc;
```

- 最后的选择符与 { 之间必须有一个空格。

```css
/* bad */
#video{
  margin-top: 1em;
}
.author
{
  margin-top: 1em;
}

/* good */
#video {
  margin-top: 1em;
}
```

- 多个并列的选择符必须换行。

```css
/* bad */
a:focus, a:active {
  position: relative; top: 1px;
}

/* good */
h1,
h2,
h3 {
  font-weight: normal;
  line-height: 1.2;
}
```

- CSS 规则之间必须以空白行分隔。

```css
/* good */
html {
  background: #fff;
}

body {
  margin: auto;
  width: 50%;
}
```

- CSS 属性值中所有使用到引号的位置必须使用单引号。

```css
/* bad */
@import url("//www.google.com/css/maia.css");

html {
  font-family: "open sans", arial, sans-serif;
}

/* good */
@import url('//www.google.com/css/maia.css');

html {
  font-family: 'open sans', arial, sans-serif;
}
```

### 4.3 CSS规则段落之前应该添加注释说明。

```css
/* good */
/* Header */

#adw-header {}

/* Footer */

#adw-footer {}

/* Gallery */

.adw-gallery {}
```

<span id="5"></span>
## 5 JavaScript编码规范


### 5.1 缩进,空格

- 缩进

使用（4个空格）。

```javascript
var x = 1,
    y = 1;

if (x < y) {
    x += 10;
} else {
    x += 1;
}
```

- 空格

##### [强制] 二元运算符两侧必须有一个空格，一元运算符与操作对象之间不允许有空格。

示例：

```javascript
var a = !arr.length;
a++;
a = b + c;
```

##### [强制] 用作代码块起始的左花括号 `{` 前必须有一个空格。

示例：

```javascript
// good
if (condition) {
}

while (condition) {
}

function funcName() {
}

// bad
if (condition){
}

while (condition){
}

function funcName(){
}
```

##### [强制] `if / else / for / while / function / switch / do / try / catch / finally` 关键字后，必须有一个空格。

示例：

```javascript
// good
if (condition) {
}

while (condition) {
}

(function () {
})();

// bad
if(condition) {
}

while(condition) {
}

(function() {
})();
```

##### [强制] 在对象创建时，属性中的 `:` 之后必须有空格，`:` 之前不允许有空格。

示例：

```javascript
// good
var obj = {
    a: 1,
    b: 2,
    c: 3
};

// bad
var obj = {
    a : 1,
    b:2,
    c :3
};
```

##### [强制] 函数声明、具名函数表达式、函数调用中，函数名和 `(` 之间不允许有空格。

示例：

```javascript
// good
function funcName() {
}

var funcName = function funcName() {
};

funcName();

// bad
function funcName () {
}

var funcName = function funcName () {
};

funcName ();
```

##### [强制] `,` 和 `;` 前不允许有空格。

示例：

```javascript
// good
callFunc(a, b);

// bad
callFunc(a , b) ;
```

##### [强制] 在函数调用、函数声明、括号表达式、属性访问、`if / for / while / switch / catch` 等语句中，`()` 和 `[]` 内紧贴括号部分不允许有空格。

示例：

```javascript
// good

callFunc(param1, param2, param3);

save(this.list[this.indexes[i]]);

needIncream && (variable += increament);

if (num > list.length) {
}

while (len--) {
}


// bad

callFunc( param1, param2, param3 );

save( this.list[ this.indexes[ i ] ] );

needIncreament && ( variable += increament );

if ( num > list.length ) {
}

while ( len-- ) {
}
```

##### [强制] 单行声明的数组与对象，如果包含元素，`{}` 和 `[]` 内紧贴括号部分不允许包含空格。

解释：

声明包含元素的数组与对象，只有当内部元素的形式较为简单时，才允许写在一行。元素复杂的情况，还是应该换行书写。


示例：

```javascript
// good
var arr1 = [];
var arr2 = [1, 2, 3];
var obj1 = {};
var obj2 = {name: 'obj'};
var obj3 = {
    name: 'obj',
    age: 20,
    sex: 1
};

// bad
var arr1 = [ ];
var arr2 = [ 1, 2, 3 ];
var obj1 = { };
var obj2 = { name: 'obj' };
var obj3 = {name: 'obj', age: 20, sex: 1};
```

##### [强制] 行尾不得有多余的空格。


### 5.2 单行长度

不要超过 80，但如果编辑器开启 word wrap可以不考虑单行长度。

### 5.3 类型


常用类型如：{string}, {number}, {boolean}, {Object}, {Function}, {RegExp}, {Array}, {Date}。

类型不仅局限于内置的类型，也可以是自定义的类型。比如定义了一个类 Developer，就可以使用它来定义一个参数和返回值的类型。

[强制] 对于基本类型 {string}, {number}, {boolean}，首字母必须小写。

| 类型定义 | 语法示例 | 解释 |
| ------- | ------- | --- |
|String|{string}|--|
|Number|{number}|--|
|Boolean|{boolean}|--|
|Object|{Object}|--|
|Function|{Function}|--|
|RegExp|{RegExp}|--|
|Array|{Array}|--|
|Date|{Date}|--|
|单一类型集合|{Array.&lt;string&gt;}|string 类型的数组|
|多类型|{(number｜boolean)}|可能是 number 类型, 也可能是 boolean 类型|
|允许为null|{?number}|可能是 number, 也可能是 null|
|不允许为null|{!Object}|Object 类型, 但不是 null|
|Function类型|{function(number, boolean)}|函数, 形参类型|
|Function带返回值|{function(number, boolean):string}|函数, 形参, 返回值类型|
|参数可选|@param {string=} name|可选参数, =为类型后缀|
|可变参数|@param {...number} args|变长参数,  ...为类型前缀|
|任意类型|{*}|任意类型|
|可选任意类型|@param {*=} name|可选参数，类型不限|
|可变任意类型|@param {...*} args|变长参数，类型不限|

- 原始值: 相当于传值

string
number
boolean
null
undefined

```javascript
var foo = 1,
    bar = foo;

bar = 9;

console.log(foo, bar); // => 1, 9
```

- 复杂类型: 相当于传引用

object
array
function

```javascript
var foo = [1, 2],
    bar = foo;

bar[0] = 9;

console.log(foo[0], bar[0]); // => 9, 9
```

### 5.4 对象

- 使用字面值创建对象

```javascript
// bad
var item = new Object();

// good
var item = {};
```

- 不要使用保留字 reserved words 作为键

```javascript
// bad
var superman = {
  class: 'superhero',
  default: { clark: 'kent' },
  private: true
};

// good
var superman = {
  klass: 'superhero',
  defaults: { clark: 'kent' },
  hidden: true
};
```

### 5.5 数组

- 使用字面值创建数组

```javascript
// bad
var items = new Array();

// good
var items = [];
```
- 如果你不知道数组的长度，使用push

```javascript
var someStack = [];

// bad
someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');
```

- 当你需要拷贝数组时使用slice

```javascript
var len = items.length,
    itemsCopy = [],
    i;

// bad
for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

// good
itemsCopy = items.slice();
```

- 使用slice将类数组的对象转成数组.

```javascript
function trigger() {
  var args = Array.prototype.slice.call(arguments);
  ...
}
```

### 5.6 字符串

- 对字符串使用单引号 ''

```javascript
// bad
var name = "Bob Parr";

// good
var name = 'Bob Parr';

// bad
var fullName = "Bob " + this.lastName;

// good
var fullName = 'Bob ' + this.lastName;
```

- 超过80个字符的字符串应该使用字符串连接换行

注: 如果过度使用，长字符串连接可能会对性能有影响.

```javascript
// bad
var errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

// bad
var errorMessage = 'This is a super long error that \
was thrown because of Batman. \
When you stop to think about \
how Batman had anything to do \
with this, you would get nowhere \
fast.';

// good
var errorMessage = 'This is a super long error that ' +
'was thrown because of Batman.' +
'When you stop to think about ' +
'how Batman had anything to do ' +
'with this, you would get nowhere ' +
'fast.';
```

- 编程时使用join而不是字符串连接来构建字符串，特别是IE

```javascript
var items,
    messages,
    length, i;

messages = [{
  state: 'success',
  message: 'This one worked.'
},{
  state: 'success',
  message: 'This one worked as well.'
},{
  state: 'error',
  message: 'This one did not work.'
}];

length = messages.length;

// bad
function inbox(messages) {
  items = '<ul>';

  for (i = 0; i < length; i++) {
    items += '<li>' + messages[i].message + '</li>';
  }

  return items + '</ul>';
}

// good
function inbox(messages) {
  items = [];

  for (i = 0; i < length; i++) {
    items[i] = messages[i].message;
  }

  return '<ul><li>' + items.join('</li><li>') + '</li></ul>';
}
```

### 5.7 函数

- 函数表达式

```javascript
// 匿名函数表达式
var anonymous = function() {
  return true;
};

// 有名函数表达式
var named = function named() {
  return true;
};

// 立即调用函数表达式
(function() {
  console.log('Welcome to the Internet. Please follow me.');
})();
```

- 绝对不要在一个非函数块里声明一个函数，把那个函数赋给一个变量。浏览器允许你这么做，但是它们解析不同。

注: ECMA-262定义把块定义为一组语句，函数声明不是一个语句。阅读ECMA-262对这个问题的说明.

```javascript
// bad
if (currentUser) {
  function test() {
    console.log('Nope.');
  }
}

// good
if (currentUser) {
  var test = function test() {
    console.log('Yup.');
  };
}
```

绝对不要把参数命名为 arguments, 这将会逾越函数作用域内传过来的 arguments 对象.

```javascript
// bad
function nope(name, options, arguments) {
  // ...stuff...
}

// good
function yup(name, options, args) {
  // ...stuff...
}
```


### 5.8 属性

- 当使用变量访问属性时使用中括号

```javascript
var luke = {
  jedi: true,
  age: 28
};

function getProp(prop) {
  return luke[prop];
}

var isJedi = getProp('jedi');
```

### 5.9 变量

- 总是使用 var 来声明变量，如果不这么做将导致产生全局变量，我们要避免污染全局命名空间。

```javascript
// bad
superPower = new SuperPower();

// good
var superPower = new SuperPower();
```

- 使用一个 var 以及新行声明多个变量，缩进4个空格。

```javascript
// bad
var items = getItems();
var goSportsTeam = true;
var dragonball = 'z';

// good
var items = getItems(),
    goSportsTeam = true,
    dragonball = 'z';
```

最后再声明未赋值的变量，当你想引用之前已赋值变量的时候很有用。

```javascript
// bad
var i, len, dragonball,
    items = getItems(),
    goSportsTeam = true;

// bad
var i, items = getItems(),
    dragonball,
    goSportsTeam = true,
    len;

// good
var items = getItems(),
    goSportsTeam = true,
    dragonball,
    length,
    i;
```

在作用域顶部声明变量，避免变量声明和赋值引起的相关问题。

```javascript
// bad
function() {
  test();
  console.log('doing stuff..');

  //..other stuff..

  var name = getName();

  if (name === 'test') {
    return false;
  }

  return name;
}

// good
function() {
  var name = getName();

  test();
  console.log('doing stuff..');

  //..other stuff..

  if (name === 'test') {
    return false;
  }

  return name;
}

// bad
function() {
  var name = getName();

  if (!arguments.length) {
    return false;
  }

  return true;
}

// good
function() {
  if (!arguments.length) {
    return false;
  }

  var name = getName();

  return true;
}
```


### 5.10 条件表达式和等号


- 适当使用 === 和 !== 以及 == 和 !=.

- 条件表达式的强制类型转换遵循以下规则：

对象 被计算为 true
Undefined 被计算为 false
Null 被计算为 false
布尔值 被计算为 布尔的值
数字 如果是 +0, -0, or NaN 被计算为 false , 否则为 true
字符串 如果是空字符串 '' 则被计算为 false, 否则为 true

```javascript
if ([0]) {
  // true
  // An array is an object, objects evaluate to true
}
```

- 使用快捷方式.

```javascript
// bad
if (name !== '') {
  // ...stuff...
}

// good
if (name) {
  // ...stuff...
}

// bad
if (collection.length > 0) {
  // ...stuff...
}

// good
if (collection.length) {
  // ...stuff...
}
```

### 5.11 块

- 给所有多行的块使用大括号

```javascript
// bad
if (test)
  return false;

// good
if (test) return false;

// good
if (test) {
  return false;
}

// bad
function() { return false; }

// good
function() {
  return false;
}
```


### 5.12 注释

- 使用 /** ... */ 进行多行注释，包括描述，指定类型以及参数值和返回值

```javascript
// bad
// make() returns a new element
// based on the passed in tag name
//
// @param <String> tag
// @return <Element> element
function make(tag) {

  // ...stuff...

  return element;
}

// good
/**
* make() returns a new element
* based on the passed in tag name
* @param <String> tag
* @return <Element> element
*/
function make(tag) {
    // ...stuff...
    return element;
}
```

- 使用 // 进行单行注释，在评论对象的上面进行单行注释，注释前放一个空行.

```javascript
// bad
var active = true;  // is current tab

// good
// is current tab
var active = true;

// bad
function getType() {
  console.log('fetching type...');
  // set the default type to 'no type'
  var type = this._type || 'no type';

  return type;
}

// good
function getType() {
  console.log('fetching type...');

  // set the default type to 'no type'
  var type = this._type || 'no type';

  return type;
}
```

如果你有一个问题需要重新来看一下或如果你建议一个需要被实现的解决方法的话需要在你的注释前面加上 FIXME 或 TODO 帮助其他人迅速理解

有时我们会使用一些特殊标记进行说明。特殊标记必须使用单行注释的形式。下面列举了一些常用标记：

解释：

1. TODO: 有功能待实现。此时需要对将要实现的功能进行简单说明。
2. FIXME: 该处代码运行没问题，但可能由于时间赶或者其他原因，需要修正。此时需要对如何修正进行简单说明。
3. HACK: 为修正某些问题而写的不太好或者使用了某些诡异手段的代码。此时需要对思路或诡异手段进行描述。
4. XXX: 该处存在陷阱。此时需要对陷阱进行描述。

```javascript
function Calculator() {

  // FIXME: shouldn't use a global here
  total = 0;

  return this;
}
```

```javascript
function Calculator() {

  // TODO: total should be configurable by an options param
  this.total = 0;

  return this;
}
```

- 命名空间使用 @namespace 标识。

```javascript
/**
 * @namespace
 */
var util = {};
```

- 使用 `@class` 标记类或构造函数。

解释：

对于使用对象 `constructor` 属性来定义的构造函数，可以使用 `@constructor` 来标记。

```javascript
/**
 * 描述
 *
 * @class
 */
function Developer() {
    // constructor body
}
```

- 使用 `@extends` 标记类的继承信息。

```javascript
/**
 * 描述
 *
 * @class
 * @extends Developer
 */
function Fronteer() {
    Developer.call(this);
    // constructor body
}
util.inherits(Fronteer, Developer);
```

- 使用包装方式扩展类成员时， 必须通过 @lends 进行重新指向。

解释：

没有 `@lends` 标记将无法为该类生成包含扩展类成员的文档。

```javascript
/**
 * 类描述
 *
 * @class
 * @extends Developer
 */
function Fronteer() {
    Developer.call(this);
    // constructor body
}

util.extend(
    Fronteer.prototype,
    /** @lends Fronteer.prototype */{
        _getLevel: function () {
            // TODO
        }
    }
);
```

-  类的属性或方法等成员信息使用 @public / @protected / @private 中的任意一个，指明可访问性。


解释：

生成的文档中将有可访问性的标记，避免用户直接使用非 `public` 的属性或方法。

```javascript
/**
 * 类描述
 *
 * @class
 * @extends Developer
 */
var Fronteer = function () {
    Developer.call(this);

    /**
     * 属性描述
     *
     * @type {string}
     * @private
     */
    this._level = 'T12';

    // constructor body
};
util.inherits(Fronteer, Developer);

/**
 * 方法描述
 *
 * @private
 * @return {string} 返回值描述
 */
Fronteer.prototype._getLevel = function () {
};
```
- 常量必须使用 @const 标记，并包含说明和类型信息。

```javascript
/**
 * 常量说明
 *
 * @const
 * @type {string}
 */
var REQUEST_URL = 'myurl.do';
```

- 对于类型未定义的复杂结构的注释，可以使用 @typedef 标识来定义。

```javascript
// `namespaceA~` 可以换成其它 namepaths 前缀，目的是为了生成文档中能显示 `@typedef` 定义的类型和链接。
/**
 * 服务器
 *
 * @typedef {Object} namespaceA~Server
 * @property {string} host 主机
 * @property {number} port 端口
 */

/**
 * 服务器列表
 *
 * @type {Array.<namespaceA~Server>}
 */
var servers = [
    {
        host: '1.2.3.4',
        port: 8080
    },
    {
        host: '1.2.3.5',
        port: 8081
    }
];
```
- AMD 模块使用 @module 或 @exports 标识。

解释：

@exports 与 @module 都可以用来标识模块，区别在于 @module 可以省略模块名称。而只使用 @exports 时在 namepaths 中可以省略 module: 前缀。

```javascript
define(
    function (require) {

        /**
         * foo description
         *
         * @exports Foo
         */
        var foo = {
            // TODO
        };

        /**
         * baz description
         *
         * @return {boolean} return description
         */
        foo.baz = function () {
            // TODO
        };

        return foo;

    }
);
```

也可以在 exports 变量前使用 @module 标识：

```javascript
define(
    function (require) {

        /**
         * module description.
         *
         * @module foo
         */
        var exports = {};


        /**
         * bar description
         *
         */
        exports.bar = function () {
            // TODO
        };

        return exports;
    }
);
```

如果直接使用 factory 的 exports 参数，还可以：

```javascript
/**
 * module description.
 *
 * @module
 */
define(
    function (require, exports) {

        /**
         * bar description
         *
         */
        exports.bar = function () {
            // TODO
        };
        return exports;
    }
);
```

- 对于已使用 @module 标识为 AMD模块 的引用，在 namepaths 中必须增加 module: 作前缀。

解释：

namepaths 没有 module: 前缀时，生成的文档中将无法正确生成链接。

```javascript
/**
 * 点击处理
 *
 * @fires module:Select#change
 * @private
 */
Select.prototype.clickHandler = function () {
    /**
     * 值变更时触发
     *
     * @event module:Select#change
     * @param {Object} e e描述
     * @param {string} e.before before描述
     * @param {string} e.after after描述
     */
    this.fire(
        'change',
        {
            before: 'foo',
            after: 'bar'
        }
    );
};
```

- [建议] 对于类定义的模块，可以使用 @alias 标识构建函数。

```javascript
/**
 * A module representing a jacket.
 * @module jacket
 */
define(
    function () {

        /**
         * @class
         * @alias module:jacket
         */
        var Jacket = function () {
        };

        return Jacket;
    }
);
```

- [建议] 多模块定义时，可以使用 `@exports` 标识各个模块。


```javascript
// one module
define('html/utils',
    /**
     * Utility functions to ease working with DOM elements.
     * @exports html/utils
     */
    function () {
        var exports = {
        };

        return exports;
    }
);

// another module
define('tag',
    /** @exports tag */
    function () {
        var exports = {
        };

        return exports;
    }
);
```
- [建议] 对于 exports 为 Object 的模块，可以使用`@namespace`标

解释：

使用 @namespace 而不是 @module 或 @exports 时，对模块的引用可以省略 module: 前缀。

- [建议] 对于 exports 为类名的模块，使用 `@class` 和 `@exports` 标识。

```javascript

// 只使用 @class Bar 时，类方法和属性都必须增加 @name Bar#methodName 来标识，与 @exports 配合可以免除这一麻烦，并且在引用时可以省去 module: 前缀。
// 另外需要注意类名需要使用 var 定义的方式。

/**
 * Bar description
 *
 * @see foo
 * @exports  Bar
 * @class
 */
var Bar = function () {
    // TODO
};

/**
 * baz description
 *
 * @return {(string|Array)} return description
 */
Bar.prototype.baz = function () {
    // TODO
};
```
- [建议] 细节注释遵循单行注释的格式。说明必须换行时，每行是一个单行注释的起始。

```javascript
function foo(p1, p2, opt_p3) {
    // 这里对具体内部逻辑进行说明
    // 说明太长需要换行
    for (...) {
        ....
    }
}
```

### 5.13 逗号


- 不要将逗号放前面

```javascript
// bad
var once
  , upon
  , aTime;

// good
var once,
    upon,
    aTime;

// bad
var hero = {
    firstName: 'Bob'
  , lastName: 'Parr'
  , heroName: 'Mr. Incredible'
  , superPower: 'strength'
};

// good
var hero = {
  firstName: 'Bob',
  lastName: 'Parr',
  heroName: 'Mr. Incredible',
  superPower: 'strength'
};
```

- 不要加多余的逗号，这可能会在IE下引起错误，同时如果多一个逗号某些ES3的实现会计算多数组的长度。

```javascript
// bad
var hero = {
  firstName: 'Kevin',
  lastName: 'Flynn',
};

var heroes = [
  'Batman',
  'Superman',
];

// good
var hero = {
  firstName: 'Kevin',
  lastName: 'Flynn'
};

var heroes = [
  'Batman',
  'Superman'
];
```

### 5.14 分号

- 语句结束一定要加分号 一定程度会提高js执行效率

```javascript
// bad
(function() {
  var name = 'Skywalker'
  return name
})()

// good
(function() {
  var name = 'Skywalker';
  return name;
})();

// good
;(function() {
  var name = 'Skywalker';
  return name;
})();
```

### 5.15 类型转换

- 在语句的开始执行类型转换.

- 字符串:

```javascript
//  => this.reviewScore = 9;

// bad
var totalScore = this.reviewScore + '';

// good
var totalScore = '' + this.reviewScore;

// bad
var totalScore = '' + this.reviewScore + ' total score';

// good
var totalScore = this.reviewScore + ' total score';
```

- 对数字使用 parseInt 并且总是带上类型转换的基数.

```javascript
var inputValue = '4';

// bad
var val = new Number(inputValue);

// bad
var val = +inputValue;

// bad
var val = inputValue >> 0;

// bad
var val = parseInt(inputValue);

// good
var val = Number(inputValue);

// good
var val = parseInt(inputValue, 10);

// good
/**
* parseInt was the reason my code was slow.
* Bitshifting the String to coerce it to a
* Number made it a lot faster.
*/
var val = inputValue >> 0;
```

- 布尔值:

```javascript
var age = 0;

// bad
var hasAge = new Boolean(age);

// good
var hasAge = Boolean(age);

// good
var hasAge = !!age;
```

### 5.16 命名约定

- 避免单个字符名，让你的变量名有描述意义。

```javascript
// bad
function q() {
  // ...stuff...
}

// good
function query() {
  // ..stuff..
}
```

- 当命名对象、函数和实例时使用驼峰命名规则

```javascript
// bad
var OBJEcttsssss = {};
var this_is_my_object = {};
var this-is-my-object = {};
function c() {};
var u = new user({
  name: 'Bob Parr'
});

// good
var thisIsMyObject = {};
function thisIsMyFunction() {};
var user = new User({
  name: 'Bob Parr'
});
```

- 当命名构造函数或类时使用驼峰式大写

```javascript
// bad
function user(options) {
  this.name = options.name;
}

var bad = new user({
  name: 'nope'
});

// good
function User(options) {
  this.name = options.name;
}

var good = new User({
  name: 'yup'
});
```

命名私有属性时前面加个下划线 _

```javascript
// bad
this.__firstName__ = 'Panda';
this.firstName_ = 'Panda';

// good
this._firstName = 'Panda';
```

- 当保存对 this 的引用时使用 _this.

```javascript
// bad
function() {
  var self = this;
  return function() {
    console.log(self);
  };
}

// bad
function() {
  var that = this;
  return function() {
    console.log(that);
  };
}

// good
function() {
  var _this = this;
  return function() {
    console.log(_this);
  };
}
```

### 5.17 存取器

- 属性的存取器函数不是必需的

- 如果你确实有存取器函数的话使用getVal() 和 setVal('hello')

```javascript
// bad
dragon.age();

// good
dragon.getAge();

// bad
dragon.age(25);

// good
dragon.setAge(25);
```

- 如果属性是布尔值，使用isVal() 或 hasVal()

```javascript
// bad
if (!dragon.age()) {
  return false;
}

// good
if (!dragon.hasAge()) {
  return false;
}
```

- 可以创建get()和set()函数，但是要保持一致

```javascript
function Jedi(options) {
  options || (options = {});
  var lightsaber = options.lightsaber || 'blue';
  this.set('lightsaber', lightsaber);
}

Jedi.prototype.set = function(key, val) {
  this[key] = val;
};

Jedi.prototype.get = function(key) {
  return this[key];
};
```

### 5.18 构造器

- 给对象原型分配方法，而不是用一个新的对象覆盖原型，覆盖原型会使继承出现问题。

```javascript
function Jedi() {
  console.log('new jedi');
}

// bad
Jedi.prototype = {
  fight: function fight() {
    console.log('fighting');
  },

  block: function block() {
    console.log('blocking');
  }
};

// good
Jedi.prototype.fight = function fight() {
  console.log('fighting');
};

Jedi.prototype.block = function block() {
  console.log('blocking');
};
```

- 方法可以返回 this 帮助方法可链。

```javascript
// bad
Jedi.prototype.jump = function() {
  this.jumping = true;
  return true;
};

Jedi.prototype.setHeight = function(height) {
  this.height = height;
};

var luke = new Jedi();
luke.jump(); // => true
luke.setHeight(20) // => undefined

// good
Jedi.prototype.jump = function() {
  this.jumping = true;
  return this;
};

Jedi.prototype.setHeight = function(height) {
  this.height = height;
  return this;
};

var luke = new Jedi();

luke.jump()
  .setHeight(20);
```

### 5.19 事件

- 当给事件附加数据时，传入一个哈希而不是原始值，这可以让后面的贡献者加入更多数据到事件数据里而不用找出并更新那个事件的事件处理器

```javascript
// bad
$(this).trigger('listingUpdated', listing.id);

...

$(this).on('listingUpdated', function(e, listingId) {
  // do something with listingId
});
```

更好:

```javascript
// good
$(this).trigger('listingUpdated', { listingId : listing.id });

...

$(this).on('listingUpdated', function(e, data) {
  // do something with data.listingId
});
```

### 5.20 模块

- 模块应该以 ! 开始，这保证了如果一个有问题的模块忘记包含最后的分号在合并后不会出现错误

- 这个文件应该以驼峰命名，并在同名文件夹下，同时导出的时候名字一致

- 加入一个名为noConflict()的方法来设置导出的模块为之前的版本并返回它

- 总是在模块顶部声明 'use strict';

```javascript
// fancyInput/fancyInput.js

!function(global) {
  'use strict';

  var previousFancyInput = global.FancyInput;

  function FancyInput(options) {
    this.options = options || {};
  }

  FancyInput.noConflict = function noConflict() {
    global.FancyInput = previousFancyInput;
    return FancyInput;
  };

  global.FancyInput = FancyInput;
}(this);
```

### 5.21 jQuery

- 缓存jQuery查询

```javascript
// bad
function setSidebar() {
  $('.sidebar').hide();

  // ...stuff...

  $('.sidebar').css({
    'background-color': 'pink'
  });
}

// good
function setSidebar() {
  var $sidebar = $('.sidebar');
  $sidebar.hide();

  // ...stuff...

  $sidebar.css({
    'background-color': 'pink'
  });
}
```

- 对DOM查询使用级联的 $('.sidebar ul') 或 $('.sidebar ul')

- 对有作用域的jQuery对象查询使用 find

```javascript
// bad
$('.sidebar', 'ul').hide();

// bad
$('.sidebar').find('ul').hide();

// good
$('.sidebar ul').hide();

// good
$('.sidebar > ul').hide();

// good (slower)
$sidebar.find('ul');

// good (faster)
$($sidebar[0]).find('ul');
```

<span id="6"></span>
## 6 单页应用开发规范


### 6.1 命名规范


#### 6.1.1 变量命名规范

**变量命名参照Camel命名法**

- 首字母必须是字母、下划线（-）或者美元符号（$）。

- 一般采用小驼峰法：第一个字母小写，其余有意义的单词首字母大写。

- 变量名是区分大小写的，不能是关键字或保留字。


示例：

```js
//good
var  width =100；

var  _height=200；

var  $2=15;

var myName=“kim”;

//bad
var  2th=2；//不能以数字开头

var typeOf=15；//不能是关键字或保留字

变量的命名区分大小写

var a=1；

var A=1；

这里a与A不是同一个变量。
```

- boolean 类型的变量建议使用 is 或 has 开头。

```js
var isReady = false;
var hasMoreCommands = false;  
```

#### 6.1.2 常量命名规范


**常量 使用 全部字母大写，单词间下划线分隔 的命名方式。**

示例

```js
var HTML_ENTITY = {};
```

#### 6.1.3 函数的参数命名规范


**同变量命名规范一致遵循Camelm命名法**

示例：

```js
export default getFormat(myName)=>{
  
}
```

#### 6.1.4 函数命名规范

**同变量命名规范一致遵循Camelm命名法**

**[建议] 函数名 使用 动宾短语**

示例：

```js
function getFormat(source) {
}
```


#### 6.1.5 类的命名规范

**类 使用 Pascal命名法。**

示例：

```js
class TextNode{

} 
```


#### 6.1.6 类的方法或属性命名规范

**类的方法或属性一致遵循Camelm命名法**

**[建议] 类名 使用 名词**

示例：


```js
class TextNode{
  constructor(){
    super()
    this.myName = '';
    this.jumpPage = this.jumpPage.bind(this);
  }
  jumpPage(){
    return this.myName;
  }
}
```

#### 6.1.7 组件命名规范

**组件命名规范一致遵循Pascal命名法**

示例：

```js
MyName.vue
```

#### 6.1.8 文件夹及文件命名规范

**建议全部小写字母多个单词以下划线分割**

之前定的是小驼峰，个人觉得小驼峰定义项目代码里的变量，参数，属性为了区分采用小写字母多个单词以下划线分割命名法



示例：

```js
node_modules
```


### 6.2 注释

#### 6.2.1 单行注释

**[强制] 必须独占一行。// 后跟一个空格，缩进与下一行被注释说明的代码一致。**


#### 6.2.2 多行注释

**[建议] 避免使用 /*...*/ 这样的多行注释。有多行注释内容时，使用多个单行注释。**

#### 6.2.3 文档化注释

[强制] 为了便于代码阅读和自文档化，以下内容必须包含以 /**...*/ 形式的块注释中.

解释：

1.文件
2.namespace
3.类
4.函数或方法
5.类属性
6.事件
7.全局变量
8.常量
9.AMD 模块

[强制] 文档注释前必须空一行。

#### 6.2.4 文件注释

```js
/**
 * @file Describe the file
 */
```

[建议] 文件注释中可以用 @author 标识开发者信息。

```js
/**
 * @file Describe the file
 * @author wangjiannan
 */
```

#### 6.2.5 函数和方法注释

[强制] 函数/方法注释必须包含函数说明，有参数和返回值时必须使用注释标识。

[强制] 参数和返回值注释必须包含类型信息和说明。

[强制] 加入作者标识

[建议] 当函数是内部函数，外部不可访问时，可以使用 @inner 标识。

示例：

```js
/**
 * 函数描述
 *
 * @author wangjiannan & 2018-06-25T11:07:46+0800
 * 
 * @param {string} myName 参数1的说明
 * @param {string} sex 参数2的说明
 * @param {number} age 参数3的说明
 * 
 * @return {String} 返回值描述
 * 
 */
function foo(myName,sex,age) {
    return myName;
}
```

#### 6.2.6 事件注释

[强制] 必须使用 @event 标识事件，事件参数的标识与方法描述的参数标识相同。

示例：

```js
/**
 * 值变更时触发
 *
 * @event
 * 
 * @param {Object} e e描述
 * @param {string} e.before before描述
 * @param {string} e.after after描述
 * 
 */
onchange: function (e) {
}
```

#### 6.2.7 api方法注释

示例：

```js
const $api = {};

/**
 * 客户录入
 *
 * @author wangjiannan & 2018-06-25T11:07:46+0800
 *
 * @method POST
 * 
 * @param {Object} formData 客户录入表单对象
 * 
 * @return {Promise<any>}
 * 
 * @url : /customers
 * 
 */
$api.addClient = function(formData) {
	const url = '/customers';
	const promise = new Promise(function(resolve){

        $http.post(url,formData).then(response=>{
            if (response.code === 200) {
                resolve(response);
          } else {
              utils.notice(response.msg, 'error');
          }
        })
	});
  	return promise;
};
```

### 6.3 vue方法放置顺序

[解释]vue项目中有统一及合理的方法顺序有助于对项目代码更好的阅读

```js
1.mixins
2.components
3.props
4.data
5.created
6.mounted
7.activited
8.update
9.beforeRouteUpdate
10.metods
11.filter
12.computed
13.watch
```

### 6.4 操作提示规范

待定。。。