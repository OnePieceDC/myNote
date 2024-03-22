(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{1322:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"基本展示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本展示"}},[t._v("#")]),t._v(" 基本展示")]),t._v(" "),n("blockquote",[n("p",[t._v("现目前, 管理员用户 可以看到所有的交易记录..  那么, 角色为客户的用户登陆后呢?也应该能看到自己的交易记录!!")])]),t._v(" "),n("p",[t._v("都是在前面实现过的功能, 改巴改巴集成到这里面即可..")]),t._v(" "),n("p",[n("img",{attrs:{src:a(890),alt:"image-20230417180118435"}})]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" 我的交易列表页面跟管理员登陆后"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("看到的 `首页"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("客户列表"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("交易记录列表` 是差不多的"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 改巴改巴能行"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n   相比之下"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("我的交易列表页面少了新增的功能"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("多了搜索查询"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("根据关键字搜索"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("的功能!!\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" 在管理员登陆后"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("看到的客户列表页面是实现过搜索查询"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("根据关键字搜索"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("功能的"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("也改巴改巴就行"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shortcuts "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" render\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" web "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" models\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" utils"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pager "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Pagination\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Q\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("my_transaction_list")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('""" 我的交易记录 """')]),t._v("\n    keyword "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GET"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"keyword"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strip"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    con "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Q"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" keyword"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只根据订单号搜")]),t._v("\n        con"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connector "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'OR'")]),t._v("\n        con"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'order_oid__contains'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" keyword"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    queryset "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TransactionRecord"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" \\\n        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("filter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("customer_id"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nb_user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" active"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" \\\n        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("filter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("con"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("order_by"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-id"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    pager "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Pagination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" queryset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" render"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my_transaction_list.html'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pager"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pager"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"keyword"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" keyword"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br")])]),n("hr"),t._v(" "),n("h2",{attrs:{id:"组合搜索组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组合搜索组件"}},[t._v("#")]),t._v(" 组合搜索组件")]),t._v(" "),n("blockquote",[n("p",[t._v("根据关键字搜索, 它在后端的逻辑是可以根据当前表中的字段、或者跨表字段的值来匹配搜索的值.."),n("br"),t._v('\n它是有局限性的, 针对于有choices属性的字段, 根据关键字搜索较麻烦, 因为像 "充值" 在数据库里存储的是1.'),n("br"),t._v('\n需要根据 "充值" 转变成条件 "1", 再根据 "1" 去搜索.. 所以用户在填写搜索关键字 "充值" 是不能写错的..')])]),t._v(" "),n("p",[t._v("使用组合搜索, 相对简便些!!")]),t._v(" "),n("h3",{attrs:{id:"简单使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简单使用"}},[t._v("#")]),t._v(" 简单使用")]),t._v(" "),n("blockquote",[n("p",[t._v("step1: 获取 group.py文件并放到项目中 (通常是utils目录).\nstep2: 在视图函数中配置\nstep3: 前端页面中配置")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(891),alt:"image-20230417190515171"}})]),t._v(" "),n("p",[n("strong",[t._v("视图函数中的代码")])]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shortcuts "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" render\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" web "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" models\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shortcuts "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" render\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" web "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" models\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" utils"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pager "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Pagination\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" utils"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("group "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Option"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" get_search_group_condition\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Q\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("my_transaction_list")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('""" 我的交易记录 """')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ◆ 组合搜索配置 - 页面展示")]),t._v("\n    search_group "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Option"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'charge_type'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    search_group_row_list "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" option_object "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" search_group"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        row "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" option_object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_queryset_or_tuple"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("models"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TransactionRecord"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        search_group_row_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("row"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ◆ 组合搜索配置 - 构建搜索条件")]),t._v("\n    conn "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" get_search_group_condition"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("search_group"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根据关键字搜索!")]),t._v("\n    keyword "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GET"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"keyword"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strip"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    con "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Q"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" keyword"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只根据订单号搜")]),t._v("\n        con"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connector "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'OR'")]),t._v("\n        con"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'order_oid__contains'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" keyword"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    queryset "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TransactionRecord"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" \\\n        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("filter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("customer_id"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nb_user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" active"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" \\\n        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("filter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("conn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" \\\n        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("filter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("con"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("order_by"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-id"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    pager "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Pagination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" queryset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    context "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pager"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pager"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"keyword"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" keyword"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"search_group_row_list"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" search_group_row_list\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" render"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my_transaction_list.html'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br")])]),n("p",[n("strong",[t._v("前端页面的关键代码")])]),t._v(" "),n("div",{staticClass:"language-Django line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-django"}},[n("code",[t._v("... ... ...\n"),n("span",{pre:!0,attrs:{class:"token django language-django"}},[n("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token tag keyword"}},[t._v("block")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("css")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),n("span",{pre:!0,attrs:{class:"token django language-django"}},[n("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token tag keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'css/search-group.css'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token django language-django"}},[n("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token tag keyword"}},[t._v("endblock")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token django language-django"}},[n("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token tag keyword"}},[t._v("block")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("content")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token django language-django"}},[n("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token tag keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("search_group_row_list")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 生成了一个面板 --\x3e")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("panel panel-default"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("panel-heading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fa fa-filter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("aria-hidden")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("i")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" 快速筛选\n            "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("panel-body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("search-group"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token django language-django"}},[n("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token tag keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("row")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("search_group_row_list")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),t._v("\n                        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("row"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                            "),n("span",{pre:!0,attrs:{class:"token django language-django"}},[n("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token tag keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("obj")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("row")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),t._v("\n                                "),n("span",{pre:!0,attrs:{class:"token django language-django"}},[n("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("obj")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),n("span",{pre:!0,attrs:{class:"token filter function"}},[t._v("safe")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v("\n                            "),n("span",{pre:!0,attrs:{class:"token django language-django"}},[n("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token tag keyword"}},[t._v("endfor")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),t._v("\n                        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token django language-django"}},[n("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token tag keyword"}},[t._v("endfor")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token django language-django"}},[n("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token tag keyword"}},[t._v("endif")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),t._v("\n    ... ... ...\n"),n("span",{pre:!0,attrs:{class:"token django language-django"}},[n("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token tag keyword"}},[t._v("endblock")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br")])]),n("h3",{attrs:{id:"封装和使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#封装和使用"}},[t._v("#")]),t._v(" 封装和使用")]),t._v(" "),n("blockquote",[n("p",[t._v("来细细剖析下, group.py 这个组合搜索组件 实现的细节!!!")])])])}),[],!1,null,null,null);s.default=e.exports},890:function(t,s,a){t.exports=a.p+"assets/img/image-20230417180118435.3f990361.png"},891:function(t,s,a){t.exports=a.p+"assets/img/image-20230417190515171.0c9f6ee9.png"}}]);