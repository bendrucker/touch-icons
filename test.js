'use strict'

var test = require('tape')
var touchIcons = require('./')

test(function (t) {
  t.deepEqual(touchIcons([76, 120], createHref), [
    {rel: 'icon', sizes: '76x76', href: '76.jpg'},
    {rel: 'apple-touch-icon', sizes: '76x76', href: '76.jpg'},
    {rel: 'icon', sizes: '120x120', href: '120.jpg'},
    {rel: 'apple-touch-icon', sizes: '120x120', href: '120.jpg'}
  ])

  t.end()

  function createHref (size) {
    return size + '.jpg'
  }
})
