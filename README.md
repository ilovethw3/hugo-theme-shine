# Shine Hugo Theme

Shine is a configurable Hugo theme for company websites. It separates reusable
templates from the example company's content and keeps the homepage composed of
independent sections.

## Quick start

Copy the exampleSite directory to a new Hugo site, or use it as a reference:

1. Set theme: shine in the site configuration.
2. Copy the example content and data into your site.
3. Replace the content in content/, the homepage data in data/home.yaml,
   and the brand settings in hugo.yaml.
4. Run hugo server from the site root.

The theme does not require a CMS. Content is managed with Markdown, front matter,
and YAML data files.

## Main content types

- products: list and detail pages, galleries, specifications, related products,
  and quote buttons.
- solutions: solution cards and detail pages.
- projects: project/case-study pages.
- news: articles with categories and dates.
- team: team member profiles.
- company: modular company page with hero, story, stats, capabilities, timeline,
  certifications, team, and call-to-action sections.
- products: modular product index, automatic product-category navigation, product
  detail modules, galleries, lightbox image viewing, specifications, downloads,
  certifications, applications, and related products.

## Homepage sections

Homepage sections are declared in data/home.yaml. Each section has a type,
which maps to a partial under layouts/partials/sections/. The order in that
file is the rendered order. A section can be hidden with enabled: false.

## Company page sections

Company sections are declared in data/company.yaml. The section type maps to a
partial under layouts/partials/company/, and the order in that file controls the
page order. Set enabled: false to hide a section, or adjust limit for the team
section. The localized text, images, buttons, and list items belong in:

    content/company/_index.md
    content/company/_index.zh-cn.md

## Product maintenance

Product index sections and product detail sections are declared in
data/products.yaml. Product categories are generated from the
product-categories front matter field, so adding a category to a product also
updates the Products page filter and the Products navigation dropdown.
Use weight to control product order (lower values appear first) and featured:
true to include a product in the homepage featured-products section.

Create new products under content/products/ with one folder per product. Keep
the translated files together:

    content/products/new-product/index.md
    content/products/new-product/index.zh-cn.md

The example site includes an archetype at archetypes/products/index.md. New
products can start from it with `hugo new content products/new-product/index.md`.
Set draft: true while the product is being prepared; change it to false when it
is ready to publish. Product images and download files can be referenced from
static/ or added to the product content bundle. Bundle files are preferred when
the file is stored beside the product Markdown file; the template falls back to
the referenced static path when no bundle resource matches.

Product detail front matter also supports `description` for SEO, `relatedProducts`
for manually selected related products, `certifications`, and grouped
specifications. A specification item can use `group`, `unit`, `range`, and
`note` in addition to `name` and `value`. Module headings can be overridden with
fields such as `highlightsTitle`, `applicationsTitle`, and `downloadsTitle`.

The visible `summary` field supports Markdown in product cards and the product
detail introduction. Keep it concise because it is also used as a short
description. The SEO description and search index convert the same content to
plain text automatically. Use `description` when the SEO wording should differ
from the visible summary.

The product gallery supports thumbnail switching, a full-screen lightbox,
previous/next controls, keyboard arrows and Escape, and touch swiping on mobile.
Set `showQuoteButton: false` to hide both the overview quote button and the
bottom quote call-to-action.

Product and solution body content can use the `video` shortcode. It supports
local Page Bundle files, public URLs such as Cloudflare R2 object URLs, and
embedded YouTube, Bilibili, and Vimeo videos:

    {{< video src="control-panel-c4.mp4" poster="bundle-detail.svg" title="Control Panel C4" >}}
    {{< video src="https://pub-example.r2.dev/videos/control-panel-c4.mp4" poster="/images/product-detail.svg" >}}
    {{< video provider="youtube" id="VIDEO_ID" title="Product overview" >}}
    {{< video provider="youtube" src="https://www.youtube.com/watch?v=VIDEO_ID" title="Product overview" >}}
    {{< video provider="bilibili" id="BV_ID" title="产品介绍" >}}
    {{< video provider="vimeo" id="VIDEO_ID" title="Product overview" >}}

The shortcode provides a responsive 16:9 player by default. Use `aspect="4:3"`,
`aspect="1:1"`, or `aspect="9:16"` when needed. Direct video files should be
publicly reachable and served with the correct MIME type; for Cloudflare R2,
use a public R2 URL or custom domain and configure CORS if the site also needs
cross-origin video processing.

The shared page banner accepts a background image and overlay strength in the
page front matter:

    banner:
      background: "/images/company-banner.jpg"
      backgroundAlt: "Company facility"
      overlay: 0.45

## Solution maintenance

