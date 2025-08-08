import { motion } from 'motion/react';
import { SocialMediaData } from '@/utilities/sosmed';
import { Link } from 'react-router-dom';

export const SocialMedia = () => {
    return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} className="mt-8 flex  items-center justify-center gap-4 text-center">
			{SocialMediaData.map((sosmed, index) => (
				<Link key={index} to={sosmed.link} target="_blank" rel="noopener noreferrer">
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: index * 0.05 }}
						className="px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer text-sm md:text-base duration-500 ease-in-out">
						{sosmed.name}
					</motion.div>
				</Link>
			))}
		</motion.div>
	);
};