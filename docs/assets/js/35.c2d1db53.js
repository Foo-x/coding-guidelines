(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{315:function(t,v,_){"use strict";_.r(v);var l=_(14),e=Object(l.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"clean-architecture"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#clean-architecture"}},[t._v("#")]),t._v(" Clean Architecture")]),t._v(" "),v("p",[t._v("抽象度に応じてレイヤーを分けて、より具体的なレイヤーからより抽象的なレイヤーに対する依存のみにしましょう。これによって最も抽象的なビジネスルールが、UI、データベース、フレームワークなどの変更に影響を受けなくなります。つまり、UI、データベース、フレームワークなどを気軽に変更できるようになります。")]),t._v(" "),v("p",[t._v("このルールをアーキテクチャとして命名したものが "),v("strong",[t._v("Clean Architecture")]),t._v(" です。次の4つのレイヤーに分けるパターンが有名です。")]),t._v(" "),v("ol",[v("li",[t._v("Enterprise Business Rules\n"),v("ul",[v("li",[t._v("ドメイン固有のルールを扱う")]),t._v(" "),v("li",[t._v("最も抽象的な層")])])]),t._v(" "),v("li",[t._v("Application Business Rules\n"),v("ul",[v("li",[t._v("アプリ固有のルールを扱う")]),t._v(" "),v("li",[t._v("Entitiesを組み合わせて問題を解決する層")]),t._v(" "),v("li",[t._v("以下のインターフェースを持つ\n"),v("ul",[v("li",[t._v("ゲートウェイ\n"),v("ul",[v("li",[t._v("Web API との入出力を扱う")])])]),t._v(" "),v("li",[t._v("リポジトリ\n"),v("ul",[v("li",[t._v("DBとの入出力を扱う")])])])])])])]),t._v(" "),v("li",[t._v("Interface Adapters\n"),v("ul",[v("li",[t._v("外部とのやりとりを扱う")]),t._v(" "),v("li",[t._v("内部のデータを外部用に変換したり、その逆を行う層")]),t._v(" "),v("li",[t._v("要素の例\n"),v("ul",[v("li",[t._v("コントローラ\n"),v("ul",[v("li",[t._v("外部からの入力をハンドリングする")])])]),t._v(" "),v("li",[t._v("プレゼンター\n"),v("ul",[v("li",[t._v("外部への出力を整形する")])])]),t._v(" "),v("li",[t._v("ゲートウェイ、リポジトリの実装クラス")])])])])]),t._v(" "),v("li",[t._v("Frameworks & Drivers\n"),v("ul",[v("li",[t._v("外部での処理を扱う")]),t._v(" "),v("li",[t._v("最も具体的な層")]),t._v(" "),v("li",[t._v("外部の例\n"),v("ul",[v("li",[t._v("フレームワーク")]),t._v(" "),v("li",[t._v("DBドライバ")]),t._v(" "),v("li",[t._v("Web API")]),t._v(" "),v("li",[t._v("ファイルシステム")]),t._v(" "),v("li",[t._v("UI")])])])])])]),t._v(" "),v("p",[t._v("前述したとおり、重要なのは依存を単方向にすることです。レイヤーの数は規模に応じて増減します。")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),v("p",[v("img",{staticClass:"emoji",attrs:{draggable:"false",alt:"✏️",src:"https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/270f.svg"}}),t._v(" "),v("strong",[t._v("具体的な層から抽象的な層に対してのみ依存する")])])]),t._v(" "),v("h2",{attrs:{id:"関連"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#関連"}},[t._v("#")]),t._v(" 関連")]),t._v(" "),v("h3",{attrs:{id:"安定依存の原則-安定度・抽象度等価の原則"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安定依存の原則-安定度・抽象度等価の原則"}},[t._v("#")]),t._v(" "),v("RouterLink",{attrs:{to:"/architecture/SDP.html"}},[t._v("安定依存の原則")]),t._v(" / "),v("RouterLink",{attrs:{to:"/architecture/SAP.html"}},[t._v("安定度・抽象度等価の原則")])],1),t._v(" "),v("p",[t._v("Clean Architecture は安定依存の原則と安定度・抽象度等価の原則をアーキテクチャにしたものです。")]),t._v(" "),v("h3",{attrs:{id:"依存関係逆転の原則"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#依存関係逆転の原則"}},[t._v("#")]),t._v(" "),v("RouterLink",{attrs:{to:"/architecture/DIP.html"}},[t._v("依存関係逆転の原則")])],1),t._v(" "),v("p",[t._v("Clean Architecture を実現するには依存関係を逆転させる必要があります。")])])}),[],!1,null,null,null);v.default=e.exports}}]);