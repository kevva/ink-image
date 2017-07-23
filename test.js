import {h, renderToString} from 'ink';
import {string as termImgString} from 'term-img';
import test from 'ava';
import Image from '.';

test('render', t => {
	let fallback;

	const actual = renderToString(<Image src='./fixture.png'/>);
	const expected = termImgString('./fixture.png', {
		fallback: () => {
			fallback = '';
		}
	});

	t.is(actual, expected || fallback);
});

test('pass props to ansi-escapes', t => {
	let fallback;

	const actual = renderToString(<Image preserveAspectRatio src='./fixture.png' width='5px'/>);
	const expected = termImgString('./fixture.png', {
		width: '5px',
		preserveAspectRatio: true,
		fallback: () => {
			fallback = '';
		}
	});

	t.is(actual, expected || fallback);
});

test.serial('alt text', t => {
	const TERM_PROGRAM = process.env.TERM_PROGRAM;
	process.env.TERM_PROGRAM = 'Unicorn.app';
	t.is(renderToString(<Image src='./fixture.png' alt='Hello'/>), 'Hello');
	process.env.TERM_PROGRAM = TERM_PROGRAM;
});
