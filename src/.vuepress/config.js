module.exports = {
  base: '/coding-guidelines/',
  dest: 'docs',
  themeConfig: {
    sidebar: [
      [ '/'        , '0. はじめに' ],
      [ '/premise/', '1. 前提' ],
      {
        title: '2. 原則',
        children: [
          [ '/principles/KISS' , '2.1. KISS' ],
          [ '/principles/YAGNI', '2.2. YAGNI' ],
          [ '/principles/DRY'  , '2.3. DRY' ],
          [ '/principles/PIE'  , '2.4. PIE' ],
        ]
      },
      [ '#', '3. 一貫性' ],
      [ '#', '4. 名前' ],
      [ '#', '5. ロジック' ],
      [ '#', '6. スコープ' ],
      {
        title: '7. 構造',
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
  },
  markdown: {
    config: md => {
      md.use(require('markdown-it-footnote'));
    }
  },
}
