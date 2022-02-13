import { IServiceList } from '@/types/Service';

const https = process.env.SECURE === 'true';

const services: IServiceList = {
  main: {
    domain: `${process.env.DOMAIN}`,
    secure: https,
    routes: {
      auth: 'user/auth',
      product: 'product.json',
    },
  },
};

export default services;
