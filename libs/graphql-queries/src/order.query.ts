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
                    title
                    originalTotalPrice {
                      amount
                    }
                    variant {
                      image {
                        url
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
