# 契約プログラミング
メソッドの引数として渡される値が満たすべき条件(**事前条件**)は、そのメソッドを呼び出す側でチェックしましょう。メソッドを呼ぶ側で保証すべき条件と、呼び出される側で保証すべき条件を、明確にすることでデバッグ効率が良くなります。このような考え方を**契約プログラミング**と呼びます。  
また、メソッド内でチェックを行うと、パフォーマンスが下がる可能性があります。

### 対象コード
```java
Person person = null;
List<String> friends = Arrays.asList("Alice", "Bob", "Charlie");
```

### :x:
```java
friends.forEach(friend -> logRelations(person, friend));
```

```java
void logRelations(Person person, String friend) {
  if (person == null)
    return;

  System.out.println(new StringBuilder()
    .append(person.name)
    .append(" : ")
    .append(friend)
    .toString());
}
```

### :o:
```java
if (person != null) {
  friends.forEach(friend -> logRelations(person, friend));
}
```

```java
void logRelations(Person person, String friend) {
  System.out.println(new StringBuilder()
    .append(person.name)
    .append(" : ")
    .append(friend)
    .toString());
}
```

:x:のコードは`person`のnullチェックを`friends`の要素数の分だけ行うことになりますが、:o:のコードは1回だけで済みます。また、引数として渡される値が事前条件を満たしている前提のため、実装を簡潔にすることができます。なお、事前条件はドキュメントで明示しましょう。

:::tip NOTE
:pencil2: **引数は呼び出す側でチェックする**
:::

## 注意
外部から値が渡される場合はメソッド内でチェックしましょう。その場合、例外的な値が渡されたときの挙動はドキュメントに明示しましょう。
