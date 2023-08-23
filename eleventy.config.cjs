// @ts-check

/**
 * @param {import('@11ty/eleventy').UserConfig} config
 * @returns {EleventyConfig}
 */
module.exports = function (config) {
  config.addFilter("titleize", require("./src/filters/titleize.cjs"));
  config.addPassthroughCopy({
    [require.resolve("emoji-datasource-apple/img/apple/sheets/64.png")]:
      "/static/emoji/apple/sheet-64.png",
    [require.resolve("emoji-datasource-facebook/img/facebook/sheets/64.png")]:
      "/static/emoji/facebook/sheet-64.png",
    [require.resolve("emoji-datasource-google/img/google/sheets/64.png")]:
      "/static/emoji/google/sheet-64.png",
    [require.resolve("emoji-datasource-twitter/img/twitter/sheets/64.png")]:
      "/static/emoji/twitter/sheet-64.png",
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};

/**
 * @typedef {Object} EleventyConfigDirectories
 * @property {string} [input="."]
 *    See: {@link https://www.11ty.dev/docs/config/#input-directory Input Directory}.
 *    Controls the top level directory/file/glob that we’ll use to look for
 *    templates.
 *
 * @property {string} [includes="_includes"]
 *    See: {@link https://www.11ty.dev/docs/config/#directory-for-includes Directory for Includes}.
 *    The includes directory is meant for
 *    [Eleventy layouts](https://www.11ty.dev/docs/layouts/), `include`
 *    files, `extends` files, partials, or macros. These files will not be
 *    processed as full template files, but can be consumed by other templates.
 *
 * @property {string} [layouts]
 *    See: {@link https://www.11ty.dev/docs/config/#directory-for-layouts-(optional) Directory for Layouts (optional)}.
 *    This configuration option is optional but useful if you want your
 *    [Eleventy layouts](https://www.11ty.dev/docs/layouts/) to live outside of
 *    the {@link EleventyConfigDirectories.includes Includes directory}. Just
 *    like the {@link EleventyConfigDirectories.includes Includes directory},
 *    these files will not be processed as full template files, but can be
 *    consumed by other templates.
 *
 * @property {string} [data="_data"]
 *    See: {@link https://www.11ty.dev/docs/config/#directory-for-global-data-files Directory for Global Data Files}.
 *    Controls the directory inside which the global data template files,
 *    available to all templates, can be found. Read more about
 *    [Global Data Files](https://www.11ty.dev/docs/data-global/)
 *
 * @property {string} [output="_site"]
 *    See: {@link https://www.11ty.dev/docs/config/#output-directory Output Directory}.
 *    Controls the directory inside which the finished templates will be
 *    written to.
 */

/**
 * @typedef {"11ty.js" | "ejs" | "haml" | "hbs" | "html" | "liquid" | "mustache" | "md" | "njk" | "pug" | "webc"} TemplateEngineShortName
 */

/**
 * Defines a configuration object returned to 11ty.
 * See: {@link https://www.11ty.dev/docs/config/}
 *
 * @typedef {Object} EleventyConfig
 *
 * @property {EleventyConfigDirectories} [dir]
 *    Directory configuration options for 11ty. Controls input, includes,
 *    layouts, data, and output.
 *
 * @property {TemplateEngineShortName|false} [markdownTemplateEngine="liquid"]
 *    See: {@link https://www.11ty.dev/docs/config/#default-template-engine-for-markdown-files Default Template Engine for Markdown Files}.
 *    Markdown files run through this template engine before transforming
 *    to HTML.
 * @property {TemplateEngineShortName|false} [htmlTemplateEngine="liquid"]
 *    See: {@link https://www.11ty.dev/docs/config/#default-template-engine-for-html-files Default Template Engine for HTML Files}.
 *    HTML templates run through this template engine before transforming to
 *    (better) HTML.
 * @property {TemplateEngineShortName[]} [templateFormats]
 *    See: {@link https://www.11ty.dev/docs/config/#template-formats Template Formats}.
 *    Specify which types of templates should be transformed.
 * @property {string} [pathPrefix="/"]
 *    See: {@link https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix Deploy to a Subdirectory With a Path Prefix}.
 *    If your site lives in a different subdirectory (particularly useful with
 *    GitHub pages), use pathPrefix to specify this. It’s used by the `url`
 *    filter and inserted at the beginning of all absolute url href links. It
 *    does not affect your file structure. Leading or trailing slashes are all
 *    normalized away, so don’t worry about it.
 * @property {string} [htmlOutputSuffix="-o"]
 *    Se: {@link https://www.11ty.dev/docs/config/#change-exception-case-suffix-for-html-files Change Exception Case Suffix for HTML Files}.
 *    If an HTML template has matching input and output directories, index.html
 *    files will have this suffix added to their output filename to prevent
 *    overwriting the template. Read more at the [HTML template docs].
 *
 *    [HTML template docs]: https://www.11ty.dev/docs/languages/html/#using-the-same-input-and-output-directories
 */
