import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import type { ButtonConfig } from '@/types/button';
import { Buttons } from '@/utilities/button';

export const ButtonGroups = ({ handleButtonClick }: { handleButtonClick: (path: string) => void }) => {
	return (
		<div className="flex gap-4 w-fit place-self-center sm:place-self-start">
			{Buttons.map((button, index) => (
				<motion.div key={index} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: 'easeInOut', delay: index * 0.5 }}>
					<Button variant={button.variant as ButtonConfig['variant']} className={button.className} onClick={() => handleButtonClick(button.href)}>
						{button.name}
					</Button>
				</motion.div>
			))}
		</div>
	);
};
