export default ({ Vue }) => {
  Vue.mixin({
    computed: {
      $title() {
        const page = this.$page
        const siteTitle = this.$siteTitle
        const selfTitle = page.frontmatter.home || page.frontmatter.noTitle ? null : (
          page.frontmatter.title || // explicit title
          page.title // inferred title
        )
        return siteTitle
          ? selfTitle
            ? (selfTitle + ' | ' + siteTitle)
            : siteTitle
          : selfTitle || 'VuePress'
      }
    }
  })
}
