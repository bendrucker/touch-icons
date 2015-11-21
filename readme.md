# touch-icons [![Build Status](https://travis-ci.org/bendrucker/touch-icons.svg?branch=master)](https://travis-ci.org/bendrucker/touch-icons)

> Create touch icon data for multiple icon sizes


## Install

```
$ npm install --save touch-icons
```


## Usage

```js
var touchIcons = require('touch-icons')

touchIcons([76], function createHref (size) {
  return size + '.jpg'
})
//=> [{rel: 'icon', sizes: '76x76', href: 76.jpg}, {rel: 'apple-touch-icon', sizes: '76x76', href: '76.jpg'}]
```

## API

#### `touchIcons(sizes, createHref)` -> `array[object]`

##### sizes

*Required*  
Type: `array[number]`

An array of pixel sizes for the icons.

##### createHref

*Required*  
Type: `function`  
Arguments: `size`

A function that will be called for each size to generate the image URL.


## License

MIT © [Ben Drucker](http://bendrucker.me)
