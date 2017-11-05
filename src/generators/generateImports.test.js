import generateImports from './generateImports'

test('generates default imports', () => {
  const componentConfig = {
    name: 'Test'
  }

  const result = `import React, { Component } from 'react'`

  expect(generateImports(componentConfig)).toBe(result)
})

test('generates pure component imports', () => {
  const componentConfig = {
    name: 'Test',
    type: 'pure-component'
  }

  const result = `import React, { PureComponent } from 'react'`

  expect(generateImports(componentConfig)).toBe(result)
})

test('generates react-native imports', () => {
  const componentConfig = {
    name: 'Test',
    platform: 'react-native'
  }

  const result = `import React, { Component } from 'react'\nimport { View } from 'react-native'`

  expect(generateImports(componentConfig)).toBe(result)
})

test('generates pure component react-native imports', () => {
  const componentConfig = {
    name: 'Test',
    type: 'pure-component',
    platform: 'react-native'
  }

  const result = `import React, { PureComponent } from 'react'\nimport { View } from 'react-native'`

  expect(generateImports(componentConfig)).toBe(result)
})
