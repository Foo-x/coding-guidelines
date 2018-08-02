# DIP (Dependency Inversion Principle)
> 依存関係逆転の原則  
> 上位のモジュールは下位のモジュールに依存してはならない。どちらのモジュールも抽象に依存すべきである

モジュール間の依存関係をなくし、間にインターフェースを挟みましょう。また、そのインターフェースは上位モジュール側に持ちましょう。ここでの「上位モジュール」は使う側、「下位モジュール」は使われる側です。

## 上位モジュールが下位モジュールに依存している例
```java
// application-module
public class Application {
  private Engine engine = new Engine();

  public void startApplication() {
    engine.startMusic();
    engine.loadData();
    engine.showHelps();
  }
}

// engine-module
public class Engine {
  public void startMusic() {
    // 音楽再生処理
  }

  public void loadData() {
    // データロード処理
  }

  public void showHelps() {
    // ヘルプ表示
  }
}
```

`Application`という上位モジュールが`Engine`という下位モジュールに依存しています。下位モジュールは処理の詳細部分を扱うので、変更が発生しやすいです。たとえば`Engine`に新しい処理を追加し、`startApplication()`でそのメソッドを呼ぶ必要が生まれた場合などです。このようなケースでは両方のモジュールを修正しなければいけません。そこで以下のように依存関係を逆転させます。

## 依存関係を逆転した例
```java
// application-module
public class Application {
  private IEngine engine = new Engine();

  public void startApplication() {
    engine.start();
  }
}

public interface IEngine {
  public void start();
}

// engine-module
public class Engine implements IEngine {
  @Override
  public void start() {
    startMusic();
    loadData();
    showHelps();
  }

  private void startMusic() {
    // 音楽再生処理
  }

  private void loadData() {
    // データロード処理
  }

  private void showHelps() {
    // ヘルプ表示
  }
}
```

ここでのポイントは以下です。
- `Application`は同じモジュール内の`IEngine`に依存する
- `IEngine`では上位モジュールが必要なインターフェースだけを定義する
  - `Engine`で実装している1つ1つの処理を`Application`は意識しないで済む
- `Engine`は上位モジュールの`IEngine`を実装する

こうすることで、`Engine`に新しい処理が追加されても`Application`の修正は不要になります。

:pencil2: **下位モジュールが上位モジュールのインターフェースを実装する**

---

ただ、上の実装ではまだ不十分です。
```java
private IEngine engine = new Engine();
```
の部分で、`Application`が下位モジュールの`Engine`に依存してしまっています。つまり、下位モジュールへの依存が完全には除かれていません。この問題を解決するには、**依存性の注入(DI: Dependency Injection)**を行います。

## 依存性を注入した例
```java
// main-module
public class Main {
  public static void main(String[] args) {
    IEngine engine = new Engine();
    Application application = new Application(engine);
    application.startApplication();
  }
}

// application-module
public class Application {
  private IEngine engine;

  public Application(IEngine engine) {
    this.engine = engine;
  }

  public void startApplication() {
    engine.start();
  }
}

public interface IEngine {
  public void start();
}

// engine-module
public class Engine implements IEngine {
  @Override
  public void start() {
    startMusic();
    loadData();
    showHelps();
  }

  private void startMusic() {
    // 音楽再生処理
  }

  private void loadData() {
    // データロード処理
  }

  private void showHelps() {
    // ヘルプ表示
  }
}
```

これで`Application`から`Engine`への依存が完全に除かれました。

:pencil2: **下位モジュールへの依存をなくすために依存性の注入を行う**

## 注意
DIPを適用すべきでないケースがいくつかあります。
- 下位モジュールが安定している場合

依存関係を逆転させる目的は、下位モジュールの変更を上位モジュールに伝搬させないためです。下位モジュールに変更が発生しないのであれば適用する必要はありません。

- 下位モジュールが汎用的なモジュールの場合

下位モジュールが複数のモジュールから利用される場合、特定の上位モジュールに定義したインターフェースに依存することはできません。その場合は一度下位モジュールで定義したインターフェースを変更しないようにしましょう。
