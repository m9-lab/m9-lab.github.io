(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{265:function(t,s,a){"use strict";a.r(s);var e=a(2),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[t._v("#")]),t._v(" MySQL")]),t._v(" "),a("p",[t._v("MySQL是一个关系型数据库管理系统，关系数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性")]),t._v(" "),a("h2",{attrs:{id:"基础架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础架构"}},[t._v("#")]),t._v(" 基础架构")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/db/mysql/mysql-01.png"),alt:"foo"}}),t._v(" "),a("h3",{attrs:{id:"连接器管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接器管理"}},[t._v("#")]),t._v(" 连接器管理")]),t._v(" "),a("ul",[a("li",[t._v("长连接：连接成功后，如果客户端持续有请求，则一直使用同一个连接")]),t._v(" "),a("li",[t._v("短连接：每次执行完很少的几次查询就断开连接，下次查询再重新建立一个")])]),t._v(" "),a("p",[t._v("链接的建立过程复杂，操作中如果需要大量长时间的存取数据，使用长链接\n使用长链接的缺点：\n容易占用内存， 因为MySQL在执行过程中临时使用的内存是管理在连接对象里面的。这些资源会在连接断开的时候才释放。所以如果长连接累积下来，可能导致内存占用太大，被系统强行杀掉（OOM）")]),t._v(" "),a("p",[t._v("解决长连接占用内存，短链接繁琐的问题")]),t._v(" "),a("ol",[a("li",[t._v("定期断开长连接。使用一段时间，或者程序里面判断执行过一个占用内存的大查询后，断开连接，之后要查询再重连。")]),t._v(" "),a("li",[t._v("如果你用的是MySQL 5.7或更新版本，可以在每次执行一个比较大的操作后，通过执行"),a("code",[t._v("mysql_reset_connection")]),t._v("来重新初始化连接资源。这个过程不需要重连和重新做权限验证，但是会将连接恢复到刚刚创建完时的状态。")])]),t._v(" "),a("h3",{attrs:{id:"mysql缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql缓存"}},[t._v("#")]),t._v(" Mysql缓存")]),t._v(" "),a("p",[t._v("Mysql通过在内存中建立"),a("code",[t._v("缓冲区[buffer]")]),t._v("和"),a("code",[t._v("缓寸[cache]")]),t._v("来提高Mysql性能,key是查询的语句，value是查询的结果，对于InnoDB引擎，Mysql采用"),a("code",[t._v("缓冲池[buffer pool]")]),t._v("的方式来缓存数据和索引,对于MyISAM引擎，Mysql采用缓存的方式来缓存数据和索引,先看缓存数据，如果存在则直接返回。如果没有则直接往下走")]),t._v(" "),a("ul",[a("li",[t._v("关键字缓存（key cache）\n"),a("ul",[a("li",[t._v("当Mysql收到传入的sql语句时，它首先和先前已经解析过的sql语句进行比较，如果发现相同，则返回已缓存数据。一定是完全相同,因此MySQL的查询缓存命中率很低")])])]),t._v(" "),a("li",[t._v("查询缓存（query cache）")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHOW")]),t._v(" variables "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'have_query_cache'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查询mysql缓存配置信息")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("对于一些不常改变的数据且有大量相同sql查询的表，查询缓存会节约很大的性能，对于频繁更改的表，查询缓存是不合适的")])]),t._v(" "),a("h3",{attrs:{id:"分析器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析器"}},[t._v("#")]),t._v(" 分析器")]),t._v(" "),a("p",[t._v("分析器对你执行的sql语句进行解析，首先是词法分析包括一些关键字识别，然后语法分析，查看这条语句是否符合mysql语句")]),t._v(" "),a("p",[t._v("分析器分析识别")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("词法分析")]),t._v("(识别关键字)：\n输入的是由多个字符串和空格组成的一条SQL语句，MySQL需要识别出里面的字符串分别是什么，代表什么。\nMySQL从你输入的"),a("code",[t._v("SELECT")]),t._v('这个关键字识别出来，这是一个查询语句。它也要把字符串"T"识别成"表名T"，把字符串"ID"识别成"列ID"')]),t._v(" "),a("li",[a("strong",[t._v("语法分析")]),t._v(" (判断语法)：\n根据词法分析的结果，语法分析器会根据语法规则，判断你输入的这个SQL语句是否满足MySQL语法\n如果语法不对，就会收到报错提醒，一般语法错误会提示第一个出现错误的位置\n即关注报错中的 "),a("code",[t._v("user near")])])]),t._v(" "),a("h3",{attrs:{id:"优化器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化器"}},[t._v("#")]),t._v(" 优化器")]),t._v(" "),a("p",[t._v("经过分析器的分析,Mysql就知道你要做的事情是什么了,但是，在开始执行之前，需要经过优化器的处理。发现那些查询命中索引，还有表之间的连接顺序等")]),t._v(" "),a("p",[t._v("优化器是在表里面有多个索引的时候，决定使用哪个索引。或者在一个语句有多表关联"),a("code",[t._v("JOIN")]),t._v("的时候，决定各个表的连接顺序。比如你执行下面这样的语句，这个语句是执行两个表的"),a("code",[t._v("JOIN")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" T1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" T2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USING")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" T1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" T2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("既可以先从表t1里面取出c=10的记录的ID值，再根据ID值关联到表t2，再判断t2里面d的值是否等于20。")]),t._v(" "),a("li",[t._v("也可以先从表t2里面取出d=20的记录的ID值，再根据ID值关联到t1，再判断t1里面c的值是否等于10。\n这两种执行方法的逻辑结果是一样的，但是执行的效率会有不同，而优化器的作用就是决定选择使用哪一个方案")])]),t._v(" "),a("h3",{attrs:{id:"执行器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行器"}},[t._v("#")]),t._v(" 执行器")]),t._v(" "),a("p",[t._v("通过上面一系列的验证，使用引擎提供的接口。经过不断的执行将查询的结果存放在结果集中，通过"),a("code",[t._v("EXPLAIN")]),t._v("可以看到执行器具体扫描了多少行。")]),t._v(" "),a("p",[t._v("经过优化器筛选优化的查询语句后，就进入执行器阶段，开始执行语句")]),t._v(" "),a("p",[t._v("开始执行的时候，要先判断一下你对这个表T有没有执行查询的权限，如果没有，就会返回没有权限的错误，如下所示。")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" T "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ERROR 1142 (42000): SELECT command denied to user 'b'@'localhost' for table 'T'")]),t._v("\n")])])]),a("p",[t._v("如果有权限，就打开表继续执行。打开表的时候，执行器就会根据表的引擎定义，去使用这个引擎提供的接口。")]),t._v(" "),a("p",[t._v("比如我们这个例子中的表T中，ID字段没有索引，那么执行器的执行流程是这样的：")]),t._v(" "),a("ol",[a("li",[t._v("调用InnoDB引擎接口取这个表的第一行，判断ID值是不是10，如果不是则跳过，如果是则将这行存在结果集中；")]),t._v(" "),a("li",[t._v("调用引擎接口取"),a("code",[t._v("下一行")]),t._v("，重复相同的判断逻辑，直到取到这个表的最后一行。")]),t._v(" "),a("li",[t._v("执行器将上述遍历过程中所有满足条件的行组成的记录集作为结果集返回给客户端。")])]),t._v(" "),a("p",[t._v("至此，这个语句就执行完成了")]),t._v(" "),a("p",[t._v('对于有索引的表，执行的逻辑也差不多第一次调用的是"取满足条件的第一行"这个接口，之后循环取"满足条件的下一行"这个接口，这些接口都是引擎中已经定义好的。\n你会在数据库的慢查询日志中看到一个'),a("code",[t._v("rows_examined")]),t._v("的字段，表示这个语句执行过程中扫描了多少行。这个值就是在执行器每次调用引擎获取数据行的时候累加的。")]),t._v(" "),a("p",[t._v("在有些场景下，执行器调用一次，在引擎内部则扫描了多行，因此引擎扫描行数跟"),a("code",[t._v("rows_examined")]),t._v("并不是完全相同的")]),t._v(" "),a("h3",{attrs:{id:"日志系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志系统"}},[t._v("#")]),t._v(" 日志系统")]),t._v(" "),a("p",[t._v("首先要清楚redolog和binlog两个日志模块")]),t._v(" "),a("ol",[a("li",[t._v("redolog（InnoDB特有的日志模块，起初InnoDB是另一个公司以插件的方式加到mysql的，拥有"),a("strong",[t._v("crash-safe")]),t._v("故障恢复能力） 重做日志文件，用于记录事务操作的变化，记录修改后的值，不管事务是否提交。保证数据的完整性。其中redolog是固定大小的，是从头开始写，写到末尾在从头开始。同时会有两个指针，一个记录写入的位置，一个标记，当前擦除的位置，不断的循环。整个过程称为crash-safe。即时数据库异常，也会有记录")]),t._v(" "),a("li",[t._v("binlog 归档日志文件，用于记录对mysql数据库执行更改的所有操作。binlog是追加写，不会覆盖之前的。")])]),t._v(" "),a("p",[t._v("MySQL InnoDB 更新一条语句的流程")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" user_info "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"marco"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",[a("li",[t._v("执行器先找引擎取出ID=1这一行，ID是主键，引擎直接用树搜索找到这一行，如果本来这一行所在的数据页就在内存中，就直接返回给执行器")]),t._v(" "),a("li",[t._v("执行器拿到引擎给的行数据，把这个值加上1，比如原来是N，现在就是N+1，得到新一行数据，再调用引擎接口写入这行新数据")]),t._v(" "),a("li",[t._v("引擎将这行新数据更新到内存中，同时将这个更新记录到redolog里面，此时redolog处于prepare状态，然后告知执行器执行任务完成了，随时可以提交事务")]),t._v(" "),a("li",[t._v("执行器生成这个操作的binlog，并把binlog卸乳磁盘")]),t._v(" "),a("li",[t._v("执行器调用引擎的提交事务接口，引擎把刚刚卸乳的redolog改为提交commit状态，更新完成")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("注意：Mysql的redolog模块写入拆成2步走，prepare和commit，称为两阶段提交。\n"),a("strong",[t._v("1.redolog的prepare状态 2. binlog的写入")])])]),t._v(" "),a("p",[t._v("如果binlog没有写入并没有提交事务回滚\n如果binlog写入事务没提交，数据库回复后自动完成commit")]),t._v(" "),a("h2",{attrs:{id:"数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[t._v("#")]),t._v(" 数据结构")]),t._v(" "),a("p",[t._v("数据库查询是数据库的最主要功能之一。我们都希望查询数据的速度能尽可能的快，因此数据库系统的设计者会从查询算法的角度进行优，MySQL官方对索引的定义为："),a("u",[a("b",[t._v("索引(Index)")]),t._v("是帮助MySQL高效获取数据的数据结构。提取句子主干，就可以得到索引的本质：索引是数据结构")])]),t._v(" "),a("h3",{attrs:{id:"b树、b-树、b-树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b树、b-树、b-树"}},[t._v("#")]),t._v(" B树、B-树、B+树")]),t._v(" "),a("p",[t._v("目前大部分数据库系统及文件系统都采用B-Tree或其变种B+Tree作为索引结构")]),t._v(" "),a("h4",{attrs:{id:"b-树-即二叉搜索树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b-树-即二叉搜索树"}},[t._v("#")]),t._v(" B 树 "),a("code",[t._v("即二叉搜索树")])]),t._v(" "),a("center",[a("img",{staticStyle:{display:"left"},attrs:{src:t.$withBase("/db/mysql/mysql-03.jpg"),alt:"foo"}})]),t._v(" "),a("ol",[a("li",[t._v("所有非叶子结点至多拥有两个儿子（Left和Right)")]),t._v(" "),a("li",[t._v("所有结点存储一个关键字；")]),t._v(" "),a("li",[t._v("非叶子结点的左指针指向小于其关键字的子树，右指针指向大于其关键字的子树；\n"),a("center",[a("img",{attrs:{src:t.$withBase("/db/mysql/mysql-04.jpg"),alt:"foo"}})])],1)]),t._v(" "),a("p",[t._v("B树的搜索，从根结点开始，如果查询的关键字与结点的关键字相等，那么就命中；否则，如果查询关键字比结点关键字小，就进入左儿子；如果比结点关键字大，就进入右儿子；如果左儿子或右儿子的指针为空，则报告找不到相应的关键字；")]),t._v(" "),a("p",[t._v("如果B树的所有非叶子结点的左右子树的结点数目均保持差不多（平衡），那么B树的搜索性能逼近二分查找；但它比连续内存空间的二分查找的优点是，改变B树结构（插入与删除结点）不需要移动大段的内存数据，甚至通常是常数开销；")]),t._v(" "),a("center",[a("img",{attrs:{src:t.$withBase("/db/mysql/mysql-05.jpg"),alt:"foo"}}),t._v(" "),a("p",[t._v(" 但B树在经过多次插入与删除后，有可能导致不同的结构")])]),t._v(" "),a("p",[t._v("右边也是一个B树，但它的搜索性能已经是线性的了；同样的关键字集合有可能导致不同的树结构索引；所以，使用B树还要考虑尽可能让B树保持左图的结构，和避免右图的结构，也就是所谓的“平衡”问题；"),a("br"),t._v("\n实际使用的B树都是在原B树的基础上加上平衡算法，即“平衡二叉树”；如何保持B树结点分布均匀的平衡算法是平衡二叉树的关键；平衡算法是一种在B树中插入和删除结点的策略；")]),t._v(" "),a("h4",{attrs:{id:"b-tree-一种多路搜索树（并不是二叉的）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b-tree-一种多路搜索树（并不是二叉的）"}},[t._v("#")]),t._v(" B- Tree "),a("code",[t._v("一种多路搜索树（并不是二叉的）")])]),t._v(" "),a("center",[a("img",{attrs:{src:t.$withBase("/db/mysql/mysql-06.jpg"),alt:"foo"}})]),t._v(" "),a("p",[t._v("B-树的搜索，从根结点开始，对结点内的关键字（有序）序列进行二分查找，如果命中则结束，否则进入查询关键字所属范围的儿子结点；重复，直到所对应的儿子指针为空，或已经是叶子结点;")]),t._v(" "),a("ol",[a("li",[t._v("关键字集合分布在整颗树中；")]),t._v(" "),a("li",[t._v("任何一个关键字出现且只出现在一个结点中；")]),t._v(" "),a("li",[t._v("搜索有可能在非叶子结点结束；")]),t._v(" "),a("li",[t._v("其搜索性能等价于在关键字全集内做一次二分查找；")]),t._v(" "),a("li",[t._v("自动层次控制；")])]),t._v(" "),a("p",[t._v("由于B-Tree的特性，在B-Tree中按key检索数据的算法非常直观："),a("strong",[t._v("首先从根节点进行二分查找，如果找到则返回对应节点的data，否则对相应区间的指针指向的节点递归进行查找，直到找到节点或找到null指针，前者查找成功，后者查找失败")])]),t._v(" "),a("h4",{attrs:{id:"b-tree-b-树的变体，也是一种多路搜索树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b-tree-b-树的变体，也是一种多路搜索树"}},[t._v("#")]),t._v(" B+ Tree "),a("code",[t._v("B-树的变体，也是一种多路搜索树")])]),t._v(" "),a("center",[a("img",{attrs:{src:t.$withBase("/db/mysql/mysql-07.jpg"),alt:"foo"}})]),t._v(" "),a("p",[t._v("B+的搜索与B-树也基本相同，区别是B+树只有达到叶子结点才命中（B-树可以在非叶子结点命中），其性能也等价于在关键字全集做一次二分查找")]),t._v(" "),a("ol",[a("li",[t._v("其定义基本与B-树同，除了：")]),t._v(" "),a("li",[t._v("非叶子结点的子树指针与关键字个数相同；")]),t._v(" "),a("li",[t._v("非叶子结点的子树指针P[i]，指向关键字值属于[K[i], K[i+1])的子树（B-树是开区间）；")]),t._v(" "),a("li",[t._v("为所有叶子结点增加一个链指针；")]),t._v(" "),a("li",[t._v("所有关键字都在叶子结点出现；")])]),t._v(" "),a("p",[t._v("一般来说，索引本身也很大，不可能全部存储在内存中，因此索引往往以索引文件的形式存储的磁盘上。这样的话，索引查找过程中就要产生磁盘I/O消耗，相对于内存存取，I/O存取的消耗要高几个数量级，所以评价一个数据结构作为索引的优劣最重要的指标就是在查找过程中磁盘I/O操作次数的渐进复杂度。换句话说，索引的结构组织要尽量减少查找过程中磁盘I/O的存取次数。")]),t._v(" "),a("h3",{attrs:{id:"磁盘存取原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#磁盘存取原理"}},[t._v("#")]),t._v(" 磁盘存取原理")]),t._v(" "),a("div",{staticStyle:{float:"left"}},[a("img",{attrs:{src:t.$withBase("/db/mysql/mysql-02.jpg"),alt:"foo"}})]),t._v(" "),a("p",[t._v("一个磁盘由大小相同且同轴的圆形盘片组成，磁盘可以转动（各个磁盘必须同步转动）。在磁盘的一侧有磁头支架，磁头支架固定了一组磁头，每个磁头负责存取一个磁盘的内容。磁头不能转动，但是可以沿磁盘半径方向运动（实际是斜切向运动），每个磁头同一时刻也必须是同轴的，即从正上方向下看，所有磁头任何时候都是重叠的（不过目前已经有多磁头独立技术，可不受此限制）。")]),t._v(" "),a("p",[t._v("盘片被划分成一系列同心环，圆心是盘片中心，每个同心环叫做一个磁道，所有半径相同的磁道组成一个柱面。磁道被沿半径线划分成一个个小的段，每个段叫做一个扇区，每个扇区是磁盘的最小存\n储单元。")]),t._v(" "),a("p",[t._v("当需要从磁盘读取数据时，系统会将数据逻辑地址传给磁盘，磁盘的控制电路按照寻址逻辑将逻辑地址翻译成物理地址，即确定要读的数据在哪个磁道，哪个扇区。为了读取这个扇区的数据，需要将磁头放到这个扇区上方，为了实现这一点，磁头需要移动对准相应磁道，这个过程叫做寻道，所耗费时间叫做"),a("strong",[t._v("寻道时间")]),t._v("，然后磁盘旋转将目标扇区旋转到磁头下，这个过程耗费的时间叫做"),a("strong",[t._v("旋转时间")]),t._v("。")]),t._v(" "),a("p",[t._v("局部性原理与磁盘预读\n由于存储介质的特性，磁盘本身存取就比主存慢很多，再加上机械运动耗费，磁盘的存取速度往往是主存的几百分分之一，因此为了提高效率，要尽量减少磁盘I/O。为了达到这个目的，磁盘往往不是严格按需读取，而是每次都会预读，即使只需要一个字节，磁盘也会从这个位置开始，顺序向后读取一定长度的数据放入内存。")]),t._v(" "),a("p",[t._v("这样做的理论依据是计算机科学中著名的"),a("strong",[t._v("局部性原理")]),t._v("：当一个数据被用到时，其附近的数据也通常会马上被使用。\n程序运行期间所需要的数据通常比较集中。")]),t._v(" "),a("p",[t._v("由于磁盘顺序读取的效率很高（不需要寻道时间，只需很少的旋转时间），因此对于具有局部性的程序来说，预读可以提高I/O效率。")]),t._v(" "),a("p",[t._v("预读的长度一般为页（page）的整倍数。页是计算机管理存储器的逻辑块，硬件及操作系统往往将主存和磁盘存储区分割为连续的大小相等的块，每个存储块称为一页（在许多操作系统中，页得大小通常为4k），主存和磁盘以页为单位交换数据。当程序要读取的数据不在主存中时，会触发一个缺页异常，此时系统会向磁盘发出读盘信号，磁盘会找到数据的起始位置并向后连续读取一页或几页载入内存中，然后异常返回，程序继续运行。")]),t._v(" "),a("h3",{attrs:{id:"b-tree索引的性能分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b-tree索引的性能分析"}},[t._v("#")]),t._v(" B-/+Tree索引的性能分析")]),t._v(" "),a("p",[t._v("根据B-Tree的定义，可知检索一次最多需要访问h个节点。数据库系统的设计者巧妙利用了磁盘预读原理，将一个节点的大小设为等于一个页，这样每个节点只需要一次I/O就可以完全载入。为了达到这个目的，在实际实现B-Tree还需要使用如下技巧：\n每次新建节点时，直接申请一个页的空间，这样就保证一个节点物理上也存储在一个页里，加之计算机存储分配都是按页对齐的，就实现了一个node只需一次I/O。\nB-Tree中一次检索最多需要h-1次I/O（根节点常驻内存），渐进复杂度为"),a("code",[t._v("O(h)=O(logdN)")]),t._v("。一般实际应用中，出度d是非常大的数字，通常超过100，因此h非常小（通常不超过3）。\n综上所述，用B-Tree作为索引结构效率是非常高的。而红黑树这种结构，h明显要深的多。由于逻辑上很近的节点（父子）物理上可能很远，无法利用局部性，所以红黑树的I/O渐进复杂度也为O(h)，效率明显比B-Tree差很多。")]),t._v(" "),a("p",[t._v("B+Tree更适合外存索引，原因和内节点出度d有关。从上面分析可以看到，d越大索引的性能越好，而出度的上限取决于节点内key和data的大小")]),t._v(" "),a("h2",{attrs:{id:"锁机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#锁机制"}},[t._v("#")]),t._v(" 锁机制")]),t._v(" "),a("h2",{attrs:{id:"隔离级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隔离级别"}},[t._v("#")]),t._v(" 隔离级别")]),t._v(" "),a("h2",{attrs:{id:"mvcc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvcc"}},[t._v("#")]),t._v(" MVCC")]),t._v(" "),a("h2",{attrs:{id:"innodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#innodb"}},[t._v("#")]),t._v(" InnoDB")]),t._v(" "),a("h2",{attrs:{id:"explain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explain"}},[t._v("#")]),t._v(" Explain")]),t._v(" "),a("h3",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("ul",[a("li",[a("strong",[a("a",{attrs:{href:"http://blog.codinglabs.org/articles/theory-of-mysql-index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL索引的数据结构以及算法原理"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("strong",[a("a",{attrs:{href:"https://blog.csdn.net/codingtu/article/details/84038530",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL基本原理和使用技巧"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("strong",[a("a",{attrs:{href:"http://dev.mysql.com/doc/refman/5.1/zh/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL5.1参考手册"),a("OutboundLink")],1)])])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);