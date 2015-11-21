'use strict'

var rels = ['icon', 'apple-touch-icon']

module.exports = function touchIcons (sizes, createHref) {
  return sizes.reduce(function (acc, size) {
    return acc.concat(rels.map(function (rel) {
      return {
        rel: rel,
        sizes: x(size),
        href: createHref(size)
      }
    }))
  }, [])
}

function x (size) {
  return size + 'x' + size
}
