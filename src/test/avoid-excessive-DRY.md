# 過剰なDRYの回避

テストコードを過剰にDRYにしないようにしましょう。何をテストしているのか分かりにくくなるためです。

セットアップ関数やヘルパー関数で共通化する際は以下に注意します。

- 特定のテストにのみ必要な処理を共通の関数に含めない
    - その処理を必要としないテストが不要な依存を含むようになるため
    - その処理が必要なテスト内に移動させるか、別の関数にする
- テストしたい事前条件や事後条件を共通の関数で生成しない
    - 何をテストしているのか分かりにくくなるため
    - テストしたい事前条件や事後条件を受け取る関数であれば問題ない

::: tip NOTE
:pencil2: **DRYにしすぎない**
:::
