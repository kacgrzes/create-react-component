const generateStories = ({ name, platform}) =>
`import react from 'react'
import { storiesOf } from '@storybook/${platform}';

storiesOf('${name}', module)
  .add('with default props', () =>
    <${name} />
  )
`

export default generateStories
