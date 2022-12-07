const gql = String.raw;

const getUserByHandleQuery = (token: string) => {
  const getUserQuery = gql`
    query {
      customer(customerAccessToken: "${token}") {
        id
        firstName
        lastName
        acceptsMarketing
        email
        phone
      }
    }
  `;
  return getUserQuery;
};

export { getUserByHandleQuery };
