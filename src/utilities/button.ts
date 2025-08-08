import type { ButtonConfig } from '@/types/button';
export const Buttons: ButtonConfig[] = [
    { name: 'Start Quiz', href: '/start-quiz',  className: 'cursor-pointer bg-indigo-600 hover:bg-indigo-600 text-white' },
    { name: 'Learn More', href: '/about', className: 'cursor-pointer border border-indigo-600 text-indigo-600 dark:border-white dark:text-white bg-transparent' },
];