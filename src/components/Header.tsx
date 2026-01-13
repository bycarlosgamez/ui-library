import { Moon, Sun } from 'lucide-react';
import { Button } from './Button';
import { useTheme } from '../providers/ThemeProvider';

export const Header = () => {
  const { setTheme, theme } = useTheme();
  return (
    <nav className='py-8 px-12 flex justify-between items-center'>
      <h1 className='font-bold'>Tohogd UI</h1>
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
        className='border-accent/40'
      >
        {theme === 'dark' ? (
          <Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
        ) : (
          <Sun className='text-accent h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
        )}
      </Button>
    </nav>
  );
};
