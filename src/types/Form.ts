export interface FormState {
  name: string,
  surname: string,
  email: string,
  phone: string,
  message: string,
  agreement: Boolean,
}

export interface FormErrorsState {
  name?: string,
  surname?: string,
  email?: string,
  phone?: string,
  message?: string,
  agreement?: string,
}
