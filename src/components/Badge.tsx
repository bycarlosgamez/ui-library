import { mergeProps, useRender } from '@base-ui/react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const badgeVariants = cva(
  `
  inline-flex items-center justify-center
  whitespace-nowrap select-none
  border text-xs font-medium
  `,
  {
    variants: {
      variant: {
        default: `
          bg-secondary-surface
          text-secondary-foreground
          border-transparent
        `,

        success: `
          bg-success-surface
          text-success-foreground
          border-transparent
        `,
        error: `
          bg-destructive-surface
          text-destructive-foreground
          border-transparent
        `,
        warning: `
          bg-warning-surface
          text-warning-foreground
          border-transparent
        `,

        info: `
          bg-info-surface
          text-info-foreground
          border-transparent
        `,
      },

      tone: {
        solid: '',
        outline: `
          bg-transparent
          border-current
        `,
      },

      shape: {
        rounded: 'h-6 px-2 rounded-md',
        pill: 'h-6 px-2 rounded-full',
      },
    },

    defaultVariants: {
      variant: 'default',
      tone: 'solid',
      shape: 'rounded',
    },
  },
);

interface BadgeProps
  extends
    useRender.ComponentProps<'span'>,
    VariantProps<typeof badgeVariants> {}

export const Badge = (props: BadgeProps) => {
  const mergedProps = mergeProps(props, {
    className: twMerge(
      badgeVariants({
        variant: props.variant,
        tone: props.tone,
        shape: props.shape,
      }),
      props.className,
    ),
  });

  const element = useRender({
    defaultTagName: 'span',
    render: props.render,
    props: mergedProps,
  });

  return element;
};
