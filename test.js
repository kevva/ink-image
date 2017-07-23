import fs from 'fs';
import ansiEscapes from 'ansi-escapes';
import {h, renderToString} from 'ink';
import test from 'ava';
import Image from '.';

test('render', t => {
	const actual = renderToString(<Image src='./fixture.png'/>);
	const expected = renderToString(<span>{ansiEscapes.image(fs.readFileSync('./fixture.png'))}</span>);

	t.is(actual, expected);
});

test('pass props to ansi-escapes', t => {
	const actual = renderToString(<Image preserveAspectRatio src='./fixture.png' width='5px'/>);
	const expected = renderToString(
		<span>
			{ansiEscapes.image(fs.readFileSync('./fixture.png'), {
				width: '5px',
				preserveAspectRatio: true
			})}
		</span>
	);

	t.is(actual, expected);
});
