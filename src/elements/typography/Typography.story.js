import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Typography from './Typography';

storiesOf('Elements/Typography', module)
  .add('Title', () => <Typography variant="title">Title</Typography>)
  .add('Subtitle', () => <Typography variant="subtitle">Subtitle</Typography>)
  .add('Header1', () => <Typography variant="header1">Header1</Typography>)
  .add('Header2', () => <Typography variant="header2">Header2</Typography>)
  .add('Paragraph', () => (
    <Typography variant="paragraph">Paragraph</Typography>
  ))
  .add('Description1', () => (
    <Typography variant="description1">Description1</Typography>
  ))
  .add('Description2', () => (
    <Typography variant="description2">Description2</Typography>
  ));
