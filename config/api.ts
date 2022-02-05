import { IServiceList } from '@/types/Service';

const services: IServiceList = {
  main: {
    domain: `${process.env.DOMAIN}`,
    secure: true,
    routes: {
      auth: 'user/auth',
    },
  },
};

export default services;