Solution index sections and solution detail sections are declared in
data/solutions.yaml. Solution categories come from the `solution-categories`
front matter field and are available as filter links and taxonomy pages. Use
`weight` to control the display order. Solution detail pages can define
`highlights`, `applications`, `process`, `relatedProducts`, and
`relatedProjects`, plus custom section titles and CTA text.

The solution archetype is at archetypes/solutions/index.md. Solution images can
be stored in static/ or beside the Markdown file in a Page Bundle; local bundle
resources are preferred when a matching file is found.

## Project maintenance

Projects use the dedicated project templates and are maintained under
content/projects/. Add `project-categories` to create project category filters,
and use `weight` to control ordering. Set `featured: true` to visually mark an
important case study in the project grid.

Project details support structured fields for `client`, `industry`, `location`,
`year`, `outcomes`, `relatedProducts`, and `relatedSolutions`. The project body
is regular Markdown, so it also supports images, tables, and the `video`
shortcode. Add a gallery with entries such as:

    gallery:
      - image: "/images/project-site.jpg"
        alt: "Project site"
        caption: "The shared operations view in use."

The project list, detail modules, and project categories are configurable in
data/projects.yaml. Start new entries from archetypes/projects/index.md. Project
cover images can be stored in static/ or beside the Markdown file in a Page
Bundle.

## News maintenance

News uses dedicated list and article templates configured in data/news.yaml.
Articles are sorted newest first and can use `news-categories`, `author`,
`cover`, `relatedNews`, and the automatic Hugo `ReadingTime` value. Start new
articles from archetypes/news/index.md. News category filters are generated from
the `news-categories` front matter field.

## Multilingual sites

The theme uses one set of templates for all languages. A translated page is
stored beside the default-language page with a language suffix, for example:

    content/products/field-node/index.md
    content/products/field-node/index.zh-cn.md

Configure the languages in the site configuration and add matching translation
files under i18n/. The example site demonstrates English and Simplified Chinese
URLs under /en/ and /zh-cn/.

## Optional search

The search page and header search entry are controlled by the site parameter:

    params:
      features:
        search: false

When disabled, the search entry is hidden and the search page shows the disabled
state. When enabled, Hugo generates a language-specific JSON index and the
browser filters it locally.

## Contact form

The Contact page contains both configurable company contact details and a form.
The example is prepared for Formspree. Create a Formspree form, copy its
form-ID endpoint, and set it in the site configuration:

    params:
      forms:
        provider: "formspree"
        contactAction: "https://formspree.io/f/your-form-id"
        ajax: true
        contactSubject: "Website inquiry"
        requireConsent: true

The form uses standard named fields, so Formspree can receive the name, email,
company, phone, interest, message and privacy-consent values. Keep
`contactAction` empty during development if the form should remain visibly
disabled until an endpoint is configured. With `ajax: true` (the default), the
theme submits the form as JSON-compatible AJAX data and displays the success or
error message on the current page instead of redirecting to Formspree's Thank
You page. Set `ajax: false` only if you need native HTML form submission.
Contact address, phone, email, hours
and an optional map link are configured under `params.contact`.

The Contact page is modular and its order is configured in data/contact.yaml.
The available modules are `banner`, `panel`, `map`, and `cta`. The panel can
toggle `showDetails` and `showForm`; set `mapEmbedUrl` or `mapUrl` under
`params.contact` before enabling the map module.

Theme translation files in `i18n/` contain the complete reusable defaults. A
site can add only its customized keys in its own `i18n/` directory; missing
keys fall back to the theme translations. This keeps site-specific wording
out of the reusable theme.

Contact icons are configurable under `params.contact.icons`, for example
`location`, `phone`, `mail`, and `clock` for `address`, `phone`, `email`, and
`hours`. Social links accept an `icon` value
such as `linkedin`, `youtube`, `facebook`, `instagram`, `x`, `wechat`, or
`whatsapp`. An icon value can also be a local or external image/SVG URL; omit
`showName: false` when an icon-only social link is preferred.

The footer supports independent visibility switches under `params.footer`:
`showBrand`, `showSocial`, `showLinks`, `showContact`, `showNewsletter`, and
`showLegal`. The newsletter block is rendered only when both
`features.newsletter` is enabled and `forms.newsletterAction` is configured.
The footer description uses the current language's home-page description before
falling back to `params.seo.description`.

## FAQ page

The FAQ page is a standalone, multilingual page at `/faq/`. Its module order
is configured in `data/faq.yaml`; the questions and answers belong in the
translated page front matter at `content/faq/_index.md` and
`content/faq/_index.zh-cn.md`. The page uses native HTML `details` elements,
so the accordion works without JavaScript and remains keyboard accessible.
The example site links to the FAQ from the footer and the Contact page, while
keeping it out of the main navigation by default.
