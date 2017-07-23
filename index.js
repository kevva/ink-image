'use strict';
const {h, Component} = require('ink');
const omit = require('lodash.omit');
const propTypes = require('prop-types');
const termImg = require('term-img');

class Image extends Component {
	constructor(props) {
		super(props);

		const img = termImg.string(props.src, Object.assign(omit(this.props, ['alt', 'src']), {
			fallback: () => {
				this.state = {img: props.alt};
			}
		}));

		if (img) {
			this.state = {img};
		}
	}

	render(props, {img}) {
		return (
			<span>
				{img}
			</span>
		);
	}
}

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
