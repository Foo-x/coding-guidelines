# 早すぎる最適化
> 早すぎる最適化は諸悪の根源である

パフォーマンスチューニングは必要になるまで行わないようにしましょう。基本はパフォーマンスよりも単純性や可読性を優先します。早すぎる最適化には以下の問題があります。

- 低レベルの処理を行うコードは理解しにくくなりやすい
- 仕様が変わると変更が大きくなりやすい
  - そもそもその時点での仕様に「最適化」するということなので、柔軟性が下がるのは当然です
- すべての処理を計測する前に最適化しても効果が薄い
  - 5秒かかる処理を10ms速くしてもほぼ意味がありません
  - まずはボトルネックを探しましょう
  - コードを変更するより別のデータベースを使用したほうが速くなる、というケースもあります

:::tip NOTE
:pencil2: **早すぎる最適化を行わない**
:::