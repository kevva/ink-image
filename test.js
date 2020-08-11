import {serial as test} from 'ava';
import React from 'react';
import {render} from 'ink-testing-library';
import terminalImage from 'terminal-image';
import delay from 'delay';
import Image from '.';

test('render', async t => {
	const actual = render(<Image src='./fixture.png'/>);
	const expected = await terminalImage.file('./fixture.png');

	await delay(2000);

	t.is(actual.lastFrame(), expected);
});

test('pass props to ansi-escapes', async t => {
	const actual = render(<Image preserveAspectRatio src='./fixture.png' width={5}/>);
	const expected = await terminalImage.file('./fixture.png', {
		width: 5,
		preserveAspectRatio: true
	});

	await delay(2000);

	t.is(actual.lastFrame(), expected);
});
