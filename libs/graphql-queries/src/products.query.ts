const gql = String.raw;

const getTrendingProducts = gql`
  query trendingProducts {
    collection(handle: "trending") {
      title
      products(first: 4) {
        nodes {
          handle
          title
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          availableForSale
          featuredImage {
            altText
            height
            width
            url
            id
          }
        }
      }
    }
  }
`;

export { getTrendingProducts };
