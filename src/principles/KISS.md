---
title: KISS
---

# KISS (Keep it simple, stupid)

> シンプルにしておけ、愚か者よ

コードを書く際は常に**単純**かつ**簡潔**に保ちましょう。複雑なコードは修正や拡張が難しくなります。

大事なのは「単純性」と「簡潔性」を両方保つことです。

### 単純 :o: 簡潔 :x: の例

```ts
// 1から20までのFizzBuzz

const fizzBuzz = () => {
  console.log(createFizzBuzzStr(1));
  console.log(createFizzBuzzStr(2));
  console.log(createFizzBuzzStr(3));
  // ...
  console.log(createFizzBuzzStr(20));
}

const createFizzBuzzStr = (i: number): string => {
  if (i % 15 === 0) {
    return "FizzBuzz";
  } else if (i % 3 === 0) {
    return "Fizz";
  } else if (i % 5 === 0) {
    return "Buzz";
  } else {
    return String(i);
  }
}
```

### 単純 :x: 簡潔 :o: の例

```ts
for (let i = 1; i <= 20; i++) console.log(i % 15 === 0 ? "FizzBuzz" : i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "Buzz" : i);
```

### 単純 :o: 簡潔 :o: の例

```ts
for (let i = 1; i <= 20; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0 {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```

::: tip NOTE
:pencil2: **コードは「単純」かつ「簡潔」に保つ**
:::

## 関連

### less is more

> より少ないことは、より豊かなこと

### オッカムの剃刀

ある事柄を説明するために不要な存在は切り落とすべき、という考え方。
