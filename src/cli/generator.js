import inquirer from 'inquirer'
import questions from './questions'

const generator = async () => {
  const answers = await inquirer.prompt(questions)
  console.log(answers)
}

generator()