import React, { ChangeEvent } from 'react';
import { PhoneNumberInput, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  align-items: center;
`

export const Atoms = () => {
  const [localValue, setValue] = React.useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
  };


  return <Wrapper>
    <T>
      Пример поиска ошибок и отладки кода с помощью React Developer Tools
    </T>
    <PhoneNumberInput
      dimension="m"
      value={localValue}
      onlyCountries={['RUS', 'BLR', 'TJK', 'UZB']}
      style={{ maxWidth: '320px' }}
      onChange={handleChange}
    />
  </Wrapper>
}
