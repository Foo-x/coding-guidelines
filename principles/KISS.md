# KISS (Keep it simple, stupid)
> シンプルにしておけ、愚か者よ

コードを書く際は、常に**単純**かつ**簡潔**に保ちましょう。複雑なコードは修正や拡張が難しくなります。

ここで大事なことは、「単純性」と「簡潔性」を両方保つことです。片方のみでは不十分です。

### 単純 :o: 簡潔 :x: の例
```java
// List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
// List<String> classes = Arrays.asList("Math", "Science", "History");

System.out.println(names.get(0)
  + "は"
  + classes.get(0)
  + "と"
  + classes.get(1)
  + "と"
  + classes.get(2)
  + "の授業を受けています。");
System.out.println(names.get(1)
  + "は"
  + classes.get(0)
  + "と"
  + classes.get(1)
  + "と"
  + classes.get(2)
  + "の授業を受けています。");
System.out.println(names.get(2)
  + "は"
  + classes.get(0)
  + "と"
  + classes.get(1)
  + "と"
  + classes.get(2)
  + "の授業を受けています。");
```

### 単純 :x: 簡潔 :o: の例
```java
names.forEach(name -> {
  System.out.println(name + classes.stream().collect(Collectors.joining("と", "は", "の授業を受けています。");
});
```

### 単純 :o: 簡潔 :o: の例
```java
String classesStr = String.join("と", classes);
for (String name : names) {
  System.out.println(name + "は" + classesStr + "の授業を受けています。");
}
```

:pencil2: **コードは「単純」かつ「簡潔」に保つ**

## 関連
### less is more
> より少ないことは、より豊かなこと

### オッカムの剃刀
ある事柄を説明するために不要な存在は切り落とすべき、という考え方。
