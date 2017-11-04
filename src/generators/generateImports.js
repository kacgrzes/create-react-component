const importReact = ({ type = 'Component' }) => `import React${type.includes('Function') ? '' : `, { ${type} }`} from 'react'`

const importReactNative = ({ environment }) => environment === 'react-native' ? `\nimport { View } from 'react-native'` : ''

const generateImports = componentConfig =>
`\
${importReact(componentConfig)}\
${importReactNative(componentConfig)}\
`

export default generateImports
