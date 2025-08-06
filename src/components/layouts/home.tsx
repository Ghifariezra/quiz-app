import { motion } from 'motion/react';

export function HomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }} className="min-h-screen p-4" id="home">
			{children}
		</motion.section>
	);
}
