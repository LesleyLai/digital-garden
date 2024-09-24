/* Copied from https://github.com/michelepapucci/quartz-visible-obsidian-property and modified by Lesley
 *
 * Original message:
 * Credit to both https://github.com/gamberoillecito for their author and nextnote from which I built this
 * and to https://github.com/jackyzha0 both the creator and gracious question answerer*/

import { FullSlug, TransformOptions, transformLink } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/properties.scss"
import { JSX } from "preact"

function createLinkedElement(slug: FullSlug, opts: TransformOptions, value: string) {
  let cleanedValue = value.replace(/['"\[\]]+/g, "")

  let href = ""
  let text = ""

  if (cleanedValue.includes("|")) {
    href = cleanedValue.split("|")[0]
    text = cleanedValue.split("|")[1]

    href = transformLink(slug, href, opts)
  } else {
    href = transformLink(slug, cleanedValue, opts)
    text = transformLink(slug, cleanedValue, opts)
  }

  return (
    <a href={href} class="internal">
      {text}
    </a>
  )
}

function createPropertyElement(key: string, value: Array<String | JSX.Element>) {
  return (
    <li>
      <span class="property">{key}</span> : <span class="value">{value}</span>
    </li>
  )
}

// Only include the following properties
const shouldIncludeProperty = (property: string) =>
  property.includes("parent") ||
  property.includes("proved by") ||
  property.includes("justifications") ||
  property.includes("generalizations") ||
  property.includes("specializations")

export default (() => {
  function PropertiesWithWorkingLinks({ fileData, allFiles }: QuartzComponentProps) {
    const opts: TransformOptions = {
      strategy: "shortest",
      allSlugs: allFiles.map((fp) => fp.slug as FullSlug),
    }

    const propertiesElements = []

    if (Object.keys(fileData.frontmatter ?? {}).length > 0) {
      for (const [key, value] of Object.entries(fileData.frontmatter ?? {})) {
        if (!shouldIncludeProperty(key)) continue

        const propertyValueElements: Array<String | JSX.Element> = []
        if (value) {
          // Handle cases where value is either a string or an array of string (ignore otehr cases)
          if (typeof value == "string" && value.includes("[[")) {
            propertyValueElements.push(createLinkedElement(fileData.slug!, opts, value))
          } else if (Array.isArray(value)) {
            for (const [index, item] of value.entries()) {
              // Only string elements is supported currently
              if (typeof item == "string") {
                if (item.includes("[[")) {
                  if (Number(index) > 0) {
                    propertyValueElements.push(", ")
                  }
                  propertyValueElements.push(createLinkedElement(fileData.slug!, opts, item))
                } else {
                  propertyValueElements.push(item)
                }
              }
            }
          }
        }
        if (propertyValueElements.length > 0) {
          // Skip empty lists
          propertiesElements.push(createPropertyElement(key, propertyValueElements))
        }
      }
    }
    if (propertiesElements.length > 0) {
      return (
        <div class="properties">
          <ul>{propertiesElements}</ul>
        </div>
      )
    } else {
      return <></>
    }
  }

  PropertiesWithWorkingLinks.css = style
  return PropertiesWithWorkingLinks
}) satisfies QuartzComponentConstructor
