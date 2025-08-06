import { motion } from 'motion/react';

export function AboutLayout({ children }: { children: React.ReactNode }) {
	return (
		<motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }} className="min-h-screen px-4 py-8" id="about">
			{children}
		</motion.section>
	);
}
