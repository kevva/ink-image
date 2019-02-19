import React from 'react';
import {renderToString} from 'ink';
import {string as termImgString} from 'term-img';
import test from 'ava';
import Image from '.';

test('render', t => {
	const actual = renderToString(<Image src='./fixture.png'/>);
	const expected = termImgString('./fixture.png', {
		fallback: () => ''
	});

	t.is(actual, expected);
});

test('pass props to ansi-escapes', t => {
	const actual = renderToString(<Image preserveAspectRatio src='./fixture.png' width='5px'/>);
	const expected = termImgString('./fixture.png', {
		width: '5px',
		preserveAspectRatio: true,
		fallback: () => ''
	});

	t.is(actual, expected);
});

test.serial('alt text', t => {
	const {TERM_PROGRAM} = process.env;
	process.env.TERM_PROGRAM = 'Unicorn.app';
	t.is(renderToString(<Image src='./fixture.png' alt='Hello'/>), 'Hello');
	process.env.TERM_PROGRAM = TERM_PROGRAM;
});
