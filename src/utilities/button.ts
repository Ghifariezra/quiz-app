import type { ButtonConfig } from '@/types/button';
export const Buttons: ButtonConfig[] = [
    { name: 'Start Quiz', href: '/start-quiz', variant: 'default', className: 'hover:scale-105 cursor-pointer' },
    { name: 'Learn More', href: '/about', variant: 'outline', className: 'hover:scale-105 cursor-pointer' },
];