const gql = String.raw;

const createAddressQuery = gql`
  mutation customerAddressCreate(
    $address: MailingAddressInput!
    $customerAccessToken: String!
  ) {
    customerAddressCreate(
      address: $address
      customerAccessToken: $customerAccessToken
    ) {
      customerAddress {
        address1
        address2
        city
        company
        country
        firstName
        lastName
        phone
        province
        zip
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

export { createAddressQuery };
