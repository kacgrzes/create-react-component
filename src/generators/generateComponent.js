import generateImports from './generateImports'
import generateRender from './generateRender'

const generateClassComponent = componentConfig =>
`class ${componentConfig.name} extends Component {
  render () {
    return ${generateRender(componentConfig)}
  }
}`

const generatePureComponent = componentConfig =>
`class ${componentConfig.name} extends PureComponent {
  render () {
    return ${generateRender(componentConfig)}
  }
}`

const generateFunctionComponent = componentConfig =>
`function ${componentConfig.name} (props) {
  return ${generateRender(componentConfig)}
}`

const generateArrowFunctionComponent = componentConfig =>
`const ${componentConfig.name} = props => ${generateRender(componentConfig)}`

const generateContent = componentConfig => {
  switch (componentConfig.type) {
    case 'Function': 
      return generateFunctionComponent(componentConfig)
    case 'ArrowFunction': 
      return generateArrowFunctionComponent(componentConfig)
    case 'PureComponent':
      return generatePureComponent(componentConfig)
    case 'Component':
      return generateClassComponent(componentConfig)
    default:
      return generateClassComponent(componentConfig)
  }
}

const generateExport = ({ name }) => `export default ${name}`

const generateComponent = componentConfig =>
`${generateImports(componentConfig)}

${generateContent(componentConfig)}

${generateExport(componentConfig)}
`

export default generateComponent
