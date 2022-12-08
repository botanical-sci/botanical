export interface RegisterResponseModel {
  data: {
    customerCreate: {
      customer: {
        acceptsMarketingd: boolean;
        email: string;
        firstName: string;
        id: string;
        lastName: string;
        phone: string | null;
      };
      userErrors: [
        {
          field: string[];
          message: string;
        }
      ];
    };
  };
  errors: [
    {
      message: string;
    }
  ];
}
export interface LoginResponseModel {
  data: {
    customerAccessTokenCreate: {
      customerAccessToken: {
        accessToken: string;
        expiresAt: string;
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
