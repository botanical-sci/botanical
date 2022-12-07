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
    };
  };
}
