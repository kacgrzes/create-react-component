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
    type: 'PureComponent'
  }

  const result = `import React, { PureComponent } from 'react'`

  expect(generateImports(componentConfig)).toBe(result)
})

test('generates react-native imports', () => {
  const componentConfig = {
    name: 'Test',
    environment: 'react-native'
  }

  const result = `import React, { Component } from 'react'\nimport { View } from 'react-native'`

  expect(generateImports(componentConfig)).toBe(result)
})

test('generates pure component react-native imports', () => {
  const componentConfig = {
    name: 'Test',
    type: 'PureComponent',
    environment: 'react-native'
  }

  const result = `import React, { PureComponent } from 'react'\nimport { View } from 'react-native'`

  expect(generateImports(componentConfig)).toBe(result)
})
