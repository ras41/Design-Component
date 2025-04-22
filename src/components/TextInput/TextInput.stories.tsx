// components/TextInput/TextInput.stories.tsx

import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { TextInput } from './TextInput'

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
}
export default meta

type Story = StoryObj<typeof TextInput>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <TextInput
        id="username"
        label="Username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your username"
        helperText="This will be your public handle"
      />
    )
  },
}

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <TextInput
        id="email"
        label="Email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="you@example.com"
        error={!value ? 'Email is required' : ''}
        required
      />
    )
  },
}
