import generateComponent from './generateComponent'

const defaultComponent =
`import React, { Component } from 'react'

class Test extends Component {
  render () {
    return <div>Test</div>
  }
}

Test.propTypes = {}

Test.defaultProps = {}

export default Test
`

const pureComponent =
`import React, { PureComponent } from 'react'

class Test extends PureComponent {
  render () {
    return <div>Test</div>
  }
}

Test.propTypes = {}

Test.defaultProps = {}

export default Test
`

const functionComponent =
`import React from 'react'

function Test (props) {
  return <div>Test</div>
}

Test.propTypes = {}

export default Test
`

const arrowFunctionComponent =
`import React from 'react'

const Test = props => <div>Test</div>

Test.propTypes = {}

export default Test
`

describe('generateComponent functionality', () => {
  test('default component', () => {
    const componentConfig = {
      name: 'Test'
    }
  
    expect(generateComponent(componentConfig)).toBe(defaultComponent)
  })
  
  test('pure component', () => {
    const componentConfig = {
      name: 'Test',
      type: 'pure-component'
    }
  
    expect(generateComponent(componentConfig)).toBe(pureComponent)
  })
  
  test('function component', () => {
    const componentConfig = {
      name: 'Test',
      type: 'function'
    }
  
    expect(generateComponent(componentConfig)).toBe(functionComponent)
  })
  
  test('arrow function component', () => {
    const componentConfig = {
      name: 'Test',
      type: 'arrow-function'
    }
  
    expect(generateComponent(componentConfig)).toBe(arrowFunctionComponent)
  })
})
