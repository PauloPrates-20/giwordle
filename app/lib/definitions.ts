export type LetterState = 'wrong' | 'misplaced' | 'correct' | undefined

export type LetterProps = {
	letter: string;
	letterState: LetterState;
	position: number;
	handleChange: (value: string, position: number) => void;
}