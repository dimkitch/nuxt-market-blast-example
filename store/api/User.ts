import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { lsHelpers } from '@/helpers/localStorageHelpers';
import axios from '@/helpers/queryHelpers';
import { IUser } from '@/types/features/User';

@Module({
  name: 'api/User',
  stateFactory: true,
  namespaced: true,
})
export default class User extends VuexModule {
  public token = '';
  rememberUser = true;
  user: IUser = {} as IUser;

  get USER() {
    return this.user;
  }

  get TOKEN() {
    return this.token;
  }

  get REMEMBER_USER() {
    return this.rememberUser;
  }
}
