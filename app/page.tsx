import Word from '@/app/components/word';

export default function Home() {
	const frase = "VOCÊ MORA NO MEU CORAÇÃO";
	const words = frase.split(' ');

  return (
		<main className='w-3/4 mx-auto sm:ml-auto sm:mr-0'>
			<h1 className='mt-24 text-center font-bold text-2xl sm:text-4xl sm:text-left mb-10'>GI WORDLE</h1>
			<div className='flex flex-col gap-3 w-auto h-dvh justify-start'>
				{words.map((word: string, index: number)=> (
					<Word word={word} key={index} />
				))}
			</div>
		</main>
  );
}
