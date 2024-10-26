'use client';

import Letter from '@/app/components/letter';
import { useState } from 'react';
import { LetterState } from '../lib/definitions';

export default function Word({ word }: { word: string }) {
	const letters = word.split('');
	const [letterState, setLetterState] = useState<LetterState[]>(Array(letters.length).fill(undefined));

	function handleChange(value: string, position: number) {
		let newState: LetterState = 'wrong';
		const normalizedLetters = letters.map(letter => 
			(letter.normalize('NFD').length > 1 ? letter.normalize('NFD').replace(/[\W]/g, '') : letter));

		if (value === '') {
			newState = undefined;
		}
		else if (normalizedLetters.includes(value) || letters.includes(value)) {
			if (normalizedLetters[position] === value || letters[position] === value) {
				newState = 'correct';
			} else {
				newState = 'misplaced';
			}
		}

		setLetterState(previousState => 
			previousState.map((state: LetterState, index: number) => (index === position ? newState : state))
		);

		console.log(newState);
	}

	return (
		<p className='flex flex-row gap-3'>
			{letters.map((letter: string, index: number) => (
				<Letter letter={letter} letterState={letterState[index]} key={index} position={index} handleChange={handleChange} />
			))}
		</p>
	);
}