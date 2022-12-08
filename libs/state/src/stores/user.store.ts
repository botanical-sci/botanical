import { mountStoreDevtool } from 'simple-zustand-devtools';
import create from 'zustand';

import { UserStoreModel } from '@shopify/models';

const useUserStore = create<UserStoreModel>((set, get) => ({
  user: null,
  initiate: (newUser) =>
    set(() => {
      return { user: newUser };
    }),
}));

if (process.env['NODE_ENV'] === 'development') {
  mountStoreDevtool('UserStore', useUserStore);
}

export default useUserStore;
