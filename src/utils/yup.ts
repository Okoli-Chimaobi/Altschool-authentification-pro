import * as yup from 'yup'

yup.addMethod(yup.string, 'containsUppercase', function (message?: string) {
  return (this as any).test(
    'containsUppercase',
    message || 'Value must contain at least one uppercase letter',
    function (value: string) {
      return /[A-Z]+/.test(value)
    }
  )
})

yup.addMethod(yup.string, 'containsLowercase', function (message?: string) {
  return (this as any).test(
    'containsLowercase',
    message || 'Value must contain at least one lowercase letter',
    function (value: string) {
      return /[a-z]+/.test(value)
    }
  )
})

yup.addMethod(yup.string, 'containsSpecialCharacter', function (message?: string) {
  return (this as any).test(
    'containsSpecialCharacter',
    message || 'Value must include one of the following characters (!@#$%^&*?)',
    function (value: string) {
      return /[!@#$%^&*?]+/.test(value)
    }
  )
})

yup.addMethod(yup.string, 'containsNumber', function (message?: string) {
  return (this as any).test(
    'containsNumber',
    message || 'Value must include at least one number [0-9]',
    function (value: string) {
      return /[0-9]+/.test(value)
    }
  )
})

yup.addMethod(yup.string, 'isNumeric', function (message: string) {
  return (this as any).test('isNumeric', message, function (value: string) {
    return /^[0-9]+$/.test(value)
  })
})

yup.addMethod(yup.string, 'isAlphabet', function (message?: string) {
  return (this as any).test(
    'isAlphabet',
    message || 'You can only use alphabets [a-Z]',
    function (value: string) {
      return /^[a-zA-Z]+$/.test(value)
    }
  )
})

export default yup
