import Calculator from '@/components/Calculator'

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('Calculator', () => {
  // Inspect the raw component options
  it('Sum methods exists', () => {
    expect(typeof Calculator.methods.sum).toBe('function')
  })
  it('Should return a correct number ', () => {
    expect(Calculator.methods.sum(2, 7)).toEqual(9)
  })
})
