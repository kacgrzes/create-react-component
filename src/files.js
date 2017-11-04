import fs from 'fs-extra'
import { join } from 'path'
import {
  generateComponent,
  generateIndex,
  generateStories
} from './generators'

const createComponentFile = async (componentConfig) => {
  const { path = 'temp', name = 'test', jsExtension = 'js' } = componentConfig

  try {
    const fullPath = `${path}/${name}/${name}.${jsExtension}`
    const content = generateComponent(componentConfig)
  
    await fs.outputFile(fullPath, content)
  } catch (error) {
    console.error(error)
  }
}

const createIndexFile = async (componentConfig) => {
  const { path = 'temp', name = 'test' } = componentConfig

  try {
    const fullPath = `${path}/${name}/index.js`
    const content = generateIndex(componentConfig)
  
    await fs.outputFile(fullPath, content)
  } catch (error) {
    console.error(error)
  }  
}

const createStoriesFile = async (componentConfig) => {
  const { path = 'temp', name = 'test' } = componentConfig

  try {
    const fullPath = `${path}/${name}/${name}.stories.js`
    const content = generateStories(componentConfig)
  
    await fs.outputFile(fullPath, content)
  } catch (error) {
    console.error(error)
  }  
}

const demoConfig = {
  name: 'Demo',
  environment: 'react-native'
}

createStoriesFile(demoConfig)
createIndexFile(demoConfig)
createComponentFile(demoConfig)
