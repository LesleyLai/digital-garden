import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

import { QuartzFilterPlugin } from "./quartz/plugins/types"
export const LesleyRemoveDrafts: QuartzFilterPlugin<{}> = () => ({
  name: "LesleyRemoveDrafts",
  shouldPublish(_ctx, [_tree, vfile]) {
    // uses frontmatter parsed from transformers
    const draftFlag: boolean =
      (vfile.data?.frontmatter?.draft || vfile.data?.frontmatter?.tags?.includes("draft")) ?? false

    const stubFlag: boolean = vfile.data?.frontmatter?.tags?.includes("stub") ?? false
    const todoFlag: boolean = !!vfile.data?.frontmatter?.tags?.find((tag) => tag.startsWith("todo"))

    if (vfile.data?.frontmatter?.title.startsWith("event")) {
      console.log(`stub: ${stubFlag}, todo: ${todoFlag}`)
      console.log(`Should publish: ${!draftFlag && !stubFlag && !todoFlag}`)
    }
    return !draftFlag && !stubFlag && !todoFlag
  },
})

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Lesley's Digital Garden",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "notes.lesleylai.info",
    ignorePatterns: [
      "Templates",
      "Personal",
      "Projects",
      "Fleeting",
      ".obsidian",
      ".trash",
      ".git",
    ],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: false,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "mathjax" }),
    ],
    filters: [LesleyRemoveDrafts()],
    emitters: [
      //Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
