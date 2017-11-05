const generatePropTypes = ({ name, type = 'component' }) => {
  if (type === 'function' || type === 'arrow-function') {
    return `${name}.propTypes = {}`
  }

  return (
`${name}.propTypes = {}

${name}.defaultProps = {}`
  )
}

export default generatePropTypes
