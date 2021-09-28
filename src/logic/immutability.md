# 不変性

変数は不変にしましょう。値が再代入されると、ある時点でどんな値を持っているのか把握するのが難しくなります。

## インスタンス変数

インスタンスが持つ変数を変更したい場合は、新しいインスタンスを作り直します。このように、インスタンスの生成後に値を変更できないようにする設計方法を**完全コンストラクタ**と呼びます。

```ts
class FooWindow {
  constructor(public readonly height: number, public readonly width) {}
}
```

::: tip NOTE
:pencil2: **変数の値を変更しない**
:::

## 初期化

不変性を保つため、なるべく変数を `let` で定義しないようにしましょう。

### :x:

```ts
let name: string;
if (person != null) {
  name = person.name;
} else {
  name = "John Doe";
}
```

このコードは `let` を `const` にするとコンパイルエラーになります。

条件に応じて値を変えたい場合は以下の方法があります。なお、プログラミング言語によっては以下の方法が使えなかったり、別の方法があったりします。

### 三項演算子

```ts
const name = person != null ? person.name : "John Doe";
```

### オプショナルチェーンとnull合体演算子

```ts
const name = person?.name ?? "John Doe";
```

### 関数化

```ts
const getName = (person?: Person): string => {
  if (person != null) {
    return person.name;
  }
  return "John Doe";
}

const name = getName(person);
```

### 即時関数

```ts
const name = (() => {
  if (person != null) {
    return person.name;
  }
  return "John Doe";
})();
```
