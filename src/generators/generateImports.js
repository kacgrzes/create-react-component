const COMPONENT_TYPES = {
  'pure-component': 'PureComponent',
  'component': 'Component'
}

const importReact = ({ type = 'component' }) => `import React${type.includes('component') ? `, { ${COMPONENT_TYPES[type]} }` : ''} from 'react'`

const importReactNative = ({ platform }) => platform === 'react-native' ? `\nimport { View } from 'react-native'` : ''

const generateImports = componentConfig =>
`\
${importReact(componentConfig)}\
${importReactNative(componentConfig)}\
`

export default generateImports
