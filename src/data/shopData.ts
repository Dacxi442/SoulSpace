import type { CategoryFilter, ProductGroup } from '../types';
import { CATEGORIES_LIST, PRODUCT_GROUPS, getProductGroups } from './bagsData';
import { THRIFT_PRODUCTS } from './thriftsData';

export const SHOP_CATEGORIES_LIST: CategoryFilter[] = [
  ...CATEGORIES_LIST,
  'Thrift Clothes',
];

export const SHOP_PRODUCT_GROUPS: ProductGroup[] = [
  ...PRODUCT_GROUPS,
  ...getProductGroups(THRIFT_PRODUCTS),
];