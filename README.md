# 前端开发规范总结


[1 前言]()

[2 项目命名规则和文件命名规范]()

[3 HTML编码规范]()

[4 CSS编码规范]()











## 1 前言


坚持制定好的代码规范。

无论团队人数多少，代码应该同出一门
            
             转自：腾讯alloyteam团队


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



## 3 HTML编码规范

### 3.1 语法
- 缩进使用soft tab（4个空格）；
- 嵌套的节点应该缩进；
- 在属性上，使用双引号，不要使用单引号；
- 属性名全小写，用中划线做分隔符；
- 不要在自动闭合标签结尾处使用斜线（HTML5 规范 指出他们是可选的）；
- 不要忽略可选的关闭标签，例：</li> 和 </body>。

```
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


### 3.2 HTML5 doctype

- 在页面开头使用这个简单地doctype来启用标准模式，使其在每个浏览器中尽可能一致的展现；
- 虽然doctype不区分大小写，但是按照惯例，doctype大写 ([关于html属性，大写还是小写](https://stackoverflow.com/questions/15594877/is-there-any-benefits-to-use-uppercase-or-lowercase-letters-with-html5-tagname))。

```
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

```
<!DOCTYPE html>
<html lang="en-us">
    ...
</html>
```


### 3.4 字符编码

通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式，通常指定为'UTF-8'。

```
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


```
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    </head>
    ...
</html>
```

### 3.6 属性顺序

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


```
<a class="..." id="..." data-modal="toggle" href="#">Example link</a>

<input class="form-control" type="text">

<img src="..." alt="...">
```

### 3.7 JS生成标签


在JS文件中生成标签让内容变得更难查找，更难编辑，性能更差。应该尽量避免这种情况的出现。

减少标签数量

在编写HTML代码时，需要尽量避免多余的父节点；

很多时候，需要通过迭代和重构来使HTML变得更少。

```
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



## 4 CSS编码规范


### 4.1 代码风格

- 代码应该符合 CSS 语法有效性，可以使用 [W3C CSS validator](http://jigsaw.w3.org/css-validator/validator.html.zh-cn) 工具来验证。

- ID 和 Class 应该按照元素功能命名，不应该按照元素表现命名，命名应该含义清晰。

```
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

```
/* bad */
#navigation {}
.atr {}

/* good */
#nav {}
.author {}
```

- 不能「MUST NOT」把 ID 和 Class 选择符作为类型选择符的限定符，这样做没必要，反而还影响性能。

```
/* bad */
ul#example {}
div.error {}

/* good */
#example {}
.error {}
```

- 属性应该尽可能使用简化方式书写，需注意简写时默认值的副作用，详细参考 [Shorthand properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)。

- CSS 属性中的 0 值不应该带单位。

```
/* bad */
margin: 0px;
padding: 0px;

/* good */
margin: 0;
padding: 0;
```

- CSS 属性中数值介于-1到1之间的小数应该忽略开头的 0.

```
/* bad */
font-size: 0.8rem;

/* good */
font-size: .8rem;
```

- 