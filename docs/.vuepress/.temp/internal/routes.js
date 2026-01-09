export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"C:/Users/Oliver/Desktop/Aronora/Website/aronora/docs/.vuepress/.temp/pages/about.html.js"), meta: {"title":"About Me"} }],
  ["/articles.html", { loader: () => import(/* webpackChunkName: "articles.html" */"C:/Users/Oliver/Desktop/Aronora/Website/aronora/docs/.vuepress/.temp/pages/articles.html.js"), meta: {"title":"Articles"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/Oliver/Desktop/Aronora/Website/aronora/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Witejcie - Willkommen - Welcome - o kama pona - Bonata"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/Oliver/Desktop/Aronora/Website/aronora/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
