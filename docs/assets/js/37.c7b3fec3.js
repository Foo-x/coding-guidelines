(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{319:function(v,t,_){"use strict";_.r(t);var s=_(14),a=Object(s.a)({},(function(){var v=this,t=v._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"コナーセンス"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#コナーセンス"}},[v._v("#")]),v._v(" コナーセンス")]),v._v(" "),t("p",[v._v("コナーセンスの強度を弱く、程度を小さく、局所性を小さくしましょう。コナーセンスとは、モジュール間の結合を強度、程度、局所性の3つの軸で分類する方法です。"),t("br"),v._v("\n処理によっては強いコナーセンスにせざるを得ない場合がありますが、その場合は程度を小さくしたり、局所性を小さくしたりしましょう。また、パッケージの分割などで局所性が大きくなる場合は、強度を弱くしたり程度を小さくしたりしましょう。変更の影響範囲を小さくすることができます。")]),v._v(" "),t("h2",{attrs:{id:"強度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#強度"}},[v._v("#")]),v._v(" 強度")]),v._v(" "),t("p",[v._v("コナーセンスの強度とは、モジュール間の結合の強さの度合いです。")]),v._v(" "),t("p",[v._v("以下の種類があります。上のものほど弱いコナーセンスです。")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("名前のコナーセンス (Connascence of Name)")]),v._v(" "),t("ul",[t("li",[v._v("モジュール同士が同じ名前に依存するコナーセンス")]),v._v(" "),t("li",[v._v("変数名やメソッド名など")])])]),v._v(" "),t("li",[t("strong",[v._v("型のコナーセンス (Connascence of Type)")]),v._v(" "),t("ul",[t("li",[v._v("モジュール同士が同じ型に依存するコナーセンス")]),v._v(" "),t("li",[v._v("動的型付け言語で型を指定していない場合など\n"),t("ul",[t("li",[v._v("型を指定すると名前のコナーセンスになります")])])])])]),v._v(" "),t("li",[t("strong",[v._v("意味のコナーセンス (Connascence of Meaning)")]),v._v(" "),t("ul",[t("li",[v._v("モジュール同士が同じ値の意味に依存するコナーセンス")]),v._v(" "),t("li",[v._v("マジックバリュー、例外時の汎用エラー型やnull、特定の概念を表すプリミティブ型の値など")]),v._v(" "),t("li",[v._v("定数にしたり専用の型にすると名前のコナーセンスになります")])])]),v._v(" "),t("li",[t("strong",[v._v("位置のコナーセンス (Connascence of Position)")]),v._v(" "),t("ul",[t("li",[v._v("モジュール同士が同じ値の順序に依存するコナーセンス")]),v._v(" "),t("li",[v._v("リスト内の値の順序や関数の引数の順序など")]),v._v(" "),t("li",[v._v("構造体にすると名前のコナーセンスになります")])])]),v._v(" "),t("li",[t("strong",[v._v("アルゴリズムのコナーセンス (Connascence of Algorithm)")]),v._v(" "),t("ul",[t("li",[v._v("モジュール同士が同じアルゴリズムに依存するコナーセンス")]),v._v(" "),t("li",[v._v("暗号化と復号、エンコードとデコード、バリデーションルールなど")])])]),v._v(" "),t("li",[t("strong",[v._v("実行のコナーセンス (Connascence of Execution)")]),v._v(" "),t("ul",[t("li",[v._v("モジュール同士が同じ実行の順序に依存するコナーセンス")]),v._v(" "),t("li",[v._v("特定の状態のときにのみ実行できる関数や、先にファイルを開く関数を実行する必要がある関数など")])])]),v._v(" "),t("li",[t("strong",[v._v("タイミングのコナーセンス (Connascence of Timing)")]),v._v(" "),t("ul",[t("li",[v._v("モジュール同士が処理の実行タイミングに依存するコナーセンス")]),v._v(" "),t("li",[v._v("特定の時刻に実行される処理など")])])]),v._v(" "),t("li",[t("strong",[v._v("値のコナーセンス (Connascence of Values)")]),v._v(" "),t("ul",[t("li",[v._v("モジュール同士がそれぞれの値を同時に変更させる必要があるコナーセンス")]),v._v(" "),t("li",[v._v("複数のモジュールが同じマジックバリューや初期値をそれぞれ持っている場合など")]),v._v(" "),t("li",[v._v("共通の定数にすると名前のコナーセンスになります")])])]),v._v(" "),t("li",[t("strong",[v._v("同一性のコナーセンス (Connascence of Identity)")]),v._v(" "),t("ul",[t("li",[v._v("モジュール同士が同じインスタンスに依存するコナーセンス")]),v._v(" "),t("li",[v._v("DBコネクションやシングルトンなど")])])])]),v._v(" "),t("h2",{attrs:{id:"程度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#程度"}},[v._v("#")]),v._v(" 程度")]),v._v(" "),t("p",[v._v("コナーセンスの程度とは、結合しているモジュールの数の多さです。")]),v._v(" "),t("h2",{attrs:{id:"局所性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#局所性"}},[v._v("#")]),v._v(" 局所性")]),v._v(" "),t("p",[v._v("コナーセンスの局所性とは、結合しているモジュールの位置の近さです。たとえば同じパッケージ内、ディレクトリ内、ファイル内などによってそれぞれ局所性が異なります。")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("NOTE")]),v._v(" "),t("p",[t("img",{staticClass:"emoji",attrs:{draggable:"false",alt:"✏️",src:"https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/270f.svg"}}),v._v(" "),t("strong",[v._v("コナーセンスの強度を弱く、程度を小さく、局所性を小さくする")])])]),v._v(" "),t("h2",{attrs:{id:"関連"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#関連"}},[v._v("#")]),v._v(" 関連")]),v._v(" "),t("h3",{attrs:{id:"凝集度-結合度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#凝集度-結合度"}},[v._v("#")]),v._v(" "),t("RouterLink",{attrs:{to:"/architecture/cohesion.html"}},[v._v("凝集度")]),v._v(" / "),t("RouterLink",{attrs:{to:"/architecture/coupling.html"}},[v._v("結合度")])],1),v._v(" "),t("p",[v._v("コナーセンスの強度を弱くすると凝集度が高くなったり結合度が低くなったりします。")])])}),[],!1,null,null,null);t.default=a.exports}}]);