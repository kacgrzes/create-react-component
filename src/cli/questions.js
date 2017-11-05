import inquirer from 'inquirer'

const questions = [
  {
    type: 'list',
    name: 'type',
    message: 'What kind of component do you want to create?',
    choices: [
      new inquirer.Separator('Stateless'),
      'arrow-function',
      'function',
      new inquirer.Separator('Stateful'),
      'component',
      'pure-component'
    ],
    filter: value => {
      const regex = /\((.*?)\)/g // find value between brackets e.g. (ArrowFunction)
      const [_, match] = regex.exec(value)

      return match
    }
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
  }
]

export default questions
