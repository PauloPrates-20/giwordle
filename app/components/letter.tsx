'use client';

import { useState, useEffect } from 'react';
import { LetterState } from '../lib/definitions';

export default function Letter({ letter }: { letter: string }) {
	const [letterState, setLetterState] = useState<LetterState>(null);

	useEffect(() => {
		setLetterState(null);
	}, [])

	return (
		<span 
			className={`flex flex-row justify-center items-center text-2xl border-solid border-2 border-black w-7 h-7 md:w-16 md:h-16 md:text-5xl`}
		>
			{letterState && letter}
		</span>
	);
}