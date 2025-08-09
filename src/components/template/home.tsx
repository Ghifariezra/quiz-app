import { motion } from 'motion/react';

export function HomeLayout({ children, id, className="4" }: { children: React.ReactNode, id: string, className?: string }) {
	return (
		<motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }} className={`min-h-screen mx-auto flex flex-col justify-center px-4 ${className} select-none`} id={id}>
			{children}
		</motion.section>
	);
}
