import generateIndex from './generateIndex'

const defaultIndexContent =
`import Test from './Test.js'

export default Test
`

const demoIndexContent =
`import Demo from './Demo.jsx'

export default Test
`

test('generates index for Test.js component', () => {
  const componentConfig = {
    name: 'Test'
  }

  expect(generateIndex(componentConfig)).toBe(defaultIndexContent)
})

test('generates index for Demo.jsx component', () => {
  const componentConfig = {
    name: 'Demo',
    jsExtension: 'jsx'
  }

  expect(generateIndex(componentConfig)).toBe(demoIndexContent)
})