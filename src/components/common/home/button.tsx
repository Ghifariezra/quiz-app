import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Buttons } from '@/utilities/button';

export const ButtonGroups = ({ handleButtonClick }: { handleButtonClick: (path: string) => void }) => {
	return (
		<div className="flex gap-4 w-fit place-self-center sm:place-self-start">
			{Buttons.map((button, index) => (
				<motion.div key={index} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 0.7 }} transition={{ duration: 1, ease: 'easeInOut', delay: index * 0.2 }}>
					<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.1 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
						<Button className={button.className} onClick={() => handleButtonClick(button.href)}>
							{button.name}
						</Button>
					</motion.div>
				</motion.div>
			))}
		</div>
	);
};
