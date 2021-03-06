# リスコフの置換原則
> **LSP (Liskov Substitution Principle)**  
> 派生型はその基底型と置換可能でなければならない

子クラスは親クラスの性質を引き継がなければいけません。例えば子クラスで以下のような実装を行ってはいけません。

- 親クラスで定義しているフィールドを使用していない
- 親クラスのメソッドを全く別の処理に書き換えている

LSPに違反したクラスが存在すると、そのクラスを利用する側で以下のような問題が発生します。

- どの子クラスを使うか気にしなければいけない
- 子クラスの実装を知らなければいけない
- その子クラスに強く結合する
  - [OCP (Open-Closed Principle)](OCP.md)にも同時に違反する

::: tip NOTE
:pencil2: **子クラスは親クラスの性質を引き継ぐ**
:::
