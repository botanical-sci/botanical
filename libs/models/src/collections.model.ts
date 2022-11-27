import { ProductModel } from './products.model';

export interface CollectionModel {
  title: string;
  handle: string;
  products: {
    nodes: ProductModel[];
  };
}

export interface SingleCollectionModel {
  data: {
    collection: CollectionModel
  }
}