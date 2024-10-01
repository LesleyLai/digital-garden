import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.OnlyFor(
      { titles: ["Home"] },
      Component.RecentNotes({
        showTags: false,
        linkToMore: "/Concepts" as SimpleSlug,
        limit: 7,
        title: "Recently Edited Notes:",
        filter: (f) => f.relativePath?.startsWith("Concepts/") ?? false,
      }),
    ),
    Component.OnlyFor(
      { titles: ["Home"] },
      Component.RecentNotes({
        showTags: false,
        linkToMore: "/Writings" as SimpleSlug,
        limit: 5,
        title: "Latest Writings:",
        filter: (f) => f.relativePath?.startsWith("Writings/") ?? false,
      }),
    ),
    Component.Comments({
      provider: "giscus",
      options: {
        repo: "LesleyLai/digital-garden",
        repoId: "R_kgDOMyQ4bw",
        category: "Announcements",
        categoryId: "DIC_kwDOMyQ4b84CisbS",
      },
    }),
  ],
  footer: Component.Footer({
    links: {
      "GitHub Repository": "https://github.com/LesleyLai/digital-garden",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta({ showReadingTime: false }),
    Component.Properties(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
