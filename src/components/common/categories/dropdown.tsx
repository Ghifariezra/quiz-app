import { motion } from 'motion/react';

export const DifficultyDropdown = ({ difficulty, setDifficulty }: { difficulty: string[], setDifficulty: (level: string) => void }) => {
	return (
		<div className="flex flex-col w-full border-1 overflow-hidden rounded-md font-medium">
			{difficulty.map((level, index) => (
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
						onClick={() => setDifficulty(level)}>
						{level}
					</motion.li>
				</motion.ul>
			))}
		</div>
	);
};
