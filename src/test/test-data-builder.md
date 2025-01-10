# Test Data Builder パターン

[AAA パターン](AAA.md) の準備 (Arrange)、実行 (Act)、検証 (Assert) のうち、Arrange でのテストデータ生成はテスト対象とは関係ない処理や値が必要になったり、記述が多くなったりしやすいです。

```ts
class User {
  constructor(
    public name: string,
    public age: number,
    public height: number,
    public weight: number
  ) {}

  bmi(): number {
    return Number((this.weight / (this.height / 100) ** 2).toFixed(2));
  }
}

test("User - bmi - height=170 and weight=60 returns 20.76", () => {
  // テストに関係ないnameとageも渡す必要がある
  const user = new User("foo", 20, 170, 60);

  const actual = user.bmi();

  expect(actual).toBe(20.76);
});
```

Test Data Builder パターンは、テスト用の Builder クラスを作成し、テストに関係する値だけで簡潔に記述できるようにするデザインパターンです。

```ts
class User {
  constructor(
    public name: string,
    public age: number,
    public height: number,
    public weight: number
  ) {}

  bmi(): number {
    return Number((this.weight / (this.height / 100) ** 2).toFixed(2));
  }
}

class UserBuilder {
  public name: string = "foo";
  public age: number = 20;
  public height: number = 180;
  public weight: number = 80;

  private constructor() {}

  static new(): UserBuilder {
    return new UserBuilder();
  }

  withName(name: string): UserBuilder {
    this.name = name;
    return this;
  }

  withAge(age: number): UserBuilder {
    this.age = age;
    return this;
  }

  withHeight(height: number): UserBuilder {
    this.height = height;
    return this;
  }

  withWeight(weight: number): UserBuilder {
    this.weight = weight;
    return this;
  }

  build(): User {
    return new User(this.name, this.age, this.height, this.weight);
  }
}

test("User - bmi - height=170 and weight=60 returns 20.76", () => {
  const user = UserBuilder.new().withHeight(170).withWeight(60).build();

  const actual = user.bmi();

  expect(actual).toBe(20.76);
});
```

::: tip NOTE
:pencil2: **テストに関係する値だけを使用する**
:::

## 補足

名前付き引数をサポートしている言語の場合は、ヘルパー関数のほうが簡単に実現できます。Python、Ruby、Kotlinなどがサポートしています。JavaScript/TypeScript は、厳密にはサポートしていませんが、オブジェクトで代用できます。

```ts
class User {
  constructor(
    public name: string,
    public age: number,
    public height: number,
    public weight: number
  ) {}

  bmi(): number {
    return Number((this.weight / (this.height / 100) ** 2).toFixed(2));
  }
}

const createUser = (
  props: Partial<User>
): User => {
  return new User(
    props.name ?? "foo",
    props.age ?? 20,
    props.height ?? 180,
    props.weight ?? 80
  );
};

test("User - bmi - height=170 and weight=60 returns 20.76", () => {
  const user = createUser({
    height: 170,
    weight: 60,
  });

  const actual = user.bmi();

  expect(actual).toBe(20.76);
});
```
