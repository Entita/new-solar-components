import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import GlobalError from '@/app/global-error';
import { useAppSelector, useAppDispatch } from '@/lib/hooks/hooks';
import { testUseAppSelector } from '@/lib/testAppSelector';

jest.mock("../src/lib/hooks/hooks")
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

describe('Global error page', () => {
  beforeEach(() => {
    useAppSelector.mockImplementation(testUseAppSelector)
    useAppDispatch.mockImplementation(() => jest.fn())
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should correctly render error page', () => {
    render(<GlobalError />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Něco se pokazilo!')
  })
})
