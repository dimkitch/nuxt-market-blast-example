import { Module, VuexModule } from 'vuex-module-decorators';

@Module({
  name: 'api/Product',
  stateFactory: true,
  namespaced: true,
})
export default class Product extends VuexModule {
  product = [];
}
