/* eslint-disable @typescript-eslint/no-unused-vars */

interface RetInterface {
  code: number;
  message: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface ArrayAccess {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

interface HttpConfig {
  url?: string
  method?: string

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

type UserRet = Record<string, unknown>;

type CallbackFunction = () => void;

export class Ret implements RetInterface {
  code = -1;
  // TODO language support
  message = '很抱歉，系统繁忙，请稍后再试。';

  constructor(ret: UserRet) {
    Object.assign(this, ret);
  }

  static new(ret: UserRet): Ret {
    return new Ret(ret);
  }

  isSuc(): boolean {
    return this.code === 0;
  }

  isErr(): boolean {
    return !this.isSuc();
  }
}

const $ = {
  loading: () => {
    // to be implemented by other packages
  },
  alert: () => {
    // to be implemented by other packages
  },
  confirm: () => {
    // to be implemented by other packages
  },

  suc: () => {
    // to be implemented by other packages
  },
  err: () => {
    // to be implemented by other packages
  },
  ret: (ret: RetInterface) => {
    return {
      suc: (fn: CallbackFunction) => {
        ret.code === 0 && fn();
      },
      err: (fn: CallbackFunction) => {
        ret.code !== 0 && fn();
      },
    };
  },

  http: async (...args: any[]) => {
    return {
      ret: new Ret({}),
    };
  },
  get: async (...args: any[]) => {
    // to be implemented by other packages
  },
  post: async (...args: any[]) => {
    // to be implemented by other packages
  },
  patch: async (...args: any[]) => {
    // to be implemented by other packages
  },
  put: async (...args: any[]) => {
    // to be implemented by other packages
  },
  delete: async (...args: any[]) => {
    // to be implemented by other packages
  },

  req: (name: string): string | null => {
    return null;
  },
  url: (): string => {
    return '';
  },
  apiUrl: (): string => {
    return '';
  },
} as ArrayAccess;

['get', 'post', 'patch', 'put', 'delete'].forEach((method: string) => {
  $[method] = async (urlOrConfig: string | HttpConfig, config: HttpConfig) => {
    let conf: HttpConfig;

    if (typeof urlOrConfig === 'string') {
      conf = config || {};
      conf.url = urlOrConfig;
    } else {
      conf = urlOrConfig;
    }

    conf.method = method;

    return $.http(conf);
  };
});

export default $;
