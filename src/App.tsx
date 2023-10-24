import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import { InputsForm } from './examples2/inputs';
import { LeftPane, PaneItemsType } from './left-pane';
import { Debug } from './examples2/debug';
import { Typography } from './examples2/typography';
import { Pagination } from './examples2/pagination';
import { SelectExample } from './examples3/select';
import { TableLoadOnScroll } from './examples3/table/example1';
import { TableLoadOnScrollSpinner } from './examples3/table/example2';
import { TableLoadOnScrollSkeleton } from './examples3/table/example3';
import { Example1 } from './examples1';

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`

const ContentWrapper = styled.div`
  flex: 1 0 70%;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`

function App() {
  const [selected, setSelected] = useState<PaneItemsType>('STYLED');

  const renderContent = useMemo(() => {
    switch (selected) {
      case 'STYLED': return <Example1 />;

      case 'DEBUG': return <Debug />;

      case 'TYPOGRAPHY': return <Typography />

      case 'INPUTS': return <InputsForm />

      case 'PAGINATION': return <Pagination />

      case 'SELECT': return <SelectExample />

      case 'TABLE_LOAD_ON_SCROLL': return <TableLoadOnScroll />

      case 'TABLE_LOAD_ON_SCROLL_SPINNER': return <TableLoadOnScrollSpinner />

      case 'TABLE_LOAD_ON_SCROLL_SKELETON': return <TableLoadOnScrollSkeleton />

      default: return null;
    }
  }, [selected])


  return (
    <MainContainer>
      <LeftPane selected={selected} onSelectItem={setSelected}/>
      <ContentWrapper>
        {renderContent}
      </ContentWrapper>
    </MainContainer>
  );
}

export default App;
