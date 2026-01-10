import { Switch, useRender, mergeProps } from '@base-ui/react';
import { cva, type VariantProps } from 'class-variance-authority';

const rootVariants = cva(
  `
  relative inline-flex shrink-0 cursor-pointer
  h-5.5 w-12 rounded-full
  bg-muted shadow-inset
  ease-out
  transition-colors
  duration-350
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-foreground
  focus-visible:ring-offset-2
  data-[checked]:bg-primary
  data-[disabled]:opacity-50
  data-[disabled]:cursor-not-allowed
  `,
);

const thumbVariants = cva(
  `
  top-0.5 left-0.5 relative block
  h-4.5 w-4.5 rounded-full
  bg-background shadow-subtle
  border-1 border-highlight/30
  ease-out transition-all duration-350
  translate-x-0
  data-[checked]:translate-x-6.5
  `,
);

interface ToggleSwitchProps
  extends
    useRender.ComponentProps<'switch'>,
    VariantProps<typeof rootVariants> {}

export const ToggleSwitch = (props: ToggleSwitchProps) => {
  const rootProps = mergeProps(props, {
    className: rootVariants(),
  });

  const thumbProps = mergeProps(props, {
    className: thumbVariants(),
  });

  return (
    <Switch.Root {...rootProps}>
      <Switch.Thumb {...thumbProps} />
    </Switch.Root>
  );
};
