import services from '@/config/api';
import { replace } from 'lodash';

const paramsParser = (
  inputString: string,
  params: { [key: string]: string | number },
) => {
  Object.entries(params).forEach(([key, value]) => {
    inputString = replace(inputString, `%${key}%`, String(value));
  });
  return inputString;
};

// Строим маршруты
export const getRoute = (
  service: string,
  route: string,
  params?: { [key: string]: string | number },
  query?: { [key: string]: string | number },
): string => {
  if (!services[service]) {
    console.error(service + ': no such service');
    return '';
  }
  let p = params
    ? paramsParser(services[service].routes[route], params)
    : services[service].routes[route];
  let q = '';
  if (query)
    Object.entries(query).forEach(([key, value]) => {
      q += `${q.length ? '&' : '?'}${key}=${value}`;
    });

  return `http${services[service].secure ? 's' : ''}://${
    services[service].domain
  }/${p}${q}`;
};

// Обрабатываем ответ
export const getResponseData = (response: {
  data: any;
  status: number;
  statusText: string;
  config:
    | {
        method: string;
        url: string;
      }
    | false;
}): false | { error: boolean; result: any } => {
  if (!response) return response;

  if (response.status !== 200) console.error(response.statusText);

  return {
    result: response.data ? response.data : response.statusText,
    error: response.data ? false : true,
  };
};

// Открываем внешнюю ссылку
export const openExtUrl = (url: string, target = '_blank'): void => {
  url ? window.open(url, target) : console.error('No url given');
};
