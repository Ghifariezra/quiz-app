import { ModeToggle } from '@/components/mode-toggle';
import { motion } from 'motion/react';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { Menu, X } from 'lucide-react';

const LogoComponent = memo(() => {
	const LogoName = 'Quiz App';
	const navigate = useNavigate();

	const handleLogoClick = useCallback(() => {
		navigate('/');
	}, [navigate]);

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-2xl font-bold cursor-pointer" onClick={handleLogoClick}>
			{LogoName.split('').map((letter, index) => (
				<motion.span key={index} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.05 }}>
					{letter}
				</motion.span>
			))}
		</motion.div>
	);
});

const MenuComponent = memo(() => {
	const Menus = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Quiz', path: '/start-quiz' },
		{ name: 'Contact', path: '/contact' },
	];

	const navigate = useNavigate();

	const handleMenuClick = useCallback(
		(path: string) => {
			navigate(path);
		},
		[navigate]
	);

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className={`flex flex-col gap-2 sm:flex-row sm:gap-4 text-lg font-medium`}>
			{Menus.map((menu, index) => (
				<motion.button
					key={index}
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: index * 0.05 }}
					onClick={() => handleMenuClick(menu.path)}
					className="px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer text-sm md:text-base duration-500 ease-in-out">
					{menu.name}
				</motion.button>
			))}
		</motion.div>
	);
});

function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = useCallback(() => {
		setIsOpen(!isOpen);
	}, [isOpen]);

	return (
		<header className="grid grid-rows-1 border-b border-gray-200 dark:border-gray-700">
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="flex items-center justify-between p-4">
				<LogoComponent />
				<div className="sm:block hidden">
					<MenuComponent />
				</div>
				<ModeToggle />

				<div className="sm:hidden block cursor-pointer" onClick={toggleMenu}>
					{isOpen ? <X /> : <Menu />}
				</div>
			</motion.div>
			{isOpen && (
				<motion.div 
					initial={{ opacity: 0 }} 
					animate={{ opacity: 1 }} 
					transition={{ duration: 1 }} 
					className="sm:hidden block py-4"
				>
					<MenuComponent />
				</motion.div>
			)}
		</header>
	);
};

export default memo(Header);