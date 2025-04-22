import { Heading } from './Heading';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Heading>;

export const H1: Story = {
  render: () => <Heading level={1}>Heading 1</Heading>,
};

export const H2: Story = {
  render: () => <Heading level={2}>Heading 2</Heading>,
};

export const H3: Story = {
  render: () => <Heading level={3}>Heading 3</Heading>,
};

export const H4: Story = {
  render: () => <Heading level={4}>Heading 4</Heading>,
};

export const H5: Story = {
  render: () => <Heading level={5}>Heading 5</Heading>,
};

export const H6: Story = {
  render: () => <Heading level={6}>Heading 6</Heading>,
};

export const H1toH6: Story = {
  render: () => (
    <div className="space-y-4 bg-background p-6 rounded-lg shadow-md">
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
      <Heading level={6}>Heading 6</Heading>
    </div>
  ),
};

// import { Heading } from './Heading'
// import type { Meta, StoryObj } from '@storybook/react'

// const meta: Meta<typeof Heading> = {
//   title: 'Typography/Heading',
//   component: Heading,
//   tags: ['autodocs'],
// }
// export default meta

// type Story = StoryObj<typeof Heading>

// export const H1: Story = {
//   render: () => <Heading level={1} style={{ color: 'blue', fontSize: '2rem' }}>Heading 1</Heading>,
// }

// export const H2: Story = {
//   render: () => <Heading level={2}>Heading 2</Heading>,
// }

// export const H3: Story = {
//   render: () => <Heading level={3}>Heading 3</Heading>,
// }

// export const H4: Story = {
//   render: () => <Heading level={4}>Heading 4</Heading>,
// }

// export const H5: Story = {
//   render: () => <Heading level={5}>Heading 5</Heading>,
// }

// export const H6: Story = {
//   render: () => <Heading level={6}>Heading 6</Heading>,
// }


// export const H1toH6: Story = {
//   render: () => (
//     <div className="space-y-2">
//       <Heading level={1}>Heading 1</Heading>
//       <Heading level={2}>Heading 2</Heading>
//       <Heading level={3}>Heading 3</Heading>
//       <Heading level={4}>Heading 4</Heading>
//       <Heading level={5}>Heading 5</Heading>
//       <Heading level={6}>Heading 6</Heading>
//     </div>
//   ),
// }
