import {Ret} from '../';

describe('Ret', () => {
  test('suc with string message', () => {
    const ret = Ret.suc('ok');
    expect(ret.code).toBe(0);
    expect(ret.message).toBe('ok');
    expect(ret.isSuc()).toBeTruthy();
  });

  test('suc with object without code', () => {
    const ret = Ret.suc({
      message: 'ok',
      data: 'test',
    });
    expect(ret.code).toBe(0);
    expect(ret.message).toBe('ok');
    expect(ret.data).toBe('test');
    expect(ret.isSuc()).toBeTruthy();
  });

  test('suc with object without message', () => {
    const ret = Ret.suc({
      data: 'test',
    });
    expect(ret.code).toBe(0);
    expect(ret.message).toBe('操作成功');
    expect(ret.data).toBe('test');
    expect(ret.isSuc()).toBeTruthy();
  });

  test('err with string message', () => {
    const ret = Ret.err('err');
    expect(ret.code).toBe(-1);
    expect(ret.message).toBe('err');
    expect(ret.isSuc()).toBeFalsy();
  });

  test('err with custom code', () => {
    const ret = Ret.err('err', 1);
    expect(ret.code).toBe(1);
    expect(ret.message).toBe('err');
    expect(ret.isSuc()).toBeFalsy();
  });

  test('err with object without code', () => {
    const ret = Ret.err({
      message: 'err',
      data: 'test',
    });
    expect(ret.code).toBe(-1);
    expect(ret.message).toBe('err');
    expect(ret.data).toBe('test');
    expect(ret.isSuc()).toBeFalsy();
  });

  test('Ret.isSuc', () => {
    expect(Ret.isSuc({code: 0, message: 'suc'})).toBeTruthy();
    expect(Ret.isSuc({code: 0})).toBeTruthy();
  });

  test('Ret.isErr', () => {
    expect(Ret.isErr({code: 1, message: 'err'})).toBeTruthy();
    expect(Ret.isErr({code: -1})).toBeTruthy();
    expect(Ret.isErr({})).toBeTruthy();
    expect(Ret.isErr(null)).toBeTruthy();
  });
});
