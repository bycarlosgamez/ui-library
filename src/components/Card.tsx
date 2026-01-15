import { mergeProps, useRender } from '@base-ui/react';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva('rounded-2xl border-2 border-border bg-card', {
  variants: {
    variant: {
      raised: 'shadow-raised',
      none: 'shadow-none',
    },
  },
  defaultVariants: {
    variant: 'raised',
  },
});

interface CardProps
  extends
    useRender.ComponentProps<'article'>,
    VariantProps<typeof cardVariants> {}

export const Card = (props: CardProps) => {
  const mergedProps = mergeProps(props, {
    className: cardVariants({ variant: props.variant }),
  });

  const element = useRender({
    defaultTagName: 'article',
    render: props.render,
    props: mergedProps,
  });

  return element;
};

// Card header
const cardHeaderVariants = cva('flex flex-col space-y-1.5 p-6');

interface CardHeaderProps
  extends
    useRender.ComponentProps<'header'>,
    VariantProps<typeof cardHeaderVariants> {}

export const CardHeader = (props: CardHeaderProps) => {
  const mergedProps = mergeProps(props, {
    className: cardHeaderVariants(),
  });

  const element = useRender({
    defaultTagName: 'header',
    render: props.render,
    props: mergedProps,
  });

  return element;
};

// Card title
const cardTitleVariants = cva('font-semibold leading-none tracking-tight');

interface CardTitleProps
  extends
    useRender.ComponentProps<'h3'>,
    VariantProps<typeof cardTitleVariants> {}

export const CardTitle = (props: CardTitleProps) => {
  const mergedProps = mergeProps(props, {
    className: cardTitleVariants(),
  });

  const element = useRender({
    defaultTagName: 'h3',
    render: props.render,
    props: mergedProps,
  });

  return element;
};

// Card description
const cardDescriptionVariants = cva('text-sm text-muted-foreground');

interface CardDescriptionProps
  extends
    useRender.ComponentProps<'p'>,
    VariantProps<typeof cardDescriptionVariants> {}

export const CardDescription = (props: CardDescriptionProps) => {
  const mergedProps = mergeProps(props, {
    className: cardDescriptionVariants(),
  });

  const element = useRender({
    defaultTagName: 'p',
    render: props.render,
    props: mergedProps,
  });

  return element;
};

// Card Content
const cardContentVariants = cva('p-6 pt-0');

interface CardContentProps
  extends
    useRender.ComponentProps<'div'>,
    VariantProps<typeof cardContentVariants> {}

export const CardContent = (props: CardContentProps) => {
  const mergedProps = mergeProps(props, {
    className: cardContentVariants(),
  });

  const element = useRender({
    defaultTagName: 'div',
    render: props.render,
    props: mergedProps,
  });

  return element;
};

// Card Footer
const cardFooterVariants = cva('p-6 pt-0');

interface CardFooterProps
  extends
    useRender.ComponentProps<'footer'>,
    VariantProps<typeof cardFooterVariants> {}

export const CardFooter = (props: CardFooterProps) => {
  const mergedProps = mergeProps(props, {
    className: cardFooterVariants(),
  });

  const element = useRender({
    defaultTagName: 'footer',
    render: props.render,
    props: mergedProps,
  });

  return element;
};
