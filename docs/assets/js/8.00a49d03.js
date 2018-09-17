(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{177:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("モジュール間の依存関係をなくし、間にインターフェースを挟みましょう。上位モジュールが下位モジュールに依存してしまうと、下位モジュールの変更が上位モジュールに伝搬してしまいます。")]),t._v(" "),n("p",[t._v("また、そのインターフェースは上位モジュール側に持ちましょう。詳細を扱う下位モジュールよりも上位モジュールのほうが一般的に安定しているためです。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),n("p",[t._v("DIPを適用すべきでないケースがいくつかあります。")]),t._v(" "),t._m(9),t._v(" "),n("p",[t._v("依存関係を逆転させる目的は、下位モジュールの変更を上位モジュールに伝搬させないためです。下位モジュールに変更が発生しないのであれば適用する必要はありません。")]),t._v(" "),t._m(10),t._v(" "),n("p",[t._v("下位モジュールが複数のモジュールから利用される場合、特定の上位モジュールに定義したインターフェースに依存することはできません。その場合は一度下位モジュールで定義したインターフェースを変更しないようにしましょう。")]),t._v(" "),t._m(11),t._v(" "),n("h3",{attrs:{id:"ocp-open-closed-principle"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ocp-open-closed-principle","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("router-link",{attrs:{to:"./OCP.html"}},[t._v("OCP (Open-Closed Principle)")])],1),t._v(" "),n("p",[t._v("目的を実現する手段が同じです。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"dip-dependency-inversion-principle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dip-dependency-inversion-principle","aria-hidden":"true"}},[this._v("#")]),this._v(" DIP (Dependency Inversion Principle)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("依存関係逆転の原則"),s("br"),this._v("\n上位のモジュールは下位のモジュールに依存してはならない。どちらのモジュールも抽象に依存すべきである")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"emoji",attrs:{draggable:"false",alt:"✏️",src:"https://twemoji.maxcdn.com/2/svg/270f.svg"}}),this._v(" "),s("strong",[this._v("下位モジュールが上位モジュールのインターフェースを実装する")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"依存性の注入-di-dependency-injection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依存性の注入-di-dependency-injection","aria-hidden":"true"}},[this._v("#")]),this._v(" 依存性の注入(DI: Dependency Injection)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("上位モジュールで使用する下位モジュールのインスタンスは"),s("strong",[this._v("依存性の注入")]),this._v("を行います。専用のライブラリもいくつかありますが、下のような方法もあります。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Main")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("main")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    IEngine engine "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Engine")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Application application "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Application")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("engine"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    application"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("startApplication")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[n("code",[t._v("Application")]),t._v("が上位モジュール、"),n("code",[t._v("Engine")]),t._v("が下位モジュール、"),n("code",[t._v("IEngine")]),t._v("が間のインターフェースです。ポイントは"),n("code",[t._v("Application")]),t._v("から"),n("code",[t._v("Engine")]),t._v("への依存がなく、"),n("code",[t._v("Application")]),t._v("と"),n("code",[t._v("Engine")]),t._v("がどちらも"),n("code",[t._v("IEngine")]),t._v("に依存していることです。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"emoji",attrs:{draggable:"false",alt:"✏️",src:"https://twemoji.maxcdn.com/2/svg/270f.svg"}}),this._v(" "),s("strong",[this._v("依存性の注入によって下位モジュールへの依存をなくす")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意","aria-hidden":"true"}},[this._v("#")]),this._v(" 注意")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("下位モジュールが安定している場合")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("下位モジュールが汎用的なモジュールの場合")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"関連"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#関連","aria-hidden":"true"}},[this._v("#")]),this._v(" 関連")])}],!1,null,null,null);e.options.__file="DIP.md";s.default=e.exports}}]);