import { memo } from 'react';
import { motion } from 'motion/react';

function Footer() {
    return (
        <motion.footer 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className="flex items-center justify-center p-4 shadow-md shadow-black/10 dark:shadow-white/10 border-t border-gray-200 dark:border-gray-700"
        >
            &copy; 2025 Quiz App
        </motion.footer>
    );
};

export default memo(Footer);