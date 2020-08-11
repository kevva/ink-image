/* eslint-disable react/no-unused-prop-types */
'use strict';
const {Text} = require('ink');
const terminalImage = require('terminal-image');
const propTypes = require('prop-types');
const React = require('react');
const fileType = require('file-type');

const {useState, useEffect} = React;

const Image = props => {
	const [imageData, setImageData] = useState('');

	useEffect(() => {
		let isPlaying = true;
		(async () => {
			if (Buffer.isBuffer(props.src)) {
				if ((await fileType.fromBuffer(props.src)) === 'gif') {
					const stopAnimation = terminalImage.gifBuffer(props.src, {
						...props,
						renderFrame: imageData => {
							if (isPlaying) {
								setImageData(imageData);
							} else {
								stopAnimation();
							}
						}
					});
				} else {
					setImageData(await terminalImage.buffer(props.src, props));
				}
			} else if ((await fileType.fromFile(props.src)) === 'gif') {
				const stopAnimation = terminalImage.gifFile(props.src, {
					...props,
					renderFrame: imageData => {
						if (isPlaying) {
							setImageData(imageData);
						} else {
							stopAnimation();
						}
					}
				});
			} else {
				setImageData(await terminalImage.file(props.src, props));
			}
		})();

		return () => {
			isPlaying = false;
		};
	}, [props]);

	return <Text>{imageData}</Text>;
};

Image.propTypes = {
	src: propTypes.oneOfType([
		propTypes.object,
		propTypes.string
	]).isRequired,
	width: propTypes.oneOfType([
		propTypes.number,
		propTypes.string
	]),
	height: propTypes.oneOfType([
		propTypes.number,
		propTypes.string
	]),
	preserveAspectRatio: propTypes.bool,
	maximumFrameRate: propTypes.number
};

Image.defaultProps = {
	width: '100%',
	height: '100%',
	preserveAspectRatio: true,
	maximumFrameRate: 30
};

module.exports = Image;
