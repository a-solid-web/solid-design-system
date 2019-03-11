import React from 'react';
import { storiesOf } from '@storybook/react';
import TextField from './TextField';

storiesOf('Elements/TextField', module)
  .add('Basic', () => <TextField />)
  .add('With placeholder', () => <TextField placeholder="Placeholder" />)
  .add('With Title', () => (
    <TextField title="Title" placeholder="Placeholder" />
  ))
  .add('With Description', () => (
    <TextField
      title="Title"
      description="Description"
      placeholder="Placeholder"
    />
  ));
