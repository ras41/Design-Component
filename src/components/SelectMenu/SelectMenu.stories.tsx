// components/SelectMenu/SelectMenu.stories.tsx

import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { SelectMenu } from './SelectMenu'

const meta: Meta<typeof SelectMenu> = {
  title: 'Components/SelectMenu',
  component: SelectMenu,
}
export default meta

type Story = StoryObj<typeof SelectMenu>

const options = [
  { label: 'Select a country', value: '' },
  { label: 'USA', value: 'usa' },
  { label: 'Canada', value: 'canada' },
  { label: 'India', value: 'india' },
]

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <SelectMenu
        id="country"
        label="Country"
        options={options}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        helperText="Select your country"
      />
    )
  },
}

export const Error: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <SelectMenu
        id="country-error"
        label="Country"
        options={options}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        error={!value ? 'Please choose a country' : ''}
      />
    )
  },
}
