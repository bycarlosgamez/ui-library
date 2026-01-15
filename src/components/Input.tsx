import { Input as InputPrimitive, mergeProps } from '@base-ui/react';
import { cva, type VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  'flex w-full rounded-md border-2 border-highlight bg-background shadow-inset px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground/50 disabled:opacity-50',
);

interface InputProps
  extends
    React.ComponentProps<typeof InputPrimitive>,
    VariantProps<typeof inputVariants> {}

export const Input = (props: InputProps) => {
  const inputProps = mergeProps(props, {
    className: inputVariants(),
    type: props.type,
  });

  return <InputPrimitive {...inputProps} placeholder='Placeholder' />;
};
