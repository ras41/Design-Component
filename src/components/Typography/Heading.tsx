import React, { JSX } from 'react';
import clsx from 'clsx';

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

const styles = {
  1: 'text-5xl font-bold text-primary',
  2: 'text-4xl font-semibold text-secondary',
  3: 'text-3xl font-semibold text-accent',
  4: 'text-2xl font-medium text-neutral',
  5: 'text-xl font-medium text-dark',
  6: 'text-lg font-medium text-gray-700',
};

export const Heading = ({
  level = 1,
  children,
  className = '',
  as,
}: HeadingProps) => {
  const Tag = as || (`h${level}` as keyof JSX.IntrinsicElements);
  return (
    <Tag
      className={clsx(
        'font-poppins',
        styles[level],
        className
      )}
    >
      {children}
    </Tag>
  );
};

// import React, {JSX} from 'react'
// import clsx from 'clsx'

// type HeadingProps = {
//   level?: 1 | 2 | 3 | 4 | 5 | 6
//   children: React.ReactNode
//   className?: string
//   as?: keyof JSX.IntrinsicElements
// }

// const styles = {
//   1: 'text-5xl font-bold leading-tight',
//   2: 'text-4xl font-semibold leading-snug',
//   3: 'text-3xl font-semibold leading-snug',
//   4: 'text-2xl font-medium',
//   5: 'text-xl font-medium',
//   6: 'text-lg font-medium tracking-tight',
// }

// export const Heading = ({
//   level = 1,
//   children,
//   className = '',
//   as,
// }: HeadingProps) => {
//   const Tag = as || (`h${level}` as keyof JSX.IntrinsicElements)
//   return (
// <Tag
//   className={clsx(
//     'font-poppins text-gray-900 dark:text-white',
//     styles[level],
//     className
//   )}
// >
//   {children}
// </Tag>

//   )
// }
