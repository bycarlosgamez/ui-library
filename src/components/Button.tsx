import { mergeProps, useRender } from '@base-ui/react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'inline-flex justify-center items-center cursor-pointer hover:opacity-80 focus-visible:ring-highlight/30 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none border border-transparent',
  {
    variants: {
      variant: {
        default: 'bg-primary text-foreground-inverted',
        secondary: 'bg-secondary/10 text-foreground',
        outline: 'border-primary text-primary bg-primary/5',
        ghost: 'bg-primary/0 hover:bg-primary/10 text-foreground',
        destructive: 'bg-destructive/10 text-destructive',
        link: 'text-primary hover:underline',
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
    compoundVariants: [
      {
        variant: 'link',
        size: 'xs',
        class: 'px-0',
      },
      {
        variant: 'link',
        size: 'sm',
        class: 'px-0',
      },
      {
        variant: 'link',
        size: 'default',
        class: 'px-0',
      },
      {
        variant: 'link',
        size: 'lg',
        class: 'px-0',
      },
    ],
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
