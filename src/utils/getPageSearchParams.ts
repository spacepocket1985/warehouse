import { validPageSizes } from '../components/items/itemsOnPage/ItemsOnPage';

const UrlParams = new URLSearchParams(window.location.search);

const pageSearchParam = Number(UrlParams.get('page')) || 1;
const itemNameSearchParam = UrlParams.get('itemName') || '';

const pageSizeValue = Number(UrlParams.get('pageSize'));

const pageSizeSearchParam = validPageSizes.includes(pageSizeValue)
  ? pageSizeValue
  : 10;

export const searchParams = {
  pageSearchParam,
  itemNameSearchParam,
  pageSizeSearchParam,
};
