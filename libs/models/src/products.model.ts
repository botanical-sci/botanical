export interface ProductModel {
  title: string;
  handle: string;
  description: string;
  id: string;
  priceRange: {
    minVariantPrice: { amount: string; currencyCode: string };
    maxVariantPrice: { amount: string; currencyCode: string };
  };
  availableForSale: true;
  featuredImage: {
    altText: string;
    height: number;
    width: number;
    url: string;
    id: string;
  };
}

export interface ProductsModel {
  nodes: ProductModel[];
}
