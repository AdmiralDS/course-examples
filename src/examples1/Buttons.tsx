import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Button, T } from '@admiral-ds/react-ui';
import type { ButtonProps, ButtonAppearance, Theme, BorderRadiusType } from '@admiral-ds/react-ui';
import StarSolid from '@admiral-ds/icons/build/system/StarSolid.svg?react';

const ButtonContainer = styled.div<{ appearance?: ButtonAppearance }>`
  padding: 24px;
  position: relative;
  display: block;

  > * {
    margin: 8px 16px 0 0;
  }

  ${(p) => p.appearance === 'white' && 'background-color: #2B313B;'};
`;

export const Buttons = (props: ButtonProps & { themeBorderKind?: BorderRadiusType }) => {
  function purpleTheme(theme: Theme): Theme {
    const purple = {...theme, color: {...theme.color}};
    purple.color['Primary/Primary 60 Main'] = '#8A3FFC';
    purple.color['Primary/Primary 70'] = '#6929C4';
    return purple;
  }

  function tealTheme(theme: Theme): Theme {
    const teal = {...theme, color: {...theme.color}};
    teal.color['Primary/Primary 60 Main'] = '#007D79';
    teal.color['Primary/Primary 70'] = '#005D5D';
    return teal;
  }

  return (
    <ThemeProvider theme={tealTheme}>
      <T font="Body/Body 1 Long" as="span">
        Кнопки представлены в четырех размерностях XL, L, M и S. Для дополнительных акцентов и более прозрачных действий
        могут применяться кнопки с иконками и текстом. Иконка может быть как перед надписью, так и после
        (iconStart/iconEnd). В некоторых случаях могут использоваться кнопки только с иконками. Как правило, это иконки,
        значения которых общепонятны и не вызывают сомнений.
      </T>
      <ButtonContainer appearance={props.appearance}>
        <Button {...props}>Button 56</Button>

        <Button {...props} iconStart={<StarSolid />}>
          Button 56
        </Button>

        <Button {...props} iconEnd={<StarSolid />}>
          Button 56
        </Button>

        <ThemeProvider theme={purpleTheme}>
          <Button {...props} iconStart={<StarSolid />} displayAsSquare />
        </ThemeProvider>

      </ButtonContainer>
    </ThemeProvider>
  );
};
