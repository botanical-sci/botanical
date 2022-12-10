const gql = String.raw;

const getOrderByHandleQuery = (id: string) => {
  const getOrderQuery = gql`
    query {
      node(id: "${id}") {
        id
        ... on Order {
          name
        }
      }
    }
  `;
  return getOrderQuery;
};

export { getOrderByHandleQuery };
