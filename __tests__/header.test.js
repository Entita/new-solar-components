import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Header from '@/components/Header/Header';
import { useAppSelector, useAppDispatch } from '@/lib/hooks/hooks';
import { testUseAppSelector } from '@/lib/testAppSelector';

const setWindowToMobile = () => {
  Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: 700})
}

const setWindowToDesktop = () => {
  Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: 800})
}

jest.mock("../src/lib/hooks/hooks")
jest.mock("next/navigation", () => ({
  usePathname: () => 'http://localhost:3000/kosik',
}))

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

describe('Header section', () => {
  beforeEach(() => {
    useAppSelector.mockImplementation(testUseAppSelector)
    useAppDispatch.mockImplementation(() => jest.fn())
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should correctly render dark mode toggler', async () => {
    render(<Header />)

    const bodyElement = document.body
    const darkModeToggler = screen.queryByTestId('header-darkmode')

    expect(bodyElement).not.toHaveClass('dark-mode')
    fireEvent.click(darkModeToggler)
    expect(bodyElement).toHaveClass('dark-mode')
  })

  it('should correctly render mobile header', () => {
    setWindowToMobile()
    render(<Header />)

    const heading = screen.queryByTestId('header-mobile')
    expect(heading).toBeInTheDocument()
  })

  it('should correctly render desktop header', async () => {
    setWindowToDesktop()
    render(<Header />)

    const headingInquiryNumber = screen.queryByTestId('header-desktop-inquiry-number')
    const heading = screen.queryByTestId('header-mobile')
    expect(heading).not.toBeInTheDocument()
    expect(headingInquiryNumber).toBeInTheDocument()
    expect(headingInquiryNumber).not.toBeVisible()
    expect(headingInquiryNumber.innerHTML).toBe('0')
  })
})
