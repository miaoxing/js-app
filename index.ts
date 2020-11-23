export class Ret {
  code = -1;
  // TODO language support
  message = '很抱歉，系统繁忙，请稍后再试。';

  [key: string]: any;

  constructor(ret: object) {
    Object.assign(this, ret);
  }

  static new(ret: object) {
    return new Ret(ret);
  }

  isSuc() {
    return this.code === 0;
  }

  isErr() {
    return !this.isSuc();
  }
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
        ret.isSuc() && fn();
      },
      err: (fn: Function) => {
        ret.isErr() && fn();
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

  },

  req: (name: string): string | null => {
    return null;
  },
  url: (): string => {
    return '';
  },
  apiUrl: (): string => {
    return ''
  },
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

    return $.http(config).then((ret: any) => new Ret(ret));
  };
});

export default $;
