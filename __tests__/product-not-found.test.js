import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ProductNotFound from '@/app/produkty/not-found';

describe('Product not found page', () => {
  it('should correctly render product not found page', () => {
    render(<ProductNotFound />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Produkt se nepodařilo najít')
  })
})
