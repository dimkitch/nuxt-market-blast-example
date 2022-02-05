import axios from '@/plugins/axios';
import { UserStore } from '@/store';

function addToken(params: any = {}) {
  if (!UserStore.token) return params;
  const TOKEN = `Bearer ${UserStore.token}`;

  const HEADERS = {
    ...(params.headers ? params.headers : {}),
    Authorization: TOKEN,
  };

  return { ...params, headers: HEADERS };
}

export default {
  async get(url: string, params: any = {}): Promise<any> {
    try {
      const response = await axios.get(url, addToken(params));
      return response;
    } catch (e: any) {
      console.error(e);
      return e.response;
    }
  },

  async post(url: string, data: any = null, params: any = {}): Promise<any> {
    try {
      const response = await axios.post(url, data, addToken(params));
      return response;
    } catch (e: any) {
      console.error(e);
      return e.response;
    }
  },

  async put(url: string, data: any = null, params: any = {}): Promise<any> {
    try {
      const response = await axios.put(url, data, addToken(params));
      return response;
    } catch (e: any) {
      console.error(e);
      return e.response;
    }
  },

  async delete(url: string, params: any = {}): Promise<any> {
    try {
      const response = await axios.delete(url, addToken(params));
      return response;
    } catch (e: any) {
      console.error(e);
      return e.response;
    }
  },
};
