const generateRender = ({ name, environment }) => {
  switch (environment) {
    case 'react':
      return `<div>${name}</div>`
    case 'react-native':
      return `<View />`
    default:
      return `<div>${name}</div>`
  }
}

export default generateRender
