import generateRender from './generateRender'

describe('generateRender functionality', () => {
  test('react render content', () => {
    const componentConfig = {
      name: 'React',
      platform: 'react'
    }
  
    const result = `<div>React</div>`
    expect(generateRender(componentConfig)).toBe(result)
  })
  
  test('react-native render content', () => {
    const componentConfig = {
      name: 'ReactNative',
      platform: 'react-native'
    }
  
    const result = `<View />`
    expect(generateRender(componentConfig)).toBe(result)
  })
})
