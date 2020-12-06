(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{437:function(t,s,a){"use strict";a.r(s);var n=a(51),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"依存関係逆転の原則"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依存関係逆転の原則"}},[t._v("#")]),t._v(" 依存関係逆転の原則")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("DIP (Dependency Inversion Principle)")]),a("br"),t._v("\n上位のモジュールは下位のモジュールに依存してはならない。どちらのモジュールも抽象に依存すべきである")])]),t._v(" "),a("p",[t._v("モジュール間の依存関係をなくし、間にインターフェースを挟みましょう。上位モジュールが下位モジュールに依存してしまうと、下位モジュールの変更が上位モジュールに伝搬してしまいます。")]),t._v(" "),a("p",[t._v("また、そのインターフェースは上位モジュール側に持ちましょう。詳細を扱う下位モジュールよりも上位モジュールのほうが一般的に安定しているためです。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[a("img",{staticClass:"emoji",attrs:{draggable:"false",alt:"✏️",src:"https://twemoji.maxcdn.com/2/svg/270f.svg"}}),t._v(" "),a("strong",[t._v("下位モジュールが上位モジュールのインターフェースを実装する")])])]),t._v(" "),a("h2",{attrs:{id:"依存性の注入-di-dependency-injection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依存性の注入-di-dependency-injection"}},[t._v("#")]),t._v(" 依存性の注入(DI: Dependency Injection)")]),t._v(" "),a("p",[t._v("上位モジュールで使用する下位モジュールのインスタンスは"),a("strong",[t._v("依存性の注入")]),t._v("を行います。専用のライブラリもいくつかありますが、下のような方法もあります。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Main")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IEngine")]),t._v(" engine "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Engine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Application")]),t._v(" application "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("startApplication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("Application")]),t._v("が上位モジュール、"),a("code",[t._v("Engine")]),t._v("が下位モジュール、"),a("code",[t._v("IEngine")]),t._v("が間のインターフェースです。ポイントは"),a("code",[t._v("Application")]),t._v("から"),a("code",[t._v("Engine")]),t._v("への依存がなく、"),a("code",[t._v("Application")]),t._v("と"),a("code",[t._v("Engine")]),t._v("がどちらも"),a("code",[t._v("IEngine")]),t._v("に依存していることです。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[a("img",{staticClass:"emoji",attrs:{draggable:"false",alt:"✏️",src:"https://twemoji.maxcdn.com/2/svg/270f.svg"}}),t._v(" "),a("strong",[t._v("依存性の注入によって下位モジュールへの依存をなくす")])])]),t._v(" "),a("h2",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),a("p",[t._v("DIPを適用すべきでないケースがいくつかあります。")]),t._v(" "),a("ul",[a("li",[t._v("下位モジュールが安定している場合")])]),t._v(" "),a("p",[t._v("依存関係を逆転させる目的は、下位モジュールの変更を上位モジュールに伝搬させないためです。下位モジュールに変更が発生しないのであれば適用する必要はありません。")]),t._v(" "),a("ul",[a("li",[t._v("下位モジュールが汎用的なモジュールの場合")])]),t._v(" "),a("p",[t._v("下位モジュールが複数のモジュールから利用される場合、特定の上位モジュールに定義したインターフェースに依存することはできません。その場合は一度下位モジュールで定義したインターフェースを変更しないようにしましょう。")])])}),[],!1,null,null,null);s.default=e.exports}}]);