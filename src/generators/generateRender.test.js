import generateRender from './generateRender'

test('generates react render content', () => {
  const componentConfig = {
    name: 'React',
    environment: 'react'
  }

  const result = `<div>React</div>`
  expect(generateRender(componentConfig)).toBe(result)
})

test('generates react-native render content', () => {
  const componentConfig = {
    name: 'ReactNative',
    environment: 'react-native'
  }

  const result = `<View />`
  expect(generateRender(componentConfig)).toBe(result)
})