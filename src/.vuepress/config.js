module.exports = {
  base: '/coding-guidelines/',
  title: 'コーディングの指針',
  dest: 'docs',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' } ]
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
          [ '/consistency/', '2.1. 美しさ' ]
        ]
      },
      {
        title   : '3. 名前',
        children: [
          [ '/name/', '3.1. 情報量の最大化' ]
        ]
      },
      {
        title   : '4. ロジック',
        children: [
          [ '/logic/order-of-if-expression', '4.1. 条件式の並び順' ]
        ]
      },
      [ '#', '5. スコープ' ],
      {
        title   : '6. 構造',
        children: [
          [ '/architecture/SRP'  , '6.1. SRP' ],
          [ '/architecture/OCP'  , '6.2. OCP' ],
          [ '/architecture/LSP'  , '6.3. LSP' ],
          [ '/architecture/ISP'  , '6.4. ISP' ],
          [ '/architecture/DIP'  , '6.5. DIP' ],
          [ '/architecture/SOLID', '6.6. SOLID' ],
        ]
      },
      [ '#', '7. テスト' ],
      [ '#', '8. コメント' ],
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
