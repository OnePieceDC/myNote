(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1101:function(t,e,i){"use strict";i(338)},1113:function(t,e,i){"use strict";i.r(e);var n={data:()=>({mdFileCount:0,totalWords:0}),mounted(){this.mountedWebInfo(".tags-wrapper");const{mdFileCount:t,totalWords:e}=this.$themeConfig.blogInfo;this.mdFileCount=t,this.totalWords=e},beforeMount(){let t=document.querySelector(".web-info");t&&t.parentNode.removeChild(t)},methods:{mountedWebInfo(t=".tags-wrapper"){let e=setInterval(()=>{const i=document.querySelector(t);let n;n=null===i?document.querySelector(".categories-wrapper"):i;const o=document.querySelector(".web-info");n&&o&&(this.isSiblilngNode(n,o)||(n.parentNode.insertBefore(o,n.nextSibling),clearInterval(e)))},200)},isSiblilngNode:(t,e)=>t.siblingNode===e}},o=(i(1101),i(0)),s=Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"web-info card-box"},[t._m(0),t._v(" "),i("div",{staticClass:"webinfo-item"},[i("div",{staticClass:"webinfo-item-title"},[t._v("文章数目：")]),t._v(" "),i("div",{staticClass:"webinfo-content"},[t._v(t._s(t.mdFileCount)+" 篇")])]),t._v(" "),i("div",{staticClass:"webinfo-item"},[i("div",{staticClass:"webinfo-item-title"},[t._v("本站总字数：")]),t._v(" "),i("div",{staticClass:"webinfo-content"},[t._v(t._s(t.totalWords)+" 字")])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"webinfo-title"},[e("i",{staticClass:"iconfont icon-award",staticStyle:{"font-size":"0.875rem","font-weight":"900",width:"1.25em"}}),this._v(" "),e("span",[this._v("站点信息")])])}],!1,null,"19c9cf92",null);e.default=s.exports},338:function(t,e,i){}}]);