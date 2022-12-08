import DefaultTheme from "vitepress/theme";

import Layout from "./components/Layout.vue";
import Archives from "./components/Archives.vue";
import Tags from "./components/Tags.vue";
import Page from "./components/Page.vue";

import "./custom.css";

export default {
  ...DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {
    // register global compoment
    app.component("Tags", Tags);
    app.component("Archives", Archives);
    app.component("Page", Page);
  },
};
