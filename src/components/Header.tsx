'use client';

import { Moon, Sun } from 'lucide-react';
import { Button } from './Button';
import { useTheme } from '../providers/ThemeProvider';

export const Header = () => {
  const { setTheme, theme } = useTheme();
  return (
    <nav className='py-1 px-12 mt-4 mx-auto flex justify-between items-center bg-nav shadow-interactive w-[90%] rounded-full'>
      <h1 className='font-bold text-nav-foreground'>Tohogd UI</h1>
      <Button
        onClick={() => {
          if (theme === 'dark') {
            setTheme('light');
          } else {
            setTheme('dark');
          }
        }}
        size='icon'
        variant='secondary'
      >
        {theme === 'dark' ? (
          <Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
        ) : (
          <Sun className='text-nav-logo h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
        )}
      </Button>
    </nav>
  );
};
