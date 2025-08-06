import { motion } from 'motion/react';

export function HomeLayout({ children, id="home", className="4" }: { children: React.ReactNode, id: string, className?: string }) {
	return (
		<motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }} className={`min-h-screen px-4 ${className}`} id={id}>
			{children}
		</motion.section>
	);
}
