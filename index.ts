export interface Ret {
  code: number,
  message: string,

  [key: string]: any;
}

const $ = {
  loading: () => {

  },
  alert: () => {

  },
  confirm: () => {

  },

  suc: () => {

  },
  err: () => {

  },
  ret: (ret: Ret) => {
    return {
      suc: (fn: Function) => {
        ret.code === 1 && fn();
      },
      err: (fn: Function) => {
        ret.code !== 1 && fn();
      }
    }
  },

  http: async (...args: any[]) => {

  },
  get: async () => {

  },
  post: async () => {

  },
  patch: async () => {

  },
  put: async () => {

  },
  delete: async () => {

  }
};

const methods = ['get', 'post', 'patch', 'put', 'delete'];
methods.forEach((method: string) => {
  // @ts-ignore
  $[method] = async (...args: any[]) => {
    let config;

    if (typeof args[0] === 'string') {
      config = args[1] || {};
      config.url = args[0];
    } else {
      config = args[0];
    }

    config.method = method;

    return $.http(config);
  };
});

export default $;
