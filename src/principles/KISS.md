---
title: KISS
---

# KISS (Keep it simple, stupid)
> シンプルにしておけ、愚か者よ

コードを書く際は常に**単純**かつ**簡潔**に保ちましょう。複雑なコードは修正や拡張が難しくなります。

大事なのは「単純性」と「簡潔性」を両方保つことです。

### 単純 :o: 簡潔 :x: の例
```java
// 1から20までのFizzBuzz
public void fizzBuzz() {
  System.out.println(createFizzBuzzStr(1));
  System.out.println(createFizzBuzzStr(2));
  System.out.println(createFizzBuzzStr(3));
  // ...
  System.out.println(createFizzBuzzStr(20));
}

public String createFizzBuzzStr(int i) {
  if (i % 15 == 0) {
    return "FizzBuzz";
  } else if (i % 3 == 0) {
    return "Fizz";
  } else if (i % 5 == 0) {
    return "Buzz";
  } else {
    return String.valueOf(i);
  }
}
```

### 単純 :x: 簡潔 :o: の例
```java
for (int i = 1; i <= 20; i++) System.out.println(i % 15 == 0 ? "FizzBuzz" : i % 3 == 0 ? "Fizz" : i % 5 == 0 ? "Buzz" : i);
```

### 単純 :o: 簡潔 :o: の例
```java
for (int i = 1; i <= 20; i++) {
  if (i % 15 == 0)
    System.out.println("FizzBuzz");
  else if (i % 3 == 0)
    System.out.println("Fizz");
  else if (i % 5 == 0)
    System.out.println("Buzz");
  else
    System.out.println(i);
}
```

:pencil2: **コードは「単純」かつ「簡潔」に保つ**

## 関連
### less is more
> より少ないことは、より豊かなこと

### オッカムの剃刀
ある事柄を説明するために不要な存在は切り落とすべき、という考え方。
