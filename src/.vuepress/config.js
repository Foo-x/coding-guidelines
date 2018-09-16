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
          [ '/consistency/'           , '2.1. 美しさ' ],
          [ '/consistency/conventions', '2.2. 規約' ],
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
        title   : '6. テスト',
        children: [
          [ '/test/', '6.1. 目的' ],
        ]
      },
      {
        title   : '7. コメント',
        children: [
          [ '/comment/kinds', '7.1. 種類' ],
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
    }
  },
}
