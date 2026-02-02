import { mergeProps, useRender } from '@base-ui/react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva('inline-flex justify-center, items-center', {
  variants: {
    variant: {
      default: '',
      primary: 'bg-brand-blue-400',
      destructive: 'bg-red-500',
      ghost: '',
    },
    size: {
      default: 'h-12 px-4',
      icon: 'h-12 w-12',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

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
