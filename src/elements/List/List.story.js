import React from 'react';
import { storiesOf } from '@storybook/react';
import List from './List';
import ListItem from '../ListItem';

storiesOf('Elements/List', module)
  .add('Basic', () => (
    <List>
      <ListItem>Basic List Item 1</ListItem>
      <ListItem>Basic List Item 2</ListItem>
      <ListItem>Basic List Item 3</ListItem>
      <ListItem>Basic List Item 4</ListItem>
      <ListItem>Basic List Item 5</ListItem>
    </List>
  ))
  .add('With head', () => (
    <List>
      <ListItem head>Basic List Item 1 (Head)</ListItem>
      <ListItem>Basic List Item 2</ListItem>
      <ListItem>Basic List Item 3</ListItem>
      <ListItem>Basic List Item 4</ListItem>
      <ListItem>Basic List Item 5</ListItem>
    </List>
  ))
  .add('With clicked element', () => (
    <List>
      <ListItem head>Basic List Item 1 (Head)</ListItem>
      <ListItem>Basic List Item 2</ListItem>
      <ListItem>Basic List Item 3</ListItem>
      <ListItem selected>Basic List Item 4 (Selected)</ListItem>
      <ListItem>Basic List Item 5</ListItem>
    </List>
  ));
