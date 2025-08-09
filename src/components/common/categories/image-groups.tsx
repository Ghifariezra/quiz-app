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
					<motion.div className="relative shadow-lg hover:shadow-indigo-500/50 overflow-hidden rounded-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
						<motion.div
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.3,
								ease: 'easeInOut',
								delay: index * 0.2,
							}}
							style={{ backgroundImage: `url(${image.image})` }}
							className="aspect-square bg-cover bg-center  bg-slate-50 dark:bg-slate-700">
							<motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 1.5 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="relative bg-slate-900/50 w-full h-full">
								<motion.div className="absolute inset-0 flex items-center justify-center text-center">
									<motion.h3 className="text-xs sm:text-lg font-semibold text-slate-50 px-4 py-2 rounded-lg">{image.title}</motion.h3>
								</motion.div>
							</motion.div>
						</motion.div>
					</motion.div>
				</Link>
			))}
		</motion.div>
	);
});
