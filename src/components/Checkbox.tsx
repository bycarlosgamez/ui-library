import { Checkbox as CheckboxPrimitive, mergeProps } from '@base-ui/react';
import { cva, type VariantProps } from 'class-variance-authority';
import { CheckIcon } from 'lucide-react';

const rootVariants = cva(
  `
  relative inline-flex
  h-5 w-5 rounded-sm bg-foreground
  shadow-inset cursor-pointer
  transition-colors duration-150 ease-out
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-foreground
  focus-visible:ring-offset-0
  data-checked:bg-primary
  data-disabled:opacity-50
  data-disabled:cursor-not-allowed
  `,
);

const indicatorVariants = cva(
  'absolute flex items-center justify-center h-5 w-5 opacity-0 scale-75 transition-[opacity,transform] duration-150 ease-out data-checked:opacity-100 data-checked:scale-100',
);

interface CheckboxProps
  extends
    React.ComponentProps<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof rootVariants> {}

export const Checkbox = (props: CheckboxProps) => {
  const rootProps = mergeProps(props, {
    className: rootVariants(),
  });

  const indicatorProps = mergeProps(props, {
    className: indicatorVariants(),
  });

  return (
    <CheckboxPrimitive.Root {...rootProps}>
      <CheckboxPrimitive.Indicator {...indicatorProps}>
        <CheckIcon className='h-4.5 w-4.5 text-background' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
};
