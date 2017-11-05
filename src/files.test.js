import fs from 'fs-extra'
import { createIndexFile, createComponentFile } from './files'

const cleanTempDir = async () => {
  try {
    await fs.remove('temp/')
  } catch (error) {
    console.error(error)
  }
}

const demoConfig = {
  name: 'Demo',
  platform: 'react',
  type: 'arrow-function',
  jsExtension: 'jsx'
}

const demoIndexContent =
`import Demo from './Demo.jsx'

export default Demo
`

const demoComponentContent =
`import React from 'react'

const Demo = props => <div>Demo</div>

export default Demo
`

describe('file creation functionality', () => {
  beforeAll(cleanTempDir)

  afterAll(cleanTempDir)

  describe('index', () => {
    const file = 'temp/Demo/index.js'

    test('create file successfully', async () => {
      await createIndexFile(demoConfig)
      expect(fs.pathExistsSync(file)).toBe(true)
    })

    test('Demo component index.js file content is correct', async () => {
      await createIndexFile(demoConfig)
      const content = await fs.readFile(file, 'utf-8')
      expect(content).toBe(demoIndexContent)
    })
  })

  describe('component', () => {
    const file = 'temp/Demo/Demo.jsx'

    test('create file successfully', async () => {
      await createComponentFile(demoConfig)
      expect(fs.pathExistsSync(file)).toBe(true)
    })

    test('Demo component Demo.js file content is correct', async () => {
      await createComponentFile(demoConfig)
      const content = await fs.readFile(file, 'utf-8')
      expect(content).toBe(demoComponentContent)
    })
  })
})