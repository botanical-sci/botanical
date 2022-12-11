export interface CreateAddressResponseModel {
  data: {
    customerAddressCreate: {
      customerAddress: {
        address1: string;
        address2: string;
        city: string;
        company: string;
        country: string;
        firstName: string;
        lastName: string;
        phone: string;
        province: string;
        zip: string;
      };
      customerUserErrors: [
        {
          field: string[];
          message: string;
        }
      ];
    };
  };
}
export interface DeleteAddressResponseModel {
  data: {
    deletedCustomerAddressId: string;
    customerUserErrors: [
      {
        field: string[];
        message: string;
      }
    ];
  };
}

export interface UpdateAddressResponseModel {
  data: {
    customerAddressCreate: {
      customerAddress: {
        address1: string;
        address2: string;
        city: string;
        company: string;
        country: string;
        firstName: string;
        lastName: string;
        phone: string;
        province: string;
        zip: string;
      };
      customerUserErrors: [
        {
          field: string[];
          message: string;
        }
      ];
    };
  };
}
