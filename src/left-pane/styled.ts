import styled from 'styled-components';
import { typography } from '@admiral-ds/react-ui';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  min-width: 150px;
  max-width: 250px;
  background-color: ${(p) => p.theme.color['Special/Elevated BG']}
`;

export const Item = styled.div<{$selected?: boolean}>`
  ${typography['Additional/L']};
  color: ${(p) => p.theme.color['Primary/Primary 80']};
  cursor: pointer;
  line-height: 130%;
  padding: 16px;
  
  background-color: ${(p) => p.$selected ? p.theme.color['Opacity/Focus'] : p.theme.color['Special/Elevated BG']};
  
  &:hover {
    background-color: ${(p) => p.theme.color['Opacity/Hover']};
  }
`
