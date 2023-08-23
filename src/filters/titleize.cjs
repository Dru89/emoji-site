// @ts-check

/**
 * @param {string} content
 * @returns {string}
 */
module.exports = function titleize(content) {
  if (typeof content !== "string") {
    throw new TypeError("expected a string");
  }

  return content.toLowerCase().replace(/(?:^|\s|-)\S/g, (c) => c.toUpperCase());
};
