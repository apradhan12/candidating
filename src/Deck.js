import './Deck.css';

import React, { useState } from 'react';

import Card from './Card';
import ViewMatchesCard from './ViewMatchesCard';
import data from './data';
import { useGesture } from 'react-with-gesture';
import { useSprings } from 'react-spring/hooks';

function shuffle(a) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[ a[i], a[j] ] = [ a[j], a[i] ];
	}
	return a;
}

shuffle(data);

const to = (i) => ({
	x: 0,
	y: i * -10,
	scale: 1,
	delay: i * 100
});

const from = (i) => ({ rot: 0, scale: 1.5, y: -1000 });

const trans = (r, s) => `scale(${s})`;

function Deck() {
	const [ gone ] = useState(() => new Set());

	const [ matches, setMatches ] = useState([]);

	const [ props, set ] = useSprings(data.length, (i) => ({
		...to(i),
		from: from(i)
	}));

	const bind = useGesture(({ args: [ index ], down, delta: [ xDelta ], direction: [ xDir ], velocity }) => {
		const trigger = velocity > 0.2;

		const dir = xDir < 0 ? -1 : 1;

		if (!down && trigger) gone.add(index);

		if (!down && trigger && dir === 1) {
			setMatches((matches) => [ ...matches, index ]);
		}

		set((i) => {
			if (index !== i) return;
			const isGone = gone.has(index);

			const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;

			const scale = down ? 1.1 : 1;
			const obj = {
				x,
				scale,
				delay: undefined,
				config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 }
			};
			return obj;
		});
	});

	// console.log(matches);

	const cards = [ <ViewMatchesCard key="foo" matches={matches} /> ];

	// The Deck
	cards.push(
		props.map(({ x, y, rot, scale }, i) => (
			<Card i={i} x={x} y={y} rot={rot} scale={scale} trans={trans} data={data} bind={bind} key={i} />
		))
	);

	return cards;
}

export default Deck;
