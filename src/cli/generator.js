import inquirer from 'inquirer'
import questions from './questions'

const wizard = async () => {
  const answers = await inquirer.prompt(questions)
  
  console.log(answers)
}

wizard()

export default wizard