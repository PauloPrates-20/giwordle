import Letter from '@/app/components/letter';

export default function Word({ word }: { word: string }) {
	const letters = [];
	
	for (const letter of word) {
		letters.push(letter);
	}

	return (
		<p className='flex flex-row gap-3'>
			{letters.map((letter: string, index: number) => (
				<Letter letter={letter} key={index} />
			))}
		</p>
	);
}