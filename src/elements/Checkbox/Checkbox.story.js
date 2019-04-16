import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Checkbox from './Checkbox';

storiesOf('Elements/Checkbox', module)
  .add('Unchecked', () => <Checkbox checked={false} />)
  .add('Checked', () => <Checkbox checked />)
  .add('Toggle', () => <Checkbox />)
  .add('On click', () => <Checkbox onClick={action('clicked')} />);
