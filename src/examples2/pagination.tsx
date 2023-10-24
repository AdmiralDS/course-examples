import React from 'react';
import { PaginationOne, PaginationTwo, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  align-items: center;
`;

export const Pagination = () => {
  const [pageSize, setPageSize] = React.useState(8);
  const [page, setPage] = React.useState<number>(1);
  const pageSizes = [8, 20, 50, 100, 200];

  const [page2, setPage2] = React.useState(23095);
  const handleChange2 = (event: any, page: number) => setPage2(page);
  const handleChange1 = ({ page, pageSize }) => {
    setPage(page);
    setPageSize(pageSize);
  };

  return <Wrapper>
    <T color='Error/Error 60 Main'>
      Используйте для количества страниц не более 999 (три знака). Для большего количества страниц используйте компонент
      Pagination One.
    </T>
    <PaginationTwo count={100} page={page2} onChange={handleChange2} />

    <T color='Primary/Primary 60 Main'>
      Вот так
    </T>

    <PaginationOne
      pageSize={pageSize}
      totalItems={100500}
      page={page}
      onChange={handleChange1}
      pageSizes={pageSizes} />
  </Wrapper>;
};
