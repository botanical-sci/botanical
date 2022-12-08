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
}
