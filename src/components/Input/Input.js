import React from 'react';
import { Input, Item, Label } from 'native-base';

const InputContainer = ({ label }) =>
  <Item floatingLabel>
    <Label>{label}</Label>
    <Input />
  </Item>;

export default InputContainer;
