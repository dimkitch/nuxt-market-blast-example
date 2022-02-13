import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import axios from '@/helpers/queryHelpers';

import { getRoute, getResponseData } from '@/helpers/routeHelpers';
import { IProduct, IProductIncoming } from '@/types/features/Product';

const transformationsIncomingProductData = async (
  data: IProductIncoming,
): Promise<Array<IProduct>> => {
  return new Promise((resolve, reject) => {
    const response = Object.values(data).map((item, index) => {
      //
      const id = Object.keys(data)[index];
      //
      const images = Object.values(item[0].images);
      //
      return {
        ...item[0],
        images: images,
        id: id,
      };
    });
    resolve(response);
  });
};

const getProductById = async (
  id: string,
  data: Array<IProduct>,
): Promise<IProduct> => {
  return new Promise((resolve, reject) => {
    const response =
      data.find(product => {
        if (product.id === id) {
          const img =
            product.images && product.images.length ? product.images[0] : null;
          return { ...product, images: img };
        }
      }) || ({} as IProduct);
    resolve(response);
  });
};

@Module({
  name: 'api/Product',
  stateFactory: true,
  namespaced: true,
})
export default class Product extends VuexModule {
  productList: Array<IProduct> = [];
  productOne: IProduct = {} as IProduct;

  get PRODUCT_LIST() {
    return this.productList;
  }

  get PRODUCT_ONE() {
    return this.productOne;
  }

  @Mutation
  SET_PRODUCT_LIST(data: Array<IProduct>) {
    this.productList = data;
  }

  @Mutation
  SET_ONE_PRODUCT(data: IProduct) {
    this.productOne = data;
  }

  @Action
  async GET_PRODUCT_LIST() {
    const response = getResponseData(
      await axios.get(getRoute('main', 'product', {}, {})),
    );
    if (!response) return;
    this.SET_PRODUCT_LIST(
      await transformationsIncomingProductData(response.result),
    );
  }

  @Action
  async GET_ONE_PRODUCT(id: string) {
    if (!this.productList || !this.productList.length) {
      await this.GET_PRODUCT_LIST();
    }
    const response = await getProductById(id, this.productList);
    this.SET_ONE_PRODUCT(response);
  }
}
