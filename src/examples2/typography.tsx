import React from 'react';
import { MainPrimaryColorName, T } from '@admiral-ds/react-ui';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-items: flex-start;
`

const OrangeColor = css`
  color: ${(p) => p.theme.color['Warning/Warning 50 Main']};
`;

const BlueText = styled(T)`
  color: ${(p) => p.theme.color[MainPrimaryColorName]};
`;

const RedText = styled(T)`
  color: ${(p) => p.theme.color['Error/Error 60 Main']};
`;

const CustomParagraph = styled(T)`
  color: ${(p) => p.theme.color['Neutral/Neutral 70']};
`;

export const Typography = () => {
  return <Wrapper>
    <T font="Subtitle/Subtitle 2" color="Primary/Primary 80">Текст с шрифтом Subtitle/Subtitle 2</T>
    <T font="Body/Body 1 Long" as="h3" cssMixin={OrangeColor}>
      Это заголовок третьего уровня (as="h3") и стилем Body/Body 1 Long.
    </T>
    <CustomParagraph font="Header/H5" as="p">
      Это параграф (forwardedAs="p") со стилем Header/H5 и цветом шрифта Tertiary.
    </CustomParagraph>
    <BlueText font={'Body/Body 1 Short'} as="a" href={'https://'}>
      Это ссылка (пока работает as="a") со стилем Body/Body 1 Short, цветом шрифта Primary,
    </BlueText>
    <RedText font={'Body/Body 1 Short'} forwardedAs="a" href={'https://'}>
      А в styled-components 6 будет работать forwardedAs="a".
    </RedText>
  </Wrapper>
}
