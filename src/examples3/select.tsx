import React from 'react';
import { Option, Select, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  align-items: center;
`

export const SelectExample = () => {
  return <Wrapper>
    <T>
      select
    </T>
    <Select
      dimension="m"
      style={{ maxWidth: '640px', minWidth: 320 }}
    >
      <Option value='1'>Option 1</Option>
      <Option value='21'>My option</Option>
      <Option value='long'>Option with very very long text</Option>
      <Option value='last'>Last</Option>
    </Select>
    <T>
      searchSelect в режиме multiple
    </T>
    <Select
      dimension="m"
      style={{ maxWidth: '640px', minWidth: 320 }}
      multiple
      showCheckbox
      mode="searchSelect"
    >
      <Option value='1'>Option 1</Option>
      <Option value='21'>My option</Option>
      <Option value='long'>Option with very very long text</Option>
      <Option value='last'>Last</Option>
    </Select>
  </Wrapper>
}
