import generateIndex from './generateIndex'

const defaultIndexContent =
`import Test from './Test.js'

export default Test
`

const demoIndexContent =
`import Demo from './Demo.jsx'

export default Demo
`

describe('generateIndex functionality', () => {
  test('Test.js component', () => {
    const componentConfig = {
      name: 'Test'
    }
  
    expect(generateIndex(componentConfig)).toBe(defaultIndexContent)
  })
  
  test('Demo.jsx component', () => {
    const componentConfig = {
      name: 'Demo',
      jsExtension: 'jsx'
    }
  
    expect(generateIndex(componentConfig)).toBe(demoIndexContent)
  })
})
