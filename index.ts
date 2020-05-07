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

  get: async () => {

  },
  post: async () => {

  },
}

export default $;
