'use strict';
const fs = require('fs');
const ansiEscapes = require('ansi-escapes');
const {h} = require('ink');
const omit = require('lodash.omit');
const propTypes = require('prop-types');

const getImg = src => typeof src === 'string' ? fs.readFileSync(src) : src;

const Image = props => (
	<div>
		{ansiEscapes.image(getImg(props.src), omit(props, 'src'))}
	</div>
);

Image.propTypes = {
	src: propTypes.string.isRequired
};

module.exports = Image;
