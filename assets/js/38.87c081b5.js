(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{280:function(t,a,s){"use strict";s.r(a);var n=s(2),v=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"编译型语言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译型语言"}},[t._v("#")]),t._v(" 编译型语言")]),t._v(" "),s("p",[t._v("编译型语言所开发的程序，需要通过编译器（compiler）将源代码转换为机器码后才能运行。")]),t._v(" "),s("p",[t._v("编译通常分为两个步骤：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("compile 编译\n将源代码转换为机器码")])]),t._v(" "),s("li",[s("p",[t._v("linker 链接(打包)\n当源代码、资源等文件比较多时，将多个文件打包在一个执行文件中。\n编译型语言所开发程序，一旦发生更改，整个模块甚至整个项目就需要重新编译，并根据不同的环境和平台编译出不同平台的执行文件，这给开发人员调试、发布都会带来一些麻烦。")])])]),t._v(" "),s("p",[t._v("常见编译语言有：c、c++、oc、swift")]),t._v(" "),s("p",[s("strong",[t._v("优点")]),t._v("：编译器一般会有预编译的过程对代码进行优化。因为编译只做一次，运行时不需要编译，所以编译型语言的程序执行效率高。可以脱离语言环境独立运行。\n"),s("strong",[t._v("缺点")]),t._v("：编译之后如果需要修改就需要整个模块重新编译。编译的时候根据对应的运行环境生成机器码，不同的操作系统之间移植就会有问题，需要根据运行的操作系统环境编译不同的可执行文件。\n代表语言：C、C++、Pascal、Object-C以及最近很火的苹果新语言Swift")]),t._v(" "),s("p",[t._v("以hello.c为例")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" argc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("argv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("对于以上C代码，main是程序入口杉树，实现的功能是打印字符串"),s("code",[t._v("hello world")]),t._v("到屏幕上，编译和执行如下")]),t._v(" "),s("ol",[s("li",[t._v("C语言代码预处理（比如依赖处理、宏替换），如以上代码示例，"),s("code",[t._v("#include<stdio.h>")]),t._v("就会在预处理阶段被替换")]),t._v(" "),s("li",[t._v("编译，编译起会把C语言翻译成汇编程序，一条C语言通常编译为多条汇编代码，同事编译器会对程序进行优化，生成目标汇编程序")]),t._v(" "),s("li",[t._v("编译得到的汇编语言通过汇编器再汇编成目标程序"),s("code",[t._v("hello.o")])]),t._v(" "),s("li",[t._v("链接。程序中往往包含一些共享目标文件，如示例程序中"),s("code",[t._v("printf()")]),t._v("函数位于静态库，需要经过连接器（入unix链接器ld）进行链接")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/program/compile/basis-01.png"),alt:"foo"}}),t._v(" "),s("h1",{attrs:{id:"解释型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解释型"}},[t._v("#")]),t._v(" 解释型")]),t._v(" "),s("p",[t._v("解释型语言所开发的程序，会在运行过程中（runtime）通过解释器一边将源文件转换为执行码，一边执行，也就是逐行翻译。")]),t._v(" "),s("p",[t._v("解释器可以称之为虚拟机，比如java的虚拟机jvm。")]),t._v(" "),s("p",[t._v("解释型语言也可以分两种：")]),t._v(" "),s("p",[t._v("半编译半解释\nJava属于半编译半解释，它将源代码转换成中间码才能被jvm（java虚拟机）运行。\n所谓一次编译，到处运行，是指在编译和运行中间，多了一个jvm这个抽象层。\n中间码依赖jvm，而不依赖于平台（操作系统），只要jvm支持中间码，中间就能运行，不同平台的兼容性，就由jvm来解决，开发者可以专注于开发业务逻辑，这解决了编译语言的跨平台问题。")]),t._v(" "),s("p",[t._v("但如果你代码发生了改变，仍然需要再次编译。")]),t._v(" "),s("h1",{attrs:{id:"完全解释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#完全解释"}},[t._v("#")]),t._v(" 完全解释")]),t._v(" "),s("p",[t._v("PHP是完全解释，它"),s("code",[t._v("一次编译")]),t._v("都省了，直接由解释器加载源代码，就开始逐行翻译并运行。\n那么，调试程序的时候，更改代码就能直接再次运行，不存在编译的步骤，它在跨平台的基础上，又为开发调试提供了便利。\n但这不一定是好事，这将导致php每一次运行，都需要先解释，再执行，运行效率上比不上java的直接由jvm运行中间码。")]),t._v(" "),s("p",[t._v("当然，java半编译半解释，虽然通过jvm解决了跨平台问题，但运行效率上，也是比不上编译型语言的，因为编译型语言开发的程序运行时，计算机只需要关注程序本身的流程就好了，但java，jvm也是对计算机资源的一种开销，不过这种开销非常小，几乎可以忽略。")])])}),[],!1,null,null,null);a.default=v.exports}}]);