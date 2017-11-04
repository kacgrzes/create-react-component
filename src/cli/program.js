// @see: https://github.com/tj/commander.js
import { Command } from 'commander'

const program = new Command()

const componentTypes = /^(presentational|container)$/i
const defaultType = 'presentational'

program
  .version('0.1.0')
  .description('CLI tool to create react or react-native component')
  .option('-t, --type [type]', 'Component type', componentTypes, defaultType)

export default program