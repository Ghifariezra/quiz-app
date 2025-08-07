import { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import type { Images } from '@/types/image-quiz';

export const ImageGroups = memo(({ ImageQuiz, difficulty }: { ImageQuiz: Images[]; difficulty: string }) => {
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
