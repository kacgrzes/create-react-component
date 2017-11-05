import generatePropTypes from './generatePropTypes'

const statefulPropTypes =
`Test.propTypes = {}

Test.defaultProps = {}`

const statelessPropTypes =
`Demo.propTypes = {}`

describe('generatePropTypes functionality', () => {
  test('stateless propTypes', () => {
    const componentConfig = {
      name: 'Test',
      type: 'component'
    }
  
    expect(generatePropTypes(componentConfig)).toBe(statefulPropTypes)
  })
  
  test('stateful propTypes', () => {
    const componentConfig = {
      name: 'Demo',
      type: 'arrow-function'
    }
  
    expect(generatePropTypes(componentConfig)).toBe(statelessPropTypes)
  })
})
