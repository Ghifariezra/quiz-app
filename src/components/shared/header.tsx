import { ModeToggle } from '@/components/common/header/toggle-mode';
import { motion, AnimatePresence } from 'motion/react';
import { memo } from 'react';
import { useHeader } from '@/hooks/header/useHeader';
import { LogoComponent } from '@/components/common/header/logo';
import { MenuComponent } from '@/components/common/header/menu';
import { MenuToggle } from '@/components/common/header/toggle-menu';

function Header() {
	const { isOpen, toggleMenu } = useHeader();
	return (
		<motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="grid grid-rows-1 border-b border-gray-200 dark:border-gray-700">
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="flex items-center justify-between p-4">
				<LogoComponent />
				<div className="sm:block hidden">
					<MenuComponent />
				</div>
				<ModeToggle />

				<div className="sm:hidden block cursor-pointer" onClick={toggleMenu}>
					<MenuToggle open={isOpen} />
				</div>
			</motion.div>
			<AnimatePresence>
				{isOpen && (
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="sm:hidden block py-4">
						<MenuComponent />
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
}

export default memo(Header);
