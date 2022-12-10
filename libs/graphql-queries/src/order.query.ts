const gql = String.raw;

const getOrderByHandleQuery = (id: string) => {
  const getOrderQuery = gql`
    query {
      node(id: "${id}") {
        id
        ... on Order {
            name
            orderNumber
            processedAt
            fulfillmentStatus
            financialStatus
            currentTotalPrice {
              amount
            }
            lineItems(first:10) {
                edges {
                  node {
                    variant {
                      id
                      title
                      priceV2 {
                        amount
                      }
                      image {
                        src
                      }
                    }
                  }
                }
            }
        }
      }
    }
  `;
  return getOrderQuery;
};

export { getOrderByHandleQuery };
