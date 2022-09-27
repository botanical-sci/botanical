import { CollectionModel } from './collections.model';

export interface MenuItemModel {
  title: string;
  type: '';
  resourceId: 'string';
  items: MenuItemModel[];
}

export interface MenuModel {
  items: MenuItemModel[];
}

export interface HomeBasicModel {
  data: {
    trendingProducts: CollectionModel;
    bestSellersProducts: CollectionModel;
    menu: MenuModel;
  };
}
