# 契約プログラミング

関数の引数として渡される値が満たすべき条件（**事前条件**）は、その関数を呼び出す側でチェックしましょう。呼び出す側で保証すべき条件と呼び出される側で保証すべき条件を明確にすることで、デバッグ効率が良くなります。このような考え方を **契約プログラミング** と呼びます。  
また、関数内でチェックを行うとパフォーマンスが下がる可能性があります。

### 対象コード

```ts
const person: Person = { age: 10, name: "Foo" };
const friends = ["Alice", "Bob", "Charlie"];
```

### :x:

```ts
const logRelations = (person: Person, friend: string) => {
  if (person.age < 20) {
    return;
  }
  console.log(`${person.name} : ${friend}`);
}

friends.forEach(friend => logRelations(person, friend));
```

### :o:

```ts
const logRelations = (person: Person, friend: string) => {
  console.log(`${person.name} : ${friend}`);
}

if (person.age < 20) {
  friends.forEach(friend => logRelations(person, friend));
}
```

:x:のコードは `person` の年齢チェックを `friends` の要素数の分だけ行うことになりますが、:o:のコードは1回だけで済みます。また、引数として渡される値が事前条件を満たしている前提のため、実装を簡潔にすることができます。なお、事前条件はドキュメントで明示しましょう。

:::tip NOTE
:pencil2: **引数は呼び出す側でチェックする**
:::

## 注意

外部から値が渡される場合は関数内でチェックしましょう。その場合、例外的な値が渡されたときの挙動はドキュメントに明示しましょう。
