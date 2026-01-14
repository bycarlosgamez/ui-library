import { Tabs as TabsPrimitives, mergeProps } from '@base-ui/react';
import { cva, type VariantProps } from 'class-variance-authority';

// Tabs Root
const rootVariants = cva('w-full');

interface TabsProps
  extends
    React.ComponentProps<typeof TabsPrimitives.Root>,
    VariantProps<typeof rootVariants> {}

export const Tabs = (props: TabsProps) => {
  const rootProps = mergeProps(props, {
    className: rootVariants(),
  });

  return <TabsPrimitives.Root {...rootProps} />;
};

// Tabs List
const listVariants = cva(
  'relative inline-flex h-12 items-center justify-center rounded-2xl bg-surface p-1 text-muted-foreground shadow-raised border-2 border-border gap-4',
  {
    variants: {
      variant: {
        default: '',
        line: `
          bg-transparent
          p-0
          gap-1
          rounded-none
          border-b
          border-muted
        `,
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface TabsListProps
  extends
    React.ComponentProps<typeof TabsPrimitives.List>,
    VariantProps<typeof listVariants> {}

export const TabsList = (props: TabsListProps) => {
  const listProps = mergeProps(props, {
    className: listVariants(),
  });
  return <TabsPrimitives.List {...listProps} />;
};

// Tabs Trigger
const tabsTriggerVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[selected]:bg-background data-[selected]:text-foreground data-[selected]:shadow-inset cursor-pointer hover:text-foreground duration-350 relative z-10',
);

interface TabsTriggerProps
  extends
    React.ComponentProps<typeof TabsPrimitives.Tab>,
    VariantProps<typeof tabsTriggerVariants> {}

export const TabsTrigger = (props: TabsTriggerProps) => {
  const { value, ...rest } = props;

  return (
    <TabsPrimitives.Tab
      value={value}
      {...mergeProps(rest, {
        className: tabsTriggerVariants(),
      })}
    />
  );
};

// Tabs Content
const tabsContentVariants = cva(
  `
  mt-4 ring-offset-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
  `,
);

interface TabsContentProps
  extends
    React.ComponentProps<typeof TabsPrimitives.Panel>,
    VariantProps<typeof tabsContentVariants> {}

export const TabsContent = (props: TabsContentProps) => {
  const { value, ...rest } = props;

  return (
    <TabsPrimitives.Panel
      value={value}
      {...mergeProps(rest, {
        className: tabsContentVariants(),
      })}
    />
  );
};

// Tabs Indicator
const tabsIndicatorVariants = cva(
  `
  absolute rounded-sm bg-surface shadow-raised transition-all duration-200 border border-surface
  `,
);

interface TabsIndicatorProps
  extends
    React.ComponentProps<typeof TabsPrimitives.Indicator>,
    VariantProps<typeof tabsIndicatorVariants> {}

export const TabsIndicator = (props: TabsIndicatorProps) => {
  const tabsIndicatorProps = mergeProps(props, {
    className: tabsIndicatorVariants(),
  });

  return <TabsPrimitives.Indicator {...tabsIndicatorProps} />;
};
