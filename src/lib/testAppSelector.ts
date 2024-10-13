const state = {
  inquiryCart: {
    products: [],
  },
  darkMode: 'dark',
}

export const testUseAppSelector = (f: Function) => f(state)