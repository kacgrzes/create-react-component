import inquirer from 'inquirer'

const questions = [
  {
    type: 'list',
    name: 'type',
    message: 'What kind of component do you want to create?',
    choices: [
      new inquirer.Separator('Stateless with'),
      'arrow-function',
      'function',
      new inquirer.Separator('Stateful with'),
      'component',
      'pure-component'
    ]
  },
  {
    type: 'input',
    name: 'name',
    message: 'What\'s your component\'s name?',
    validate: value => {
      if (typeof value === 'string' && value.length >= 1) {
        return true
      }
      
      return 'Please enter component\'s name'
    },
    filter: value => {
      let [first, ...rest] = value

      first = first.toUpperCase()
      rest = rest.map(letter => letter.toLowerCase()).join('')

      return `${first}${rest}`
    }
  },
  {
    type: 'list',
    name: 'platform',
    message: 'On what platform will you use your component?',
    choices: [
      'react',
      'react-native'
    ]
  },
  {
    type: 'list',
    name: 'jsExtension',
    message: 'What file extension do you want to use?',
    choices: [
      'js',
      'jsx'
    ]
  },
  
]

export default questions
