import $, {Ret} from '../';

describe('miaoxing', () => {
  test('loading', async () => {
    expect($.loading).toBeInstanceOf(Object);
  });

  test('alert', async () => {
    expect($.alert).toBeInstanceOf(Object);
  });

  test('confirm', async () => {
    expect($.confirm).toBeInstanceOf(Object);
  });

  test('suc', async () => {
    expect($.suc).toBeInstanceOf(Object);
  });

  test('err', async () => {
    expect($.err).toBeInstanceOf(Object);
  });

  test('ret', async () => {
    expect($.ret).toBeInstanceOf(Object);
  });

  test('get', async () => {
    expect($.get).toBeInstanceOf(Object);
  });

  test('post', async () => {
    expect($.post).toBeInstanceOf(Object);
  });

  test('Ret.suc', () => {
    const ret = new Ret({code: 0, message: 'Success'});
    expect(ret.code).toBe(0);
    expect(ret.message).toBe('Success');
    expect(ret.isSuc()).toBeTruthy();
    expect(ret.isErr()).toBeFalsy();
  });

  test('Ret.err', () => {
    const ret = new Ret({code: 1, message: 'Error'});
    expect(ret.code).toBe(1);
    expect(ret.message).toBe('Error');
    expect(ret.isErr()).toBeTruthy();
  });

  test('Ret.err with invalid data', () => {
    const ret = new Ret(null);
    expect(ret.code).toBe(-1);
    expect(ret.isErr()).toBeTruthy();
  });

  test('Ret.new', () => {
    const ret = Ret.new({code: 0, message: 'Success'});
    expect(ret.code).toBe(0);
    expect(ret.message).toBe('Success');
    expect(ret.isSuc()).toBeTruthy();
  });
});
