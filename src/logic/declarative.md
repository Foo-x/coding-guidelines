# 宣言型
プログラムはできるだけ「命令型」よりも「**宣言型**」で書きましょう。

## 命令型
問題の「解法」を記述します。(**HOW**)

```java
// 九九をスペース区切りで各段ごとに改行して表示

for (int i = 1; i <= 9; i++) {
  for (int j = 1; j <= 9; j++) {
    System.out.print(i * j);

    if (j == 9)
      System.out.print(" ");

    else
      System.out.println();
  }
}
```

## 宣言型
問題の「定義」を記述します。(**WHAT**)

```java
IntStream.rangeClosed(1, 9)
  .map(i -> IntStream.rangeClosed(1, 9)
    .map(j -> i * j)
    .collect(Collectors.joining(" ")))
  .forEach(System.out::println);
```

宣言型で書くメリットは以下です。

- ifによる分岐やforによるループがないため理解しやすい
  - 上から順番に読むだけで済む
- 各処理が分かれている
  - 修正が小さい影響範囲で済みやすい
  - 並列化しやすい
    - 命令型でもメソッド化すれば達成できますが、宣言型では自動的に達成されます

一方命令型では処理の詳細を記述するため、環境に合わせてパフォーマンスが良いコードを書けるというメリットがあります。早すぎる最適化はNGのため基本的には宣言型で書くべきですが、状況に応じて使い分けましょう。

::: tip NOTE
:pencil2: **なるべく宣言型で書く**
:::
