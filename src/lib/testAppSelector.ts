const state = {
  inquiryCart: {
    products: [],
  },
  excelPrices: {
    value: {}
  },
  darkMode: {
    value: 'darkMode'
  },
}

export const testUseAppSelector = (f: Function) => f(state)