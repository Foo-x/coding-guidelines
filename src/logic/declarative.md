# 宣言型

プログラムはできるだけ「命令型」よりも「**宣言型**」で書きましょう。

## 命令型

問題の「解法」を記述します。(**HOW**)

```ts
// textから#で始まる行以外を出力

for (const line of text.split("\n")) {
  if (line.startsWith("#")) {
    continue;
  }
  console.log(line);
}
```

## 宣言型

問題の「定義」を記述します。(**WHAT**)

```ts
text.split("\n")
  .filter(line => !line.startsWith("#"))
  .forEach(line => {
    console.log(line);
  });
```

宣言型で書くメリットは以下です。

- ifによる分岐やforによるループがないため理解しやすい
- 各処理が役割ごとに分かれているので理解しやすい
  - 修正の影響範囲も小さくて済む

一方命令型では処理の詳細を記述するため、環境に合わせてパフォーマンスが良いコードを書けるというメリットがあります。[早すぎる最適化](premature-optimization.md) はNGのため基本的には宣言型で書くべきですが、状況に応じて使い分けましょう。

::: tip NOTE
:pencil2: **なるべく宣言型で書く**
:::
