// incoming data from firebase
export interface IProductIncoming {
  [key: string]: Array<{
    description: string;
    images: {
      [key: string]: string;
    };
    price: number;
    title: string;
  }>;
}

export interface IProduct {
  id: string;
  title: string;
  description: string;
  images: Array<string>;
  price: number;
}
