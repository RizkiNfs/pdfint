import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import Component from './index.vue'

describe('Button',() => {

  test('should render correctly', async () => {
    
    render(Component, { slots: { default: 'hello' } })
    
    expect(screen.getByRole('button')).toHaveTextContent('hello')

  })

  test('should render correctly', async () => {

    const user = userEvent.setup()
    const { emitted } = render(Component, { slots: { default: 'hello' } })

    const button = screen.getByRole('button')
    
    await user.click(button)

    expect(emitted()).toHaveProperty('click')

  })

  
})