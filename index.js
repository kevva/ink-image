'use strict';
const React = require('react');
const {Box} = require('ink');
const omit = require('lodash.omit');
const propTypes = require('prop-types');
const termImg = require('term-img');

const Image = props => (
	<Box>
		{termImg.string(props.src, Object.assign(omit(props, ['alt', 'src']), {
			fallback: () => props.alt
		}))}
	</Box>
);

Image.propTypes = {
	alt: propTypes.string,
	src: propTypes.oneOfType([
		propTypes.object,
		propTypes.string
	]).isRequired
};

Image.defaultProps = {
	alt: ''
};

module.exports = Image;
