import { motion } from 'motion/react';
import { memo } from 'react';
import { Link } from 'react-router-dom';

export const LogoComponent = memo(() => {
	const LogoName = 'Tech Playground';

	return (
		<Link to={'/'}>
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-2xl font-bold cursor-pointer">
				{LogoName.split('').map((letter, index) => (
					<motion.span key={index} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.05 }}>
						{letter}
					</motion.span>
				))}
			</motion.div>
		</Link>
	);
});
