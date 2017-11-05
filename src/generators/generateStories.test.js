import generateStories from './generateStories'

const reactComponentStories =
`import react from 'react'
import { storiesOf } from '@storybook/react';

storiesOf('Test', module)
  .add('with default props', () =>
    <Test />
  )
`

const reactNativeComponentStories =
`import react from 'react'
import { storiesOf } from '@storybook/react-native';

storiesOf('Demo', module)
  .add('with default props', () =>
    <Demo />
  )
`

describe('generateStories functionality', () => {
  test('default (react) component stories', () => {
    const componentConfig = {
      name: 'Test',
      platform: 'react'
    }
  
    expect(generateStories(componentConfig)).toBe(reactComponentStories)
  })
  
  test('react-native component stories', () => {
    const componentConfig = {
      name: 'Demo',
      platform: 'react-native'
    }
  
    expect(generateStories(componentConfig)).toBe(reactNativeComponentStories)
  })
})
