export type LetterState = 'wrong' | 'misplaced' | 'correct' | undefined

export type LetterProps = {
	letter: string;
	letterState: LetterState;
	letterIndex: number;
	wordIndex: number;
	active: boolean;
	handleChange: (value: string, position: number) => void;
	setActiveLetter: (index: number) => void;
	setActiveWord: (index: number) => void;
}

export type WordProps = {
	word: string;
	wordCount: number;
	wordIndex: number;
	active: boolean;
	setActive: (index: number) => void;
}