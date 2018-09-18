# 縦のライン
縦のラインを揃えることで読みやすくなります。

## 改行
### :x:
```java
public static final VeryLongNameClass foo = new VeryLongNameClass(1, 2, 3);
public static final VeryLongNameClass bar =
  new VeryLongNameClass(10, 20, 30);
public static final VeryLongNameClass baz =
  new VeryLongNameClass(
    100,
    200,
    300);
```

### :o:
```java
public static final VeryLongNameClass foo =
  new VeryLongNameClass(
    1,
    2,
    3);
public static final VeryLongNameClass bar =
  new VeryLongNameClass(
    10,
    20,
    30);
public static final VeryLongNameClass baz =
  new VeryLongNameClass(
    100,
    200,
    300);
```

## カンマ
### :x:
```java
someMethod("fooooo", "bar", "baaaaaz");
someMethod("foo", "baaaaaaaar", "baaaaaaaz");
someMethod("foooooooo", "baaaaaaaaar", "baz");
```

### :o:
```java
someMethod("fooooo"   , "bar"        , "baaaaaz");
someMethod("foo"      , "baaaaaaaar" , "baaaaaaaz");
someMethod("foooooooo", "baaaaaaaaar", "baz");
```

::: tip NOTE
:pencil2: **縦のラインを揃える**
:::

## 注意
縦のラインを揃えることで見やすくなりますが、ある行が変更されると他の行も変更しなければいけません。差分と手間が増えます。デメリットのほうが大きいと判断した場合は無理に揃える必要はありません。
