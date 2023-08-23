// @ts-check

/** @type {EmojiEntry[]} */
const emoji = require("emoji-datasource/emoji.json");
const titleize = require("../filters/titleize.cjs");

module.exports = async function () {
  const { slugifyWithCounter } = await import("@sindresorhus/slugify");
  const permalink = slugifyWithCounter();
  return {
    all: emoji.map((e) => {
      const character = String.fromCodePoint(
        ...e.unified.split("-").map((p) => parseInt(p, 16))
      );

      return {
        ...e,
        title: `${character} ${titleize(e.name)}`,
        vendors: vendors.filter((v) => e[`has_img_${v.id}`]),
        codepoints: e.unified.split("-").map((p) => `U+${p}`),
        position: `${e.sheet_x * -66}px ${e.sheet_y * -66}px`,
        character,
        permalink: permalink(e.name, {
          decamelize: false,
        }),
      };
    }),
  };
};

const vendors = [
  { id: "apple", name: "Apple" },
  { id: "google", name: "Google" },
  { id: "facebook", name: "Facebook" },
  { id: "twitter", name: "Twitter" },
];

const skinVariations = Object.freeze({
  "1F3FB": "skin-tone-2",
  "1F3FB-1F3FB": "skin-tone-2",
  "1F3FB-1F3FC": "skin-tone-2-3",
  "1F3FB-1F3FD": "skin-tone-2-4",
  "1F3FB-1F3FE": "skin-tone-2-5",
  "1F3FB-1F3FF": "skin-tone-2-6",
  "1F3FC": "skin-tone-3",
  "1F3FC-1F3FB": "skin-tone-3-2",
  "1F3FC-1F3FC": "skin-tone-3",
  "1F3FC-1F3FD": "skin-tone-3-4",
  "1F3FC-1F3FE": "skin-tone-3-5",
  "1F3FC-1F3FF": "skin-tone-3-6",
  "1F3FD": "skin-tone-4",
  "1F3FD-1F3FB": "skin-tone-4-2",
  "1F3FD-1F3FC": "skin-tone-4-3",
  "1F3FD-1F3FD": "skin-tone-4",
  "1F3FD-1F3FE": "skin-tone-4-5",
  "1F3FD-1F3FF": "skin-tone-4-6",
  "1F3FE": "skin-tone-5",
  "1F3FE-1F3FB": "skin-tone-5-2",
  "1F3FE-1F3FC": "skin-tone-5-3",
  "1F3FE-1F3FD": "skin-tone-5-4",
  "1F3FE-1F3FE": "skin-tone-5",
  "1F3FE-1F3FF": "skin-tone-5-6",
  "1F3FF": "skin-tone-6",
  "1F3FF-1F3FB": "skin-tone-6-2",
  "1F3FF-1F3FC": "skin-tone-6-3",
  "1F3FF-1F3FD": "skin-tone-6-4",
  "1F3FF-1F3FE": "skin-tone-6-5",
  "1F3FF-1F3FF": "skin-tone-6",
});

/**
 * @typedef {Object} BaseEmojiEntry
 * @property {string} unified
 * @property {string | null} non_qualified
 * @property {string} image
 * @property {number} sheet_x
 * @property {number} sheet_y
 * @property {string} added_in
 * @property {boolean} has_img_apple
 * @property {boolean} has_img_facebook
 * @property {boolean} has_img_google
 * @property {boolean} has_img_twitter
 * @property {string} [obsoletes]
 * @property {string} [obsoleted_by]
 */

/**
 * @typedef {Object} EmojiEntry
 * @property {string} name
 * @property {string | null} docomo
 * @property {string | null} au
 * @property {string | null} softbank
 * @property {string | null} google
 * @property {string} short_name
 * @property {string[]} short_names
 * @property {string | null} text
 * @property {string[] | null} texts
 * @property {string} category
 * @property {string} subcategory
 * @property {number} sort_order
 * @property {Partial<Record<keyof typeof skinVariations, BaseEmojiEntry>>} [skin_variations]
 *
 * // extends BaseEmojiEntry
 * @property {string} unified
 * @property {string | null} non_qualified
 * @property {string} image
 * @property {number} sheet_x
 * @property {number} sheet_y
 * @property {string} added_in
 * @property {boolean} has_img_apple
 * @property {boolean} has_img_facebook
 * @property {boolean} has_img_google
 * @property {boolean} has_img_twitter
 * @property {string} [obsoletes]
 * @property {string} [obsoleted_by]
 */
