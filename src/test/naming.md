# テスト名

テストの名前には以下の要素を含めましょう。

1. テスト対象
2. シナリオ
3. 条件と期待動作

```ts
// テストの構造化をサポートしている場合
describe("fetch", () => {
  describe("happy path", () => {
    test("if have cache, return it", () => {
      // ...
    })
  })

  describe("invalid url", () => {
    test("if url does not exist, throw error", () => {
      // ...
    })
  })
})

// テストの構造化をサポートしていない場合
test("fetch - happy path - if have cache, return it", () => {
  // ...
})

test("fetch - invalid url - if url does not exist, throw error", () => {
  // ...
})
```

テスト名をわかりやすくすると以下のメリットがあります。

- 名前を見ただけでどのようなテストかがわかる
- テストにドキュメントとしての役割も持たせられる
- テストが失敗したときに修正が必要な箇所を見つけやすくなる

::: tip NOTE
:pencil2: **テスト名をわかりやすくする**
:::
