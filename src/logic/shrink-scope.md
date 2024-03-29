# スコープの縮小

すべてのスコープを小さくしましょう。スコープが小さいことで同時に意識しなければいけないものが減り、理解しやすくなります。基本的な考え方は「その変数にアクセスできる行数を1行でも少なくする」ことです。

## アクセス修飾子

スコープが小さいものから順に考え、必要以上に公開しないようにします。TypeScriptであれば `private` からです。特に `public` は慎重につけましょう。

## 宣言の位置

変数は使う直前に宣言します。1行でもスコープを小さくしましょう。また、`if` 文や `for` 文の中でしか使わない変数はそのブロック内で宣言しましょう。

## モジュール・クラス・関数の分割

適切な単位でモジュール・クラス・関数を分けます。分けられた中で変数を宣言することで、スコープを小さくすることができます。

::: tip NOTE
:pencil2: **スコープを縮小する**
:::
