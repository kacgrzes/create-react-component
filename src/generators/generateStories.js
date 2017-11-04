const generateStories = ({ name, environment}) =>
`import react from 'react'
import { storiesOf } from '@storybook/${environment}';

storiesOf('${name}', module)
  .add('with default props', () =>
    <${name} />
  )
`

export default generateStories
