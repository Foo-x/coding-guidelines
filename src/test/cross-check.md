# クロスチェック

テスト対象のロジックを使って期待値を生成しないようにしましょう。ロジックにバグが含まれていても検知できなくなってしまいます。べた書きでクロスチェックするのが基本です。

:x:

```ts
// プロダクトコード
const TAX_RATE = 0.1;

const withTax = (product: { price: number }): number => {
  return product.price * (1 + TAX_RATE);
};

// テストコード
test("withTax - 100 returns 110", () => {
  const product = { price: 100 };

  const actual = withTax(product);

  const expected = product.price * (1 + TAX_RATE);
  expect(actual).toBe(expected);
});
```

このようにテストしてしまうと、たとえば `TAX_RATE` や `withTax` が以下のように変更されてもバグを検知できません。

```ts
// プロダクトコード
const TAX_RATE = -0.1;

const withTax = (product: { price: number }): number => {
  product.price = 1000;
  return product.price * (1 + TAX_RATE);
};

// テストコード
test("withTax - 100 returns 110", () => {
  const product = { price: 100 };

  const actual = withTax(product);

  const expected = product.price * (1 + TAX_RATE); // 110ではなく-900になっているが、成功してしまう
  expect(actual).toBe(expected);
});
```

:o:

```ts
// プロダクトコード
const TAX_RATE = 0.1;

const withTax = (price: number): number => {
  return price * (1 + TAX_RATE);
};

// テストコード
test("withTax - 100 returns 110", () => {
  const actual = withTax(100);

  expect(actual).toBe(110); // 100 * (1 + 0.1)
});
```

べた書きにすると期待値がなぜその値になるのかわかりにくいので、コメントに計算式を添えると丁寧です。

::: tip NOTE
:pencil2: **期待値をべた書きしてクロスチェックする**
:::

## 注意

クロスチェックすると仕様変更によって大量のテストが失敗することがあります。しかし、それは正しい現象です。逆に、仕様が変わってもテストが成功するということは、実装にバグが含まれていても検知できないということです。テストの修正コストを下げる方法としては、[Test Data Builder パターン](test-data-builder.md) やパラメータ化テストなどがあります。
