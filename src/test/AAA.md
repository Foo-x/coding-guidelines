# AAA

テストの準備 (Arrange)、実行 (Act)、検証 (Assert) を区別しましょう。これらが混ざっていると事前条件やテスト項目が分かりにくくなります。

### :x:

```ts
test("add - 1 + 2 returns 3", () => {
  expect(new Calculator().add(1, 2)).toBe(3);
})
```

### :o:

```ts
test("add - 1 + 2 returns 3", () => {
  // Arrange
  const sut = new Calculator();

  // Act
  const actual = sut.add(1, 2);

  // Assert
  const expected = 3;
  expect(actual).toBe(expected);
})
```

なお、`sut` (system under test) はテスト対象、`actual` は検証する値、`expected` は期待値としてよく使われる名前です。

::: tip NOTE
:pencil2: **テストの準備、実行、検証を区別する**
:::
