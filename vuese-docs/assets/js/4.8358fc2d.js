(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{248:function(e,t,n){},271:function(e,t,n){"use strict";var o=n(248);n.n(o).a},273:function(e,t,n){"use strict";n.r(t);n(140),n(29);var o=[{lang:"zh-CN","demo-block":{"hide-text":"隐藏代码","show-text":"显示代码","button-text":"在线运行","tooltip-text":"前往 jsfiddle.net 运行此示例"}}],s={name:"demo-block",data:function(){return{hovering:!1,isExpanded:!1,fixedControl:!1,scrollParent:null}},methods:{scrollHandler:function(){var e=this.$refs.meta.getBoundingClientRect(),t=e.top,n=e.bottom,o=e.left;this.fixedControl=n>document.documentElement.clientHeight&&t+44<=document.documentElement.clientHeight,this.$refs.control.style.left=this.fixedControl?"".concat(o,"px"):"0"},removeScrollHandler:function(){this.scrollParent&&this.scrollParent.removeEventListener("scroll",this.scrollHandler)}},computed:{lang:function(){return"zh-CN"},langConfig:function(){var e=this;return o.filter(function(t){return t.lang===e.lang})[0]["demo-block"]},blockClass:function(){return"".concat(this.$slots.source[0].tag," demo-").concat(this.lang," demo-").concat(this.$router.currentRoute.path.split("/").pop())},iconClass:function(){return this.isExpanded?"caret-top":"caret-bottom"},controlText:function(){return this.isExpanded?this.langConfig["hide-text"]:this.langConfig["show-text"]},codeArea:function(){return this.$el.getElementsByClassName("meta")[0]},codeAreaHeight:function(){return this.$el.getElementsByClassName("description").length>0?this.$el.getElementsByClassName("description")[0].clientHeight+this.$el.getElementsByClassName("code")[0].clientHeight+20:this.$el.getElementsByClassName("code")[0].clientHeight}},watch:{isExpanded:function(e){var t=this;if(this.codeArea.style.height=e?"".concat(this.codeAreaHeight+1,"px"):"0",!e)return this.fixedControl=!1,this.$refs.control.style.left="0",void this.removeScrollHandler();setTimeout(function(){t.scrollParent=document.querySelector(".page-component__scroll > .el-scrollbar__wrap"),t.scrollParent&&t.scrollParent.addEventListener("scroll",t.scrollHandler),t.scrollHandler()},200)}},mounted:function(){var e=this;this.$nextTick(function(){var t=e.$el.getElementsByClassName("code")[0];0===e.$el.getElementsByClassName("description").length&&(t.style.width="100%",t.borderRight="none")})},beforeDestroy:function(){this.removeScrollHandler()}},l=(n(271),n(12)),i=Object(l.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-block",class:[e.blockClass,{hover:e.hovering}],on:{mouseenter:function(t){e.hovering=!0},mouseleave:function(t){e.hovering=!1}}},[n("div",{staticClass:"source"},[e._t("source")],2),e._v(" "),n("div",{ref:"meta",staticClass:"meta"},[e.$slots.default?n("div",{staticClass:"description"},[e._t("default")],2):e._e(),e._v(" "),n("div",{staticClass:"code"},[e._t("code")],2)]),e._v(" "),n("div",{ref:"control",staticClass:"demo-block-control",class:{"is-fixed":e.fixedControl},on:{click:function(t){e.isExpanded=!e.isExpanded}}},[n("transition",{attrs:{name:"arrow-slide"}},[n("i",{class:[e.iconClass,{hovering:e.hovering}]})]),e._v(" "),n("transition",{attrs:{name:"text-slide"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.hovering,expression:"hovering"}]},[e._v(e._s(e.controlText))])])],1)])},[],!1,null,null,null);t.default=i.exports}}]);