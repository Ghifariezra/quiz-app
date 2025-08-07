import { HomeLayout } from '@/components/layouts/home';
import { motion } from 'motion/react';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ImageQuiz = [
	{
		title: 'Linux',
		image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWJ1bnR1fGVufDB8fDB8fHww',
	},
	{
		title: 'DevOps',
		image: 'https://images.unsplash.com/photo-1667372335937-d03be6fb0a9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2b3BzfGVufDB8fDB8fHww',
	},
	{
		title: 'Networking',
		image: 'https://images.unsplash.com/photo-1546124404-9e7e3cac2ec1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV0d29ya2luZyUyMGl0fGVufDB8fDB8fHww',
	},
	{
		title: 'Programming',
		image: 'https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D',
	},
	{
		title: 'Cloud',
		image: 'https://plus.unsplash.com/premium_photo-1683120968693-9af51578770e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdWQlMjBzZXJ2aWNlfGVufDB8fDB8fHww',
	},
	{
		title: 'Docker',
		image: 'https://images.unsplash.com/photo-1646627927863-19874c27316b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9ja2VyfGVufDB8fDB8fHww',
	},
	{
		title: 'Kubernetes',
		image: 'https://images.unsplash.com/photo-1667372459534-848ec00d4da7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a3ViZXJuZXRlc3xlbnwwfHwwfHx8MA%3D%3D',
	},
	{
		title: 'And lots more',
		image: 'https://images.unsplash.com/photo-1683474667912-ce66f3412986?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vcmV8ZW58MHx8MHx8fDA%3D',
	},
];

const Difficultys = ['Easy', 'Medium', 'Hard'];

const ImageGroups = memo(({ difficulty }: { difficulty: string }) => {
	return (
		<div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4`}>
			{ImageQuiz.map((image, index) => (
				<Link
					to={{
						pathname: '/quiz',
						search: `?category=${image.title}&difficulty=${difficulty}`,
					}}
					key={index}>
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.5,
							ease: 'easeInOut',
							delay: index * 0.2,
						}}
						style={{ backgroundImage: `url(${image.image})` }}
						className="aspect-video sm:aspect-square bg-cover bg-center scale-90 rounded-lg overflow-hidden drop-shadow-xl drop-shadow-slate-500/50 dark:drop-shadow-white-500/50">
						<motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 1.5 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="relative bg-slate-900/50 w-full h-full">
							<div className="absolute inset-0 flex items-center justify-center text-center">
								<h3 className="text-xs sm:text-lg font-semibold text-slate-50 px-4 py-2 rounded-lg scale-120">{image.title}</h3>
							</div>
						</motion.div>
					</motion.div>
				</Link>
			))}
		</div>
	);
});

function QuizContents() {
	const [diff, setDiff] = useState<string>(Difficultys[0]);
	const [dropdown, setDropdown] = useState<boolean>(false);
	const Category = 'Categories';

	const getDiff = useCallback(
		(diff: string) => {
			setDiff(diff);
		},
		[setDiff]
	);

	const handleDropdown = useCallback(() => {
		setDropdown(!dropdown);
	}, [dropdown]);

	return (
		<HomeLayout id="categories" className='py-8'>
			<div className="flex flex-col sm:grid sm:grid-cols-4 gap-4">
				<div className="sm:col-span-1 flex flex-col gap-4 sm:gap-8">
					<h2 className="text-lg sm:text-2xl font-bold">Difficulty:</h2>
					<div className="flex flex-col gap-2">
						<div onClick={handleDropdown} className="flex justify-between px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800 duration-500 ease-in-out rounded-md cursor-pointer border-1 font-medium text-base">
							{diff}
							{dropdown ? <ChevronUp /> : <ChevronDown />}
						</div>
						{dropdown && (
							<div className="flex flex-col w-full border-1 overflow-hidden rounded-md font-medium">
								{Difficultys.map((level, index) => (
									<motion.ul
										key={index}
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{
											duration: 0.3,
											delay: index * 0.1,
											ease: 'easeInOut',
										}}>
										<motion.li
											whileTap={{ scale: 1.1 }}
											transition={{ duration: 0.3, ease: 'easeInOut' }}
											className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer text-sm md:text-base duration-500 ease-in-out text-center"
											onClick={() => getDiff(level)}>
											{level}
										</motion.li>
									</motion.ul>
								))}
							</div>
						)}
					</div>
				</div>
				<div className="sm:col-span-3 flex flex-col gap-8">
					<h1 className="block text-2xl font-bold text-center underline underline-offset-12 decoration-wavy decoration-1">
						{Category.split('').map((word, index) => (
							<motion.span
								key={index}
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.3,
									delay: index * 0.1,
									ease: 'easeInOut',
								}}>
								{word}
							</motion.span>
						))}
					</h1>
					<ImageGroups difficulty={diff} />
				</div>
			</div>
		</HomeLayout>
	);
}

export default memo(QuizContents);
