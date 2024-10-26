'use client';

 import { LetterProps } from '../lib/definitions';
 import { useState } from 'react';

export default function Letter({ letter, letterState, position, handleChange }: LetterProps) {
	const [inputValue, setInputValue] = useState<string>('');
	const colors = {
		wrong: '#b91c1c',
		misplaced: '#fbbf24',
		correct: '#4ade80',
	};

	function handleKeyboard(e: React.KeyboardEvent<HTMLInputElement>) {
		const key = e.key.toUpperCase();
		if (key.length === 1) {
			setInputValue(key);
			handleChange(key, position);
		}
	}

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.target.value.toUpperCase();

		if (value.length <= 1) {
			setInputValue(value);
			handleChange(value, position);
		}
	}

	return (
		<input 
			onKeyDown={handleKeyboard}
			onChange={handleInputChange}
			value={letterState === 'correct' ? letter : inputValue}
			className={`flex flex-row justify-center items-center text-3xl border-solid border-2 border-black w-9 h-9 sm:w-16 sm:h-16 sm:text-5xl text-center bg-rose-300 text-slate-100`}
			style={letterState && { backgroundColor: colors[letterState] }}
		/>
	);
}