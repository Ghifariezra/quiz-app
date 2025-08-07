import { motion } from 'motion/react';
import { memo } from 'react';

export const AboutTitle = memo(() => {
	const AboutIntroduction = 'Introduction';

	return (
		<h1 className="head">
			{AboutIntroduction.split('').map((word, index) => (
				<motion.span
					key={index}
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.3,
						delay: index * 0.1,
						ease: 'easeInOut',
						repeat: 1,
					}}>
					{word}
				</motion.span>
			))}
		</h1>
	);
});
