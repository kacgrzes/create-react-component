const generateIndex = ({ name, jsExtension = 'js' }) =>
`import ${name} from './${name}.${jsExtension}'

export default ${name}
`

export default generateIndex
