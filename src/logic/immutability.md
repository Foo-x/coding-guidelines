# 不変性
変数は不変にしましょう。値が再代入されると、ある時点でどんな値を持っているのか把握するのが難しくなります。

## インスタンス変数
インスタンスが持つ変数を変更したい場合は、新しいインスタンスを作り直します。このように、インスタンスの生成後に値を変更できないようにする設計方法を**完全コンストラクタ**と呼びます。Javaの場合は名前付き引数の機能がないため、`Builder`パターンを適用すると以下の点で有効です。

- 何の値かがわかりやすい
- 自由な順番で値を設定できる

### 対象クラス
```java
class Window {
  private final int height;
  private final int width;

  public Window(int height, int width) {
    this.height = height;
    this.width = width;
  }
}
```

### :small_red_triangle:
```java
new Window(100, 200);
```

### :o:
```java
class WindowBuilder {
  private int height;
  private int width;

  public WindowBuilder height(int height) {
    this.height = height;
    return this;
  }

  public WindowBuilder width(int width) {
    this.width = width;
    return this;
  }

  public Window build() {
    return new Window(height, width);
  }
}
```

```java
new WindowBuilder()
  .height(100)
  .width(200)
  .build();
```

::: tip NOTE
:pencil2: **変数の値を変更しない**
:::

## 規約
Javaの場合は`final`という修飾子で不変性を保証できますが、すべての変数につけるのは冗長です。`final`をつけていなくても基本は不変とし、変更される可能性がある変数はコメントで明示するといったコーディング規約を定めておくと冗長性を排除できます。
