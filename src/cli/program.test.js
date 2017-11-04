import program from './program'

test('create component with default settings', () => {
  program.parse(['node', 'test'])

  expect(program.version()).toBe('0.1.0')
  expect(program.type).toBe('presentational')
})

test('create container component', () => {
  program.parse(['node', 'test', '-t', 'container'])
  
  expect(program.version()).toBe('0.1.0')
  expect(program.type).toBe('container')
})