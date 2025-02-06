const twemoji = require("@twemoji/api");

module.exports = {
  base: "/coding-guidelines/",
  title: "コーディングの指針",
  dest: "docs",
  head: [
    ["link", { rel: "icon", href: "/favicon.png" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  ],
  plugins: [
    [
      "@vuepress/pwa",
      {
        updatePopup: {
          message: "新しいコンテンツが追加されました。",
          buttonText: "更新",
        },
      },
    ],
  ],
  themeConfig: {
    sidebar: [
      ["/", "0. はじめに"],
      {
        title: "1. 原則",
        children: [
          ["/principles/KISS", "1.1. KISS"],
          ["/principles/YAGNI", "1.2. YAGNI"],
          ["/principles/DRY", "1.3. DRY"],
          ["/principles/PIE", "1.4. PIE"],
        ],
      },
      {
        title: "2. 一貫性",
        children: [
          ["/consistency/", "2.1. 美しさ"],
          ["/consistency/conventions", "2.2. 規約"],
        ],
      },
      {
        title: "3. 名前",
        children: [
          ["/name/", "3.1. 情報量の最大化"],
          ["/name/concreteness", "3.2. 具体性"],
          ["/name/prejudice", "3.3. 先入観"],
          ["/name/prohibit-abbreviation", "3.4. 省略の禁止"],
          ["/name/magic-value", "3.5. マジックバリュー"],
        ],
      },
      {
        title: "4. ロジック",
        children: [
          ["/logic/order-of-if-expression", "4.1. 条件式の並び順"],
          ["/logic/declarative", "4.2. 宣言型"],
          ["/logic/early-return", "4.3. 早期リターン"],
          ["/logic/shrink-scope", "4.4. スコープの縮小"],
          ["/logic/immutability", "4.5. 不変性"],
          ["/logic/use-library", "4.6. ライブラリの使用"],
          ["/logic/premature-optimization", "4.7. 早すぎる最適化"],
          ["/logic/programming-by-contract", "4.8. 契約プログラミング"],
          ["/logic/pure-function", "4.9. 純粋関数"],
          ["/logic/CQS", "4.10. コマンドクエリ分離原則"],
        ],
      },
      {
        title: "5. 構造",
        children: [
          ["/architecture/SRP", "5.1. 単一責任原則"],
          ["/architecture/OCP", "5.2. 開放・閉鎖原則"],
          ["/architecture/LSP", "5.3. リスコフの置換原則"],
          ["/architecture/ISP", "5.4. インターフェース分離の原則"],
          ["/architecture/DIP", "5.5. 依存関係逆転の原則"],
          ["/architecture/SOLID", "5.6. SOLID"],
          ["/architecture/REP", "5.7. 再利用・リリース等価の原則"],
          ["/architecture/CRP", "5.8. 全再利用の原則"],
          ["/architecture/CCP", "5.9. 閉鎖性共通の原則"],
          ["/architecture/ADP", "5.10. 非循環依存関係の原則"],
          ["/architecture/SDP", "5.11. 安定依存の原則"],
          ["/architecture/SAP", "5.12. 安定度・抽象度等価の原則"],
          [
            "/architecture/principles-of-package-design",
            "5.13. パッケージ設計の原則",
          ],
          ["/architecture/cohesion", "5.14. 凝集度"],
          ["/architecture/coupling", "5.15. 結合度"],
          ["/architecture/connascence", "5.16. コナーセンス"],
          ["/architecture/hiding-information", "5.17. 情報の隠蔽"],
          ["/architecture/minimize-fields", "5.18. フィールド数の最少化"],
          ["/architecture/one-function-one-task", "5.19. 1関数1タスク"],
          ["/architecture/clean-architecture", "5.20. Clean Architecture"],
          ["/architecture/primitive-obsession", "5.21. プリミティブ型執着"],
        ],
      },
      {
        title: "6. テスト",
        children: [
          ["/test/", "6.1. 目的"],
          ["/test/test-first", "6.2. テストファースト"],
          ["/test/refactoring", "6.3. リファクタリング"],
          ["/test/naming", "6.4. テスト名"],
          ["/test/AAA", "6.5. AAAパターン"],
          ["/test/avoid-logic", "6.6. 分岐・ループの回避"],
          ["/test/one-test-one-point", "6.7. 1テスト1観点"],
          ["/test/test-data-builder", "6.8. Test Data Builder パターン"],
          ["/test/cross-check", "6.9. クロスチェック"],
        ],
      },
      {
        title: "7. コメント",
        children: [
          ["/comment/kinds", "7.1. 種類"],
          ["/comment/elimination-of-redundancy", "7.2. 冗長性の排除"],
          ["/comment/elimination-of-explanation", "7.3. 補足の排除"],
        ],
      },
    ],
    activeHeaderLinks: false,
    repo: "foo-x/coding-guidelines",
    docsDir: "src",
  },
  markdown: {
    extendMarkdown: (md) => {
      md.use(require("markdown-it-footnote"));
      md.renderer.rules.emoji = (token, idx) =>
        twemoji.parse(token[idx].content, {
          folder: "svg",
          ext: ".svg",
        });
    },
  },
};
