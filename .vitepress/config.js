const { getPosts, generatePaginationPages } = require("./theme/serverUtils");

async function config() {
  const pageSize = 5;
  await generatePaginationPages(pageSize);
  return {
    title: "👨🏻‍💻",
    base: "/",
    head: [
      [
        "link",
        { rel: "shortcut icon", type: "image/x-icon", href: `./logo.ico` },
      ],
    ],
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
    vite: {
      build: { minify: false },
      server: { port: 9999 },
    },
  };
}

module.exports = config();
