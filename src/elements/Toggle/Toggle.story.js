import React from 'react';
import { storiesOf } from '@storybook/react';
import Toggle from './Toggle';

storiesOf('Elements/Toggle', module)
  .add('Uncontrolled unchecked', () => <Toggle />)
  .add('Always checked', () => <Toggle checked />);
