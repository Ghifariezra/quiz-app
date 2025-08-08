import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const MenuToggle = ({ open }: { open: boolean }) => {
	return (
		<AnimatePresence mode="wait">
			{open ? (
				<motion.div key="icon-x" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
					<X />
				</motion.div>
			) : (
				<motion.div key="icon-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
					<Menu />
				</motion.div>
			)}
		</AnimatePresence>
	);
};
