import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Elements/Button', module)
  .add('Primary', () => <Button>Primary Button</Button>)
  .add('Secondary', () => <Button variant="outlined">Secondary Button</Button>)
  .add('Primary disabled', () => <Button disabled>Primary disabled</Button>)
  .add('Secondary disabled', () => (
    <Button disabled variant="outlined">
      Secondary disabled
    </Button>
  ));
