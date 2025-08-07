import { motion } from 'motion/react';
import { memo } from 'react';
export const CategoryTitle = memo(() => {
	const Category = 'Categories';

	return (
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
	);
});
