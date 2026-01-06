import { mergeProps, useRender } from '@base-ui/react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'inline-flex justify-center items-center cursor-pointer hover:opacity-80 focus-visible:ring-highlight/30 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none border border-transparent text-white',
  {
    variants: {
      variant: {
        default: 'bg-primary',
        secondary: 'bg-primary/10 text-foreground',
        outline: 'border-primary bg-primary/20 text-primary',
        ghost: 'bg-primary/0 hover:bg-primary/10 text-foreground',
        destructive: 'bg-destructive/10 text-destructive ',
        link: 'text- hover:underline',
      },
      size: {
        xs: 'h-6 px-2 rounded-sm text-xs',
        sm: 'h-8 px-3 rounded-md text-sm',
        default: 'h-10 px-4 rounded-lg',
        lg: 'h-12 px-6 rounded-xl text-lg',
        icon: 'h-12 w-12 rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

interface ButtonProps
  extends
    useRender.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {}

export const Button = (props: ButtonProps) => {
  const mergedProps = mergeProps(props, {
    className: twMerge(
      buttonVariants({ variant: props.variant, size: props.size }),
      props.className,
    ),
  });

  const element = useRender({
    defaultTagName: 'button',
    render: props.render,
    props: mergedProps,
  });

  return element;
};
