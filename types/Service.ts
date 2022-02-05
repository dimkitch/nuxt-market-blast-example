export interface IService {
  domain: string;
  secure: boolean;
  routes: { [key: string]: string };
}

export interface IServiceList {
  [key: string]: IService;
}
