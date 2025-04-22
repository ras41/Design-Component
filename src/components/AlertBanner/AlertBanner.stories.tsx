// components/AlertBanner/AlertBanner.stories.tsx

import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { AlertBanner } from './AlertBanner'

const meta: Meta<typeof AlertBanner> = {
  title: 'Feedback/AlertBanner',
  component: AlertBanner,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof AlertBanner>

export const Success: Story = {
  args: {
    message: 'Operation completed successfully!',
    variant: 'success',
  },
}

export const Error: Story = {
  args: {
    message: 'Something went wrong.',
    variant: 'error',
  },
}

export const Info: Story = {
  args: {
    message: 'This is an informational message.',
    variant: 'info',
  },
}

export const Warning: Story = {
  args: {
    message: 'Please check your input.',
    variant: 'warning',
  },
}

export const Closable: Story = {
  render: () => {
    const [visible, setVisible] = useState(true)
    return (
      <>
        {visible && (
          <AlertBanner
            message="This alert can be closed!"
            variant="info"
            closable
            onClose={() => setVisible(false)}
          />
        )}
      </>
    )
  },
}
