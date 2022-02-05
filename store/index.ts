import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';

//

import Product from '@/store/api/Product';
import User from '@/store/api/User';

//

let productStore: Product;
let UserStore: User;

//

const initialiseStores = (store: Store<any>) => {
  productStore = getModule(Product, store);
  UserStore = getModule(User, store);
};

//

const initializer = (store: Store<any>) => initialiseStores(store);
export const plugins = [initializer];

export { initialiseStores, productStore, UserStore };
