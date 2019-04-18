import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Elements/Card', module)
  .add('Default', () => <Card>Card</Card>)
  .add('Active', () => <Card active>Card</Card>)
  .add('Stack', () => <Card stack>Card</Card>);
