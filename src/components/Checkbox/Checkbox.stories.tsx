
import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Checkbox>

const Template = (args: any) => {
  const [checked, setChecked] = useState(args.checked ?? false)
  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={(val) => setChecked(val)}
    />
  )
}

export const Default: Story = {
  name: 'Default',
  render: () => <Template label="Subscribe to newsletter" />,
}

export const Checked: Story = {
  name: 'Checked',
  render: () => <Template label="Accept Terms" checked />,
}

export const WithHelperText: Story = {
  name: 'With Helper Text',
  render: () => (
    <Template
      label="I agree"
      helperText="You must agree before continuing."
    />
  ),
}

export const Disabled: Story = {
  name: 'Disabled',
  render: () => <Template label="Disabled Option" disabled />,
}
