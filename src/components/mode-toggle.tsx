import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useTheme } from '@/components/theme-provider';
import { useCallback } from 'react';

export function ModeToggle() {
	const { theme, setTheme } = useTheme();

	const toggleTheme = useCallback(() => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	}, [setTheme, theme]);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button onClick={toggleTheme} variant="outline" size="icon" className="cursor-pointer bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 duration-500 ease-in">
					{theme === 'dark' ? <Moon /> : <Sun />}
				</Button>
			</DropdownMenuTrigger>
		</DropdownMenu>
	);
}
