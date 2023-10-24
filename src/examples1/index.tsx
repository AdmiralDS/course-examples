import { useState } from 'react';
import { Button, Link, T } from '@admiral-ds/react-ui';
import { Buttons } from './Buttons';
import styled from 'styled-components';
// Импорт иконки как URL ресурс
import reactLogo from '../assets/react.svg';
// Импорт иконки через настроенный SVGR (https://react-svgr.com/docs/what-is-svgr/)
import ArrowRightOutline from '@admiral-ds/icons/build/system/ArrowRightOutline.svg?react';

const Divider = styled.div`
  width: 10px;
  height: 12px;
`;

const StyledButton = styled(Button)`
  &&& {
    background-color: ${(p) => p.theme.color['Error/Error 60 Main']}
  };
`

const Wrapper = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  align-items: center;
  align-self: flex-start;
`

export const Example1 = () => {
  const [count, setCount] = useState(0);

  return <Wrapper>
    <h1>Vite + React</h1>
    <div>
      <a href='https://vitejs.dev' target='_blank'>
        {/* импорт иконки через директорию assets. Доступ к этой директории есть и у index.html */}
        <img src='/vite.svg' className='logo' alt='Vite logo' />
      </a>
      <a href='https://react.dev' target='_blank'>
        <img src={reactLogo} className='logo react' alt='React logo' />
      </a>
    </div>
    <div className='card'>
      <button className='button' onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <T font='Subtitle/Subtitle 1' as='p'>
        Edit <code>src/App.tsx</code> and save to test HMR
      </T>
    </div>
    <Button appearance='primary'>TEST</Button>
    <StyledButton appearance='primary'>Стилизованная кнопка</StyledButton>
    <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    <Link appearance='primary' href='https://admiralds.github.io/react-ui' target='_blank' rel='noopener noreferrer'>
      Admiral Storybook
      <Divider />
      <ArrowRightOutline width={20} />
    </Link>
    <Buttons />
  </Wrapper>;
};
