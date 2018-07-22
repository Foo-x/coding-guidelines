# ISP (Interface Segregation Principle)
> インターフェース分離の原則  
> クライアントに、クライアントが利用しないメソッドへの依存を強制させてはいけない

あるインターフェースを作成するときに、利用者が必要としないメソッドは持たないようにしましょう。逆に言うと、利用者ごとにインターフェースを分離するようにしましょう。複数の利用者が同じインターフェースに依存してしまうと、インターフェースを修正したときの影響範囲が広くなってしまいます。

### ISPに違反している例
```java
public interface IPerson {
  public void walk();
  public void run();
  public void swim();
}
```

「歩く」「走る」「泳ぐ」を同時に必要とする場面はあるでしょうか？上のように1つのインターフェースにまとめてしまうと、「走り方」や「泳ぎ方」の変更が「歩いているとき」にも影響を及ぼしてしまいます。

### ISPが守られている例
```java
public interface IWalker {
  public void walk();
}

public interface IRunner {
  public void run();
}

public interface ISwimmer {
  public void swim();
}
```

インターフェースを分離したことで、「歩いているとき」に「走り方」や「泳ぎ方」を意識しないですむようになりました。また、「走り方」や「泳ぎ方」が変更されても「歩いているとき」には影響を及ぼしません。

:pencil2: **インターフェースは利用者ごとに分離する**

## 関連
### [SRP (Single Responsibility Principle)](SRP.md)
変更理由を1つにすることは、利用者ごとにクラス(インターフェース)を分離することと言い換えられます。
