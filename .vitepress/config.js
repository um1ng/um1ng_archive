const { getPosts, generatePaginationPages } = require("./theme/serverUtils");

async function config() {
  const pageSize = 3;
  await generatePaginationPages(pageSize);
  return {
    title: "um1ng",
    base: "/",
    description: "um1ng blog",
    ignoreDeadLinks: true,
    themeConfig: {
      posts: await getPosts(),
      pageSize: pageSize,
      nav: [
        { text: "Home", link: "/" },
        { text: "Archives", link: "/pages/archives" },
        { text: "Tags", link: "/pages/tags" },
        { text: "About", link: "/pages/about" },
        // { text: 'Airene', link: 'http://airene.net' }  -- External link test
      ],
      //outline:[2,3],
      outlineTitle: "文章摘要",
      socialLinks: [
        {
          icon: "github",
          link: "https://github.com/um1ng",
        },
      ],
    },
    srcExclude: ["README.md"], // exclude the README.md , needn't to compiler

    vite: {
      //build: { minify: false }
      server: { port: 5000 },
    },
    /*
      optimizeDeps: {
          keepNames: true
      }
      */
  };
}

module.exports = config();
