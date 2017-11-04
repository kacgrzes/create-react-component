const generateIndex = ({ name, jsExtension = 'js' }) =>
`import ${name} from './${name}.${jsExtension}'

export default Test
`

export default generateIndex
