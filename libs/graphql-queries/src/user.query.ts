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
        addresses(first:20) {
          nodes {
            id
            firstName
            lastName
            address1
            city
            zip
          }
        }
        orders(first: 10) {
          edges {
            node {
              id
              orderNumber
              fulfillmentStatus
              processedAt
              financialStatus
              currentTotalPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `;
  return getUserQuery;
};

const updateUserQuery = gql`
  mutation customerUpdate(
    $customer: CustomerUpdateInput!
    $customerAccessToken: String!
  ) {
    customerUpdate(
      customer: $customer
      customerAccessToken: $customerAccessToken
    ) {
      customer {
        firstName
        lastName
        email
        phone
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

export { getUserByHandleQuery, updateUserQuery };
