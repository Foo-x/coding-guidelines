# マジックバリュー

具体的な文字列や数値には名前を付けましょう。名前の付いていない文字列や数値を **マジックバリュー** と呼びます。マジックバリューはそれだけを見てもどのような値なのかがわかりません。名前を付けることでわかりやすくなります。

:x:

```ts
// 税込価格の計算
const calcPriceWithTax = (price: number): number {
  return price + price * 0.1;
}
```

:o:

```ts
const TAX_RATE = 0.1;
const calcPriceWithTax = (price: number): number {
  return price + price * TAX_RATE;
}
```

::: tip NOTE
:pencil2: **具体的な文字列や数値には名前を付ける**
:::

## 関連

### マジックナンバー

マジックバリューのうち特に数値は **マジックナンバー** と呼びます。

