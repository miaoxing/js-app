import {Ret} from '../';

describe('Ret', () => {
  test('suc', () => {
    const ret = new Ret({code: 0, message: 'Success'});
    expect(ret.code).toBe(0);
    expect(ret.message).toBe('Success');
    expect(ret.isSuc()).toBeTruthy();
    expect(ret.isErr()).toBeFalsy();
  });

  test('err', () => {
    const ret = new Ret({code: 1, message: 'Error'});
    expect(ret.code).toBe(1);
    expect(ret.message).toBe('Error');
    expect(ret.isErr()).toBeTruthy();
  });

  test('err with invalid data', () => {
    const ret = new Ret(null);
    expect(ret.code).toBe(-1);
    expect(ret.isErr()).toBeTruthy();
  });

  test('new', () => {
    const ret = Ret.new({code: 0, message: 'Success'});
    expect(ret.code).toBe(0);
    expect(ret.message).toBe('Success');
    expect(ret.isSuc()).toBeTruthy();
  });

  test('Ret.suc with string message', () => {
    const ret = Ret.suc('ok');
    expect(ret.code).toBe(0);
    expect(ret.message).toBe('ok');
    expect(ret.isSuc()).toBeTruthy();
  });

  test('Ret.suc with object without code', () => {
    const ret = Ret.suc({
      message: 'ok',
      data: 'test',
    });
    expect(ret.code).toBe(0);
    expect(ret.message).toBe('ok');
    expect(ret.data).toBe('test');
    expect(ret.isSuc()).toBeTruthy();
  });

  test('Ret.suc with object without message', () => {
    const ret = Ret.suc({
      data: 'test',
    });
    expect(ret.code).toBe(0);
    expect(ret.message).toBe('操作成功');
    expect(ret.data).toBe('test');
    expect(ret.isSuc()).toBeTruthy();
  });

  test('Ret.err with string message', () => {
    const ret = Ret.err('err');
    expect(ret.code).toBe(-1);
    expect(ret.message).toBe('err');
    expect(ret.isSuc()).toBeFalsy();
  });

  test('Ret.err with custom code', () => {
    const ret = Ret.err('err', 1);
    expect(ret.code).toBe(1);
    expect(ret.message).toBe('err');
    expect(ret.isSuc()).toBeFalsy();
  });

  test('Ret.err with object without code', () => {
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
