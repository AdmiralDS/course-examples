import { Item, Wrapper } from './styled';
import { TableLoadOnScroll } from '../examples3/table/example1';

export const PaneItems = {
  STYLED: 'Пример стилизации',
  DEBUG: 'Инструменты отладки',
  TYPOGRAPHY: 'Typography',
  INPUTS: 'Поля ввода',
  PAGINATION: 'Pagination',
  SELECT: 'Select',
  TABLE_LOAD_ON_SCROLL: 'Таблица с подгрузкой',
  TABLE_LOAD_ON_SCROLL_SPINNER: 'Таблица со спиннером',
  TABLE_LOAD_ON_SCROLL_SKELETON: 'Таблица со скелетоном',
} as const;

export type PaneItemsType = keyof typeof PaneItems;

export interface LeftPaneProps {
  selected: PaneItemsType;
  onSelectItem: (value: PaneItemsType) => void;
}

export const LeftPane = ({ selected, onSelectItem }: LeftPaneProps) => {

  const renderItems = () => {
    return Object.entries(PaneItems).map(([key, value]) => {
      return <Item $selected={key === selected} key={key}
                   onClick={() => onSelectItem(key as PaneItemsType)}>{value}</Item>;
    });
  };

  return <Wrapper>
    { renderItems() }
  </Wrapper>;
};
