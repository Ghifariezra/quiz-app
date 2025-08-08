import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { Menus } from '@/utilities/menus';
import { memo } from 'react';

export const MenuComponent = memo(() => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className={`flex flex-col gap-2 sm:flex-row sm:gap-4 text-lg font-medium items-center`}>
            {Menus.map((menu, index) => (
                <NavLink to={menu.path} key={index} className={({ isActive }) => (isActive ? 'bg-gray-200 dark:bg-gray-800 rounded-md duration-500 ease-in' : '')}>
                    <motion.button
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05, ease: 'easeIn' }}
                        className="px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer text-sm md:text-base duration-500 ease-in-out">
                        {menu.name}
                    </motion.button>
                </NavLink>
            ))}
        </motion.div>
    );
});