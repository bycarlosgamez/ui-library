import {
  Switch as SwitchPrimitive,
  useRender,
  mergeProps,
} from '@base-ui/react';
import { cva, type VariantProps } from 'class-variance-authority';

const rootVariants = cva(
  'inline-flex items-center shadow-inset bg-foreground cursor-pointer h-5.5 w-12 rounded-full transition-color duration-350 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 data-checked:bg-primary data-disabled:opacity-50 data-disabled:cursor-not-allowed',
);

const thumbVariants = cva(
  'h-5 w-5 relative block rounded-full bg-background shadow-subtle border-1 border-highlight/30 ease-out transition-all duration-350 translate-x-0.25 data-checked:translate-x-6.75',
);

interface SwitchProps
  extends
    useRender.ComponentProps<'switch'>,
    VariantProps<typeof rootVariants> {}

export const Switch = (props: SwitchProps) => {
  const rootProps = mergeProps(props, {
    className: rootVariants(),
  });

  const thumbProps = mergeProps(props, {
    className: thumbVariants(),
  });

  return (
    <SwitchPrimitive.Root {...rootProps}>
      <SwitchPrimitive.Thumb {...thumbProps} />
    </SwitchPrimitive.Root>
  );
};
