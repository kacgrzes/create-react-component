import program from './program'

program.parse(process.argv)

if (program.args.length === 0) {
  program.help()
}