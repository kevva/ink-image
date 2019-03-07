import {serial as test} from 'ava';
import React from 'react';
import {render} from 'ink-testing-library';
import {string as termImgString} from 'term-img';
import Image from '.';

test('render', t => {
	const actual = render(<Image src='./fixture.png'/>);
	const expected = termImgString('./fixture.png', {
		fallback: () => ''
	});

	t.is(actual.lastFrame(), expected);
});

test('pass props to ansi-escapes', t => {
	const actual = render(<Image preserveAspectRatio src='./fixture.png' width='5px'/>);
	const expected = termImgString('./fixture.png', {
		width: '5px',
		preserveAspectRatio: true,
		fallback: () => ''
	});

	t.is(actual.lastFrame(), expected);
});

test('alt text', t => {
	const {TERM_PROGRAM} = process.env;
	process.env.TERM_PROGRAM = 'Unicorn.app';
	t.is(render(<Image src='./fixture.png' alt='Hello'/>).lastFrame(), 'Hello');
	process.env.TERM_PROGRAM = TERM_PROGRAM;
});
