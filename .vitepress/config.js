const { getPosts, generatePaginationPages } = require("./theme/serverUtils");

async function config() {
  const pageSize = 3;
  await generatePaginationPages(pageSize);
  return {
    title: "🐸",
    base: "/",
    description: "um1ng blog",
    ignoreDeadLinks: true,
    themeConfig: {
      posts: await getPosts(),
      pageSize: pageSize,
      nav: [
        { text: "Archives", link: "/pages/archives" },
        { text: "Tags", link: "/pages/tags" },
      ],
      outlineTitle: "文章摘要",
    },
    srcExclude: ["README.md"], // exclude the README.md , needn't to compiler

    vite: {
      build: { minify: false },
      server: { port: 9999 },
    },
  };
}

module.exports = config();
