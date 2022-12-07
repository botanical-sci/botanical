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
