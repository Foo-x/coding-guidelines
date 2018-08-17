module.exports = {
  base: '/coding-guidelines/',
  title: 'コーディングの指針',
  dest: 'docs',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' } ]
  ],
  themeConfig: {
    sidebar: [
      [ '/'        , '0. はじめに' ],
      [ '/premise/', '1. 前提' ],
      {
        title   : '2. 原則',
        children: [
          [ '/principles/KISS' , '2.1. KISS' ],
          [ '/principles/YAGNI', '2.2. YAGNI' ],
          [ '/principles/DRY'  , '2.3. DRY' ],
          [ '/principles/PIE'  , '2.4. PIE' ],
        ]
      },
      {
        title   : '3. 一貫性',
        children: [
          [ '/consistency/', '3.1. 美しさ' ]
        ]
      },
      {
        title   : '4. 名前',
        children: [
          [ '/name/', '4.1. 情報量の最大化' ]
        ]
      },
      [ '#', '5. ロジック' ],
      [ '#', '6. スコープ' ],
      {
        title   : '7. 構造',
        children: [
          [ '/architecture/SRP'  , '7.1. SRP' ],
          [ '/architecture/OCP'  , '7.2. OCP' ],
          [ '/architecture/LSP'  , '7.3. LSP' ],
          [ '/architecture/ISP'  , '7.4. ISP' ],
          [ '/architecture/DIP'  , '7.5. DIP' ],
          [ '/architecture/SOLID', '7.6. SOLID' ],
        ]
      },
      [ '#', '8. テスト' ],
      [ '#', '9. コメント' ],
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
