# ink-image [![Build Status](https://travis-ci.org/kevva/ink-image.svg?branch=master)](https://travis-ci.org/kevva/ink-image)

> Image component for [Ink](https://github.com/vadimdemedes/ink)

![](screenshot.png)

*Currently only supported on [iTerm >=3](https://www.iterm2.com/downloads.html).*


## Install

```
$ npm install ink-image
```


## Usage

```js
const {h, render} = require('ink');
const Image = require('ink-image');

render((
	<div>
		<Image preserveAspectRatio src='unicorn.jpg' width='50%'/>
	</div>
));
```


## API

### &lt;Image/&gt;

Besides the props below, it accepts props allowed in [ansi-escapes](https://github.com/sindresorhus/ansi-escapes#options).

#### src

Type: `string` `Buffer`

Path to an image or a `Buffer`.

#### alt

Type: `string`

Alternative text to show when an image can't be displayed.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
