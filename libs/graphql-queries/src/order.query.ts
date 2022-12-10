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
        }
      }
    }
  `;
  return getOrderQuery;
};

export { getOrderByHandleQuery };
