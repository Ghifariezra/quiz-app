import { QuizLayout } from '@/components/layouts/quiz';
import { motion } from 'motion/react';
import { memo } from 'react';

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

const ImageGroups = memo(() => {
	return (
		<div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4`}>
			{ImageQuiz.map((image, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.5,
						ease: 'easeInOut',
						delay: index * 0.2,
					}}
					style={{ backgroundImage: `url(${image.image})` }}
					className="aspect-video sm:aspect-square bg-cover bg-center scale-90 rounded-lg overflow-hidden cursor-pointer shadow-sm shadow-slate-900/30 dark:shadow-slate-50/50">
					<motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 1.5 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="relative bg-slate-900/50 w-full h-full">
						<div className="absolute inset-0 flex items-center justify-center text-center">
							<h3 className="text-lg font-semibold text-slate-50 px-4 py-2 rounded-lg scale-120">{image.title}</h3>
						</div>
					</motion.div>
				</motion.div>
			))}
		</div>
	);
});

function QuizContents() {
	const Category ="Categories";
	return (
		<QuizLayout>
			<div className="flex flex-col gap-8">
				<h1 className="block text-2xl font-bold text-center underline underline-offset-12 decoration-wavy decoration-1">
					{
						Category.split('').map((word, index) => (
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
						))
					}
				</h1>
				<ImageGroups />
			</div>
		</QuizLayout>
	);
}

export default memo(QuizContents);
