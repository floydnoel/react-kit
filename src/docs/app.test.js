import React from 'react'
import { render } from '@testing-library/react'
import App from './app'

// test('renders learn react link', () => {
//   let { getByText } = render(<App />)
//   let linkElement = getByText(/learn react/i)
//   expect(linkElement).toBeInTheDocument()
// })

test('renders app', () => {
  let app = render(<App />)
  expect(app).toBeTruthy()
})
