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
    data: {
        result: any;
        error: boolean;
        message: string;
    };
    status: number;
    config:
        | {
              method: string;
              url: string;
          }
        | false;
}): false | { error: boolean; result: any } => {
    if (!response) return response;

    if (response.data.error) console.error(response.data.message);

    return {
        result: response.data.error
            ? response.data.message
            : response.data.result,
        error: response.data.error,
    };
};

// Открываем внешнюю ссылку
export const openExtUrl = (url: string, target = '_blank'): void => {
    url ? window.open(url, target) : console.error('No url given');
};
