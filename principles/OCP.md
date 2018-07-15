# OCP (Open-Closed Principle)
> 開放・閉鎖原則  
> クラスは拡張に対して開き、修正に対して閉じていなければいけない

クラス(モジュール)は拡張可能かつ、修正しても他のクラスに影響を与えないようにしなければいけません。

### OCPに違反している例
```java
public class Service {
  private User user;

  public String getProfile() {
    return user.getFirstName() + " " + user.getLastName() + "(" + user.getAge() + ")";
  }
}

public class User {
  private String firstName;
  private String lastName;
  private int age;

  public String getFirstName() {
    return firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public int getAge() {
    return age;
  }
}
```

上のような実装から、`User`クラスを以下のように変更したとします。

```java
public class User {
  private String fullName;
  private int age;

  public String getFullName() {
    return fullName;
  }

  public int getAge() {
    return age;
  }
}
```

このように変更してしまうと、`Service`クラスの`getProfile`も追従する必要があります。つまり、`User`クラスの変更が他のクラスに影響を与えてしまっているため、OCPに違反しています。

### OCPが守られている例
OCPを実現するためには、インターフェースを使います。

```java
public class Service {
  private IUser user;

  public String getProfile() {
    return user.getFirstName() + " " + user.getLastName() + "(" + user.getAge() + ")";
  }
}

public interface IUser {
  public String getFirstName();
  public String getLastName();
  public int getAge();
}

public class User implements IUser {
  private String firstName;
  private String lastName;
  private int age;

  @Override
  public String getFirstName() {
    return firstName;
  }

  @Override
  public String getLastName() {
    return lastName;
  }

  @Override
  public int getAge() {
    return age;
  }
}
```

このようにしていれば、`Service`クラスの`user`には`IUser`で定義されているメソッドが存在することが保証されます。`User`クラスを変更することになっても、`IUser`のメソッドは実装しなければいけません。

```java
public class User implements IUser {
  private String fullName;
  private int age;

  public String getFullName() {
    return fullName;
  }

  @Override
  public String getFirstName() {
    return fullName.split(" ")[0];
  }

  @Override
  public String getLastName() {
    return fullName.split(" ")[1];
  }

  @Override
  public int getAge() {
    return age;
  }
}
```

これで`Service`クラスには影響が及びません。

:pencil2: **クラスは拡張可能かつ修正が他のクラスに影響を与えないようにする**

## 注意
変更が予測される箇所ではOCPを適用すべきですが、ほぼ変更されないようなクラスに対しても適用するのは[YAGNI](YAGNI.md)に違反します。そこで、ほぼ確実に変更されるような場合以外はそのまま実装し、実際に変更が発生してからOCPを適用するという方法もあります。
