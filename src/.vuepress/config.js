const twemoji = require('twemoji');

module.exports = {
  base: '/coding-guidelines/',
  title: 'コーディングの指針',
  dest: 'docs',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' } ],
  ],
  themeConfig: {
    sidebar: [
      [ '/', '0. はじめに' ],
      {
        title   : '1. 原則',
        children: [
          [ '/principles/KISS' , '1.1. KISS' ],
          [ '/principles/YAGNI', '1.2. YAGNI' ],
          [ '/principles/DRY'  , '1.3. DRY' ],
          [ '/principles/PIE'  , '1.4. PIE' ],
        ]
      },
      {
        title   : '2. 一貫性',
        children: [
          [ '/consistency/'             , '2.1. 美しさ' ],
          [ '/consistency/conventions'  , '2.2. 規約' ],
          [ '/consistency/vertical-line', '2.3. 縦のライン' ],
        ]
      },
      {
        title   : '3. 名前',
        children: [
          [ '/name/'            , '3.1. 情報量の最大化' ],
          [ '/name/concreteness', '3.2. 具体性' ],
          [ '/name/prejudice'   , '3.3. 先入観' ],
        ]
      },
      {
        title   : '4. ロジック',
        children: [
          [ '/logic/order-of-if-expression', '4.1. 条件式の並び順' ],
          [ '/logic/declarative'           , '4.2. 宣言型' ],
          [ '/logic/early-return'          , '4.3. 早期リターン' ],
        ]
      },
      {
        title   : '5. 構造',
        children: [
          [ '/architecture/SRP'               , '5.1. 単一責任原則' ],
          [ '/architecture/OCP'               , '5.2. 開放・閉鎖原則' ],
          [ '/architecture/LSP'               , '5.3. リスコフの置換原則' ],
          [ '/architecture/ISP'               , '5.4. インターフェース分離の原則' ],
          [ '/architecture/DIP'               , '5.5. 依存関係逆転の原則' ],
          [ '/architecture/SOLID'             , '5.6. SOLID' ],
          [ '/architecture/REP'               , '5.7. 再利用・リリース等価の原則' ],
          [ '/architecture/CRP'               , '5.8. 全再利用の原則' ],
          [ '/architecture/CCP'               , '5.9. 閉鎖性共通の原則' ],
          [ '/architecture/ADP'               , '5.10. 非循環依存関係の原則' ],
          [ '/architecture/SDP'               , '5.11. 安定依存の原則' ],
          [ '/architecture/SAP'               , '5.12. 安定度・抽象度等価の原則' ],
          [ '/architecture/hiding-information', '5.13. 情報の隠蔽' ],
        ]
      },
      {
        title   : '6. スコープ',
        children: [
          [ '/scope/'               , '6.1. 基本' ],
          [ '/scope/minimize-fields', '6.2. フィールド数の最少化' ],
        ]
      },
      {
        title   : '7. テスト',
        children: [
          [ '/test/', '7.1. 目的' ],
        ]
      },
      {
        title   : '8. コメント',
        children: [
          [ '/comment/kinds'                     , '8.1. 種類' ],
          [ '/comment/elimination-of-redundancy' , '8.2. 冗長性の排除' ],
          [ '/comment/elimination-of-explanation', '8.3. 補足の排除' ],
        ]
      },
    ],
    repo        : 'foo-x/coding-guidelines',
    docsDir     : 'src',
    editLinks   : true,
    editLinkText: '編集リクエスト',
  },
  markdown: {
    config: md => {
      md.use(require('markdown-it-footnote'));
      md.renderer.rules.emoji = (token, idx) => twemoji.parse(token[idx].content, {
        folder: 'svg',
        ext   : '.svg'
      });
    }
  },
}
