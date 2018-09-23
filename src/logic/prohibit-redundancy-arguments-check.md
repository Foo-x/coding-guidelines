# 冗長な引数チェックの禁止
メソッドの引数として渡される値が満たされているべき条件(**事前条件**)は、そのメソッドを呼び出す側でチェックしましょう。メソッド内でチェックを行うと、パフォーマンスが下がる可能性があります。

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

## 不要なチェックの排除
呼び出し側でも例外的な値になる可能性がない場合はそもそもチェック自体が不要なので消しましょう。

## 注意
呼び出し側が不特定多数で、渡される値のチェックをされている保証がない場合はメソッド内でチェックしましょう。その場合は例外的な値が渡されたときにどのような挙動になるのかもドキュメントに明示しましょう。
