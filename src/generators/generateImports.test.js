import generateImports from './generateImports'

describe('generateImports functionality', () => {
  test('default (component) imports', () => {
    const componentConfig = {
      name: 'Test'
    }
  
    const result = `import React, { Component } from 'react'`
  
    expect(generateImports(componentConfig)).toBe(result)
  })

  test('pure component imports', () => {
    const componentConfig = {
      name: 'Test',
      type: 'pure-component'
    }
  
    const result = `import React, { PureComponent } from 'react'`
  
    expect(generateImports(componentConfig)).toBe(result)
  })
  
  test('component react-native imports', () => {
    const componentConfig = {
      name: 'Test',
      platform: 'react-native'
    }
  
    const result = `import React, { Component } from 'react'\nimport { View } from 'react-native'`
  
    expect(generateImports(componentConfig)).toBe(result)
  })
  
  test('pure component react-native imports', () => {
    const componentConfig = {
      name: 'Test',
      type: 'pure-component',
      platform: 'react-native'
    }
  
    const result = `import React, { PureComponent } from 'react'\nimport { View } from 'react-native'`
  
    expect(generateImports(componentConfig)).toBe(result)
  })
})
