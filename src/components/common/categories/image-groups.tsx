import { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import type { Images } from '@/types/image-quiz';
import { useFinishState } from '@/hooks/quiz/useFinishState';

export const ImageGroups = memo(({ ImageQuiz, difficulty }: { ImageQuiz: Images[]; difficulty: string }) => {
	const { resetQuizProgress } = useFinishState();
	return (
		<motion.div viewport={{ once: true }} className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8`}>
			{ImageQuiz.map((image, index) => (
				<Link
					to={{
						pathname: '/quiz',
						search: `?category=${image.title.replace(' ', '')}&difficulty=${difficulty}`,
					}}
					onClick={resetQuizProgress}
					key={index}>
					<motion.div
						className="relative shadow-lg shadow-slate-500/20 dark:shadow-indigo-500/50 overflow-hidden rounded-lg"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}>
						<motion.div
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.3,
								ease: 'easeInOut',
								delay: index * 0.2,
							}}
							style={{ backgroundImage: `url(${image.image})` }}
							className="aspect-square bg-cover bg-center scale-80">
							<motion.div className="relative flex w-full h-full">
								<motion.div 
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.3,
									ease: 'easeInOut',
									delay: index * 0.2,
								}}
								className="absolute inset-0 flex w-fit h-fit dark:bg-indigo-500 bg-indigo-300 rounded-sm">
									<motion.h3 className="text-lg sm:text-xl font-semibold text-slate-50 px-4 py-0 rounded-lg">{image.title}</motion.h3>
								</motion.div>
							</motion.div>
						</motion.div>
					</motion.div>
				</Link>
			))}
		</motion.div>
	);
});
