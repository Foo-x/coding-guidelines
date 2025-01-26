# 早期リターン

関数は可能な限り早くリターンしましょう。

### :x:

```ts
const getFee = (person: Person): number => {
  let fee: number;

  if (person.type !== "unknown") {
    const age = person.age;

    if (age < 0) {
      fee = -1;
    } else if (age <= 12) {
      fee = 0;
    } else if (age <= 15) {
      fee = 1000;
    } else if (age <= 18) {
      fee = 1500;
    } else {
      fee = 2000;
    }
  } else {
    fee = -1;
  }

  return fee;
}
```

### :o:

```ts
const getFee = (person: Person): number => {
  if (person.type === "unknown") {
    return -1;
  }

  const age = person.age;

  if (age < 0) {
    return -1;
  }
  if (age <= 12) {
    return 0;
  }
  if (age <= 15) {
    return 1000;
  }
  if (age <= 18) {
    return 1500;
  }

  return 2000;
}
```

このようにするメリットは以下です。

- シンプルになる
- 状態[^1]を意識しながら読み進めなくて済む
- 各条件が独立するので変更しやすくなる

特に大きいのは状態を意識しなくて済むことです。処理が長くても状態が少なければ理解しやすいです。また、複雑な状態は読む人の脳内リソースを消費します。**早期リターン**によって状態を減らしましょう。

::: tip NOTE
:pencil2: **早めにリターンする**
:::

## ガード節
例外的な条件などを処理の冒頭で早期リターンすることを特に**ガード節**と呼びます。早期リターンの例として挙げたコードのうち、以下の部分が該当します。ガード節を置くことによって、それ以降の処理で例外的な状態を意識しないで済みます。

```ts
  if (person.type === "unknown") {
    return -1;
  }
```

```ts
  if (age < 0) {
    return -1;
  }
```

## 認知的複雑度
コードの複雑度を表す指標に**認知的複雑度 (Cognitive Complexity)** があります。ネストの深い分岐ほど複雑度が高くなる指標です。早期リターンによって読みやすくなることを定量的に評価できます。

```ts
const someFunction = (): number => {
  let result: number;

  if (condition1) { // +1
    if (condition2) { // +2（ネスト1）
      if (condition3) { // +3（ネスト2）
        result = 1;
      } else { // +1
        result = 2;
      }
    } else if (condition4) { // +1
      result = 3;
    } else { // +1
      result = 4;
    }
  } else { // +1
    result = 5;
  }

  return result;
}
```

ネストの分だけ複雑度が高くなるため、早期リターンする前の認知的複雑度は10です。

```ts
const someFunction = (): number => {
  if (!condition1) { // +1
    return 5;
  }
  if (condition4) { // +1
    return 3;
  }
  if (!condition2) { // +1
    return 4;
  }
  if (condition3) { // +1
    return 1;
  }
  return 2;
}
```

早期リターンによって認知的複雑度を4に減らせます。

[^1]: ここでの「状態」はネストされている条件や再代入される変数の値のことです。
