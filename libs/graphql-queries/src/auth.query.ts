const gql = String.raw;

const registerQuery = gql`
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        id
        email
        phone
        acceptsMarketing
        firstName
        lastName
      }
      userErrors {
        field
        message
      }
    }
  }
`;
const loginQuery = gql`
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
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

export { registerQuery, loginQuery };
