export interface SingleProductImage {
    node: {
      altText: string;
      height: number;
      width: number;
      url: string;
    };
}
export interface SingleProductModle {
  id: string;
  title: string;
  handle: string;
  availableForSale: true;
  descriptionHtml: string;
  ratingCount: {
    type: 'string';
    value: number;
  };
  priceRange: {
    minVariantPrice: { amount: string; currencyCode: string };
    maxVariantPrice: { amount: string; currencyCode: string };
  };
  productType: string;
  seo: {
    description: string;
    title: string;
  };
  featuredImage: {
    altText: string;
    height: number;
    width: number;
    url: string;
  };
  images: {edges: SingleProductImage[]};
}

export interface SingleProductModel {
  data: {
    product: SingleProductModle;
  };
}