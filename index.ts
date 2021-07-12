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

// TODO allow global config
const RetConfig = {
  defaultSucCode: 0,
  defaultSucMessage: '操作成功',
  defaultErrCode: -1,
  defaultErrMessage: '很抱歉，系统繁忙，请稍后再试。',
};

export class Ret implements RetInterface {
  [x: string]: any;

  code = RetConfig.defaultErrCode;
  message = RetConfig.defaultErrMessage;

  constructor(ret?: UserRet) {
    if (ret) {
      Object.assign(this, ret);
    }
  }

  static new(ret?: UserRet): Ret {
    return new Ret(ret);
  }

  static suc(message?: UserRet | string): Ret {
    return this.new().buildRet(message || RetConfig.defaultSucMessage);
  }

  static err(message: UserRet | string, code?: number): Ret {
    return this.new().buildRet(message, code || RetConfig.defaultErrCode);
  }

  isSuc(): boolean {
    return this.code === RetConfig.defaultSucCode;
  }

  isErr(): boolean {
    return !this.isSuc();
  }

  private buildRet(message: UserRet | string, code?: number): Ret {
    if (typeof code === 'undefined') {
      code = RetConfig.defaultSucCode;
    }

    let data;
    if (typeof message === 'string') {
      data = {message, code};
    } else {
      data = {message: RetConfig.defaultSucMessage, code, ...message}
    }
    Object.assign(this, data);
    return this;
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
