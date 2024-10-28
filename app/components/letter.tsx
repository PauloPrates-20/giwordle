'use client';

 import { LetterProps } from '../lib/definitions';
 import { useState, useRef, useEffect } from 'react';

export default function Letter({ letter, letterState, letterIndex, wordIndex, handleChange, active, setActiveLetter, setActiveWord }: LetterProps) {
	const [inputValue, setInputValue] = useState<string>('');
	const inputRef = useRef<HTMLInputElement>(null);

	const colors = {
		wrong: '#b91c1c',
		misplaced: '#fbbf24',
		correct: '#4ade80',
	};

	useEffect(() => {
		if (active && inputRef.current) {
			inputRef.current.focus();
		}
	}, [active]);

	useEffect(() => {
		if (inputValue) {
			handleChange(inputValue, letterIndex);
		}
	}, [inputValue]);

	function handleKeyboard(e: React.KeyboardEvent<HTMLInputElement>) {
		const key = e.key.toUpperCase();
		if (key.length === 1) {
			setInputValue(key);
		}
	}

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.target.value.toUpperCase();

		if (value.length <= 1) {
			setInputValue(value);
		}
	}

	function toggleActive() {
		setActiveLetter(letterIndex);
		setActiveWord(wordIndex);
	}

	return (
		<input 
			ref={inputRef}
			onKeyDown={handleKeyboard}
			onChange={handleInputChange}
			onFocus={toggleActive}
			value={letterState === 'correct' ? letter : inputValue}
			className={`flex flex-row justify-center items-center text-3xl border-solid border-2 ${active && 'border-b-4'} border-black w-9 h-9 sm:w-16 sm:h-16 sm:text-5xl text-center bg-rose-300 text-slate-100`}
			style={letterState && {backgroundColor: colors[letterState] }}
		/>
	);
}