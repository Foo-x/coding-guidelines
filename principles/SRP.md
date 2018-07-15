# SRP (Single Responsibility Principle)
> 単一責任原則  
> クラスを変更する理由は1つでなければならない

クラス(モジュール)を変更する理由が複数存在すると、ある機能に対する変更が別の機能に影響を及ぼす可能性が高くなります。そのため、別の機能に影響が起きていないことのテストを広い範囲で行わなければならなくなります。

「変更理由」は時と場合によって変わります。例えば以下のクラスがあったとします。

```java
public class User {
  String name;
  Sex sex;
  int age;

  public String getProfile() {
    return name + "(" + age + ")";
  }
}
```

`getProfile`で返す情報が1ヶ所でのみ使用されているのであれば、変更理由はその箇所での仕様変更だけなので、上の実装でも単一責任原則は満たされていると言えます。しかし、複数の箇所で使用される場合は、以下のように別のクラスに処理を切り出すべきです。

```java
public class User {
  String name;
  Sex sex;
  int age;
}

public abstract class UserDataFormatter {
  User user;

  public UserDataFormatter(User user) {
    this.user = user;
  }

  public abstract String getProfile();
}

public class UserDataFormatterForManager extends UserDataFormatter {
  public UserDataFormatterForManager(User user) {
    super(user);
  }

  @Override
  public String getProfile() {
    return user.name + "(" + user.sex + ": " + user.age + ")";
  }
}

public class UserDataFormatterForDeveloper extends UserDataFormatter {
  public UserDataFormatterForDeveloper(User user) {
    super(user);
  }

  @Override
  public String getProfile() {
    return user.name + "(" + user.age + ")";
  }
}
```

別のクラスに切り出すことで、それぞれの子クラスで仕様が変わっても他のクラスには影響が及びません。

:pencil2: **クラスが変更される理由は1つだけにする**

## 注意
上記のように変更理由が複数ある場合は別のクラスに処理を切り出すべきですが、逆に変更理由が1つしかない場合は、[YAGNI](YAGNI.md)に従って最初の実装のようにしたほうがシンプルです。ある処理を実装するときは、その処理の変更理由がいくつ存在するのかを常に意識しましょう。

## 変更理由の見つけ方
変更理由の単複で処理をどこに書くべきかが変わりますが、ではどのようにして変更理由を見つければ良いでしょうか？基本的には、その処理が使用される箇所の数が変更理由の数になります。また、切り出したそれぞれのクラスにうまく名前をつけられるかも判断のポイントになります。複数の箇所で使用されていても同じ名前しかつけられないのであれば変更理由は1つだけかもしれません。

:pencil2: **変更理由の数=使用される箇所の数**
