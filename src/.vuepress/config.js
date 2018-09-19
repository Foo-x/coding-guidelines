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
          [ '/architecture/SRP'               , '5.1. SRP' ],
          [ '/architecture/OCP'               , '5.2. OCP' ],
          [ '/architecture/LSP'               , '5.3. LSP' ],
          [ '/architecture/ISP'               , '5.4. ISP' ],
          [ '/architecture/DIP'               , '5.5. DIP' ],
          [ '/architecture/SOLID'             , '5.6. SOLID' ],
          [ '/architecture/REP'               , '5.7. REP' ],
          [ '/architecture/CRP'               , '5.8. CRP' ],
          [ '/architecture/CCP'               , '5.9. CCP' ],
          [ '/architecture/ADP'               , '5.10. ADP' ],
          [ '/architecture/SDP'               , '5.11. SDP' ],
          [ '/architecture/SAP'               , '5.12. SAP' ],
          [ '/architecture/hiding-information', '5.13. 情報の隠蔽' ],
        ]
      },
      {
        title   : '6. スコープ',
        children: [
          [ '/scope/minimize-fields', '6.1. フィールド数の最少化' ],
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
