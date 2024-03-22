(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{1231:function(v,_,t){"use strict";t.r(_);var r=t(0),e=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("blockquote",[t("p",[v._v("数据库管理软件的“读现象”指的是当多个事务 "),t("strong",[v._v("并发")]),v._v(" 执行时, 在读取数据方面可能碰到的问题, 包括有脏读、不可重复读和幻读。(换个说法: 读现象是数据库在高并发的场景下,多个同时执行的事务带来的影响..)")]),v._v(" "),t("p",[v._v("一些数据库管理软件会自带相应的机制去解决脏读、不可重复读、幻读等问题."),t("br"),v._v("\n即我们在实际操作中不会遇到这些问题."),t("br"),v._v("\n所以接下来的一系列举例只是为了理解, mysql底层没有解决,会是什么样子的..")])]),v._v(" "),t("hr"),v._v(" "),t("h2",{attrs:{id:"脏读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#脏读"}},[v._v("#")]),v._v(" 脏读")]),v._v(" "),t("blockquote",[t("p",[v._v("AB并发执行, 事务B改完数据后没有提交,在A读取这条数据后,事务B回滚,事务A刚读到的这条数据是无效数据(脏数据)...")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("事务A")]),v._v(" "),t("th",[v._v("事务B")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[t("code",[v._v("SELECT age FROM users WHERE id = 1;")]),v._v(" "),t("br"),v._v("/*  will read 20 */   读到值为20")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[t("code",[v._v("UPDATE users SET age = 21 WHERE id = 1;")]),v._v(" "),t("br"),v._v("/* No commit here */   修改值为21后 没有提交事务")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("SELECT age FROM users WHERE id = 1;")]),t("br"),v._v(" /* will read 21 */  读到值为21, (真实情况下只会读到20, 隔离性)")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[t("code",[v._v("ROLLBACK;")]),v._v(" 回滚, 事务A读到的数据就是脏数据")])])])]),v._v(" "),t("hr"),v._v(" "),t("h2",{attrs:{id:"不可重复读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不可重复读"}},[v._v("#")]),v._v(" 不可重复读")]),v._v(" "),t("blockquote",[t("p",[v._v("事务A读取一行记录, 紧接着事务B修改了A刚才读取的那一行记录并且提交了。"),t("br"),v._v("\n然后A又再次读取这行记录, 发现与刚才读取的结果不同。这就称为“不可重复”读, 因为A原来读取的那行记录已经发生了变化。")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("事务A")]),v._v(" "),t("th",[v._v("事务B")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[t("code",[v._v("SELECT * FROM users WHERE id = 1;")]),v._v(" "),t("br"),v._v("/*  will read 20 */  读到的值为20")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td",[t("code",[v._v("UPDATE users SET age = 21 WHERE id = 1;")]),v._v(" "),t("code",[v._v("COMMIT;")]),v._v(" "),t("br"),v._v("把值变成了21 并且提交了")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("SELECT * FROM users WHERE id = 1;")]),v._v(" "),t("code",[v._v("COMMIT;")]),v._v(" "),t("br"),v._v("再读, 发现读到的值为21了,前后读到的值不一致"),t("br"),v._v("(真实情况下读到的应该是20,隔离性）")]),v._v(" "),t("td")])])]),v._v(" "),t("hr"),v._v(" "),t("h2",{attrs:{id:"幻读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#幻读"}},[v._v("#")]),v._v(" 幻读")]),v._v(" "),t("blockquote",[t("p",[v._v("不可重复读的一种特殊现象"),t("br"),v._v("\n事务A更改或者查询了数据,在极短的时间内,事务B又插入可一条新的数据,导致事务A在接下来的查询中,就会发现有几列数据是它先前所没有的..")])]),v._v(" "),t("p",[v._v("举个例子：事务A将id>3的记录进行了修改并提交.事务A执行完后立刻验证结果.(在那查询的那一刻！事务B凑巧新插入了一条记录并提交.) 就会发现有一条记录没有修改成功... 就跟特喵做梦一样Hhhh..")]),v._v(" "),t("hr"),v._v(" "),t("p",[v._v("数据库会并发执行多个事务, 多个事务可能会并发地对缓存页里的同一批数据进行增删改查操作, 就可能出现脏读、不可重复读、幻读等现象...")]),v._v(" "),t("p",[v._v("数据库设计了"),t("strong",[v._v("锁机制")]),v._v("、"),t("strong",[v._v("事务隔离机制")]),v._v("、"),t("strong",[v._v("MVCC")]),v._v(" 多版本隔离机制, 用一整套机制来解决多事务并发问题"),t("br"),v._v("\n(双刃剑 加锁安全了 但效率也会降低..)")])])}),[],!1,null,null,null);_.default=e.exports}}]);