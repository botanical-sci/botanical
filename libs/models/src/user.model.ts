export interface UserResponseModel {
  data: {
    customer: {
      id: string;
      firstName: string;
      lastName: string;
      acceptsMarketing: boolean;
      email: string;
      phone: string | null;
    };
  };
}

export interface UpdateUserResponseModel {
  data: {
    customerUpdate: {
      customer: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string | null;
      };
      customerAccessToken: {
        accessToken: string;
        expiresAt: string;
      } | null;
      customerUserErrors: [
        {
          field: string[];
          message: string;
        }
      ];
    };
  };
}

interface UserModel {
  id: string;
  firstName: string;
  lastName: string;
  acceptsMarketing: boolean;
  email: string;
  phone: string | null;
}

export interface UserStoreModel {
  user: UserModel | null;
  initiate: (user: UserModel | null) => void;
  getUser: () => void;
}
