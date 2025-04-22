
import { Meta, StoryObj } from '@storybook/react'
import { Typography } from './Typography'

const meta: Meta<typeof Typography> = {
  title: 'Foundation/Typography',
  component: Typography,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Typography>

export const H1: Story = {
  name: 'Heading 1',
  args: {
    variant: 'h1',
    children: 'This is Heading 1',
  },
}

export const H2: Story = {
  name: 'Heading 2',
  args: {
    variant: 'h2',
    children: 'This is Heading 2',
  },
}

export const H3: Story = {
  name: 'Heading 3',
  args: {
    variant: 'h3',
    children: 'This is Heading 3',
  },
}

export const H4: Story = {
  name: 'Heading 4',
  args: {
    variant: 'h4',
    children: 'This is Heading 4',
  },
}

export const H5: Story = {
  name: 'Heading 5',
  args: {
    variant: 'h5',
    children: 'This is Heading 5',
  },
}

export const H6: Story = {
  name: 'Heading 6',
  args: {
    variant: 'h6',
    children: 'This is Heading 6',
  },
}
export const Paragraph: Story = {
  name: 'Paragraph',
  args: {
    variant: 'paragraph',
    children: 'This is a standard paragraph used for body content.',
  },
}

export const Caption: Story = {
  name: 'Caption',
  args: {
    variant: 'caption',
    children: 'Caption: Smaller detail text.',
  },
}

export const Label: Story = {
  name: 'Label',
  args: {
    variant: 'label',
    children: 'Label: Often used for form fields',
  },
}

export const Helper: Story = {
  name: 'Helper Text',
  args: {
    variant: 'helper',
    children: 'Helper: Assistive information below a field.',
  },
}
