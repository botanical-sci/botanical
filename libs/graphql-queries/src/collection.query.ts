
const gql = String.raw;

const getCollectionByHandleQuery = (handle: string) => gql`
{
    collection(handle: "${handle}") {
      title
      handle
      products(first: 100) {
        nodes {
          handle
          id
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

export { getCollectionByHandleQuery };
